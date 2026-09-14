import { spawn } from "node:child_process";
import { once } from "node:events";
import { createServer } from "node:net";
import path from "node:path";
import { setTimeout as delay } from "node:timers/promises";

const port = Number(process.env.QA_PORT ?? 3110);
const host = "127.0.0.1";
const baseUrl = `http://${host}:${port}`;
const rootDirectory = process.cwd();
const nextCli = path.join(rootDirectory, "node_modules", "next", "dist", "bin", "next");
const playwrightCli = path.join(
  rootDirectory,
  "node_modules",
  "@playwright",
  "test",
  "cli.js"
);

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error("QA_PORT must be a valid TCP port number.");
}

async function assertPortIsAvailable() {
  const probe = createServer();

  await new Promise((resolve, reject) => {
    probe.once("error", reject);
    probe.listen(port, host, resolve);
  });
  await new Promise((resolve, reject) =>
    probe.close((error) => (error ? reject(error) : resolve()))
  );
}

async function waitForServer(server) {
  let serverError;
  server.once("error", (error) => {
    serverError = error;
  });

  for (let attempt = 0; attempt < 60; attempt += 1) {
    if (serverError) {
      throw serverError;
    }

    try {
      const response = await fetch(baseUrl, { redirect: "manual" });

      if (response.ok) {
        return;
      }
    } catch {
      // The server is still starting.
    }

    await delay(250);
  }

  throw new Error(`QA server did not become ready at ${baseUrl}.`);
}

function run(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: rootDirectory,
      stdio: "inherit",
      windowsHide: true,
      ...options
    });

    child.once("error", reject);
    child.once("exit", (code) => resolve(code ?? 1));
  });
}

async function stopServer(server) {
  if (server.exitCode !== null || server.signalCode !== null) {
    return;
  }

  const closed = once(server, "exit");
  server.kill();
  await Promise.race([closed, delay(5_000)]);
}

await assertPortIsAvailable();

const server = spawn(
  process.execPath,
  [nextCli, "start", "--hostname", host, "--port", String(port)],
  {
    cwd: rootDirectory,
    stdio: "inherit",
    windowsHide: true
  }
);

try {
  await waitForServer(server);
  const code = await run(process.execPath, [playwrightCli, "test", ...process.argv.slice(2)], {
    env: {
      ...process.env,
      QA_BASE_URL: baseUrl
    }
  });

  process.exitCode = code;
} finally {
  await stopServer(server);
}
