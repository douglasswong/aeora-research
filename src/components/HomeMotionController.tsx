import { ScrollRevealController } from "@/components/ScrollRevealController";

const REVEAL_SELECTORS = [
  ".positioning__inner",
  ".pillars .section-heading",
  ".pillars .pillar-card",
  ".about .section-heading",
  ".about__body",
  ".connect__intro",
  ".connect__panel",
  ".partner-group",
  ".trading-access__heading",
  ".trading-access__market"
] as const;

export function HomeMotionController() {
  return (
    <ScrollRevealController
      rootSelector=".home-page"
      revealSelectors={REVEAL_SELECTORS}
      rootDataKey="homeMotion"
      revealDataKey="homeReveal"
      delayVariable="--home-reveal-delay"
    />
  );
}
