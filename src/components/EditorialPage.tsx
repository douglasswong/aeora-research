import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";

type EditorialPageProps = {
  kicker: string;
  title: string;
  intro: string;
  children: ReactNode;
};

export function EditorialPage({
  kicker,
  title,
  intro,
  children
}: EditorialPageProps) {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div id="top" className="site-shell">
        <Header />
        <main id="main">
          <section className="editorial-hero section" aria-labelledby="page-title">
            <div className="section__inner editorial-hero__inner">
              <p className="section-kicker">{kicker}</p>
              <h1 id="page-title">{title}</h1>
              <p>{intro}</p>
            </div>
          </section>
          {children}
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
