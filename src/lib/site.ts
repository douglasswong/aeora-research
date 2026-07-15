export const CONTACT_EMAIL = "enquiry@chartsdworks.com";

export const COMPANY_NAME = "Aeora Research PLT";

export const COMPANY_REGISTRATION = "202604001729(LLP0046968-LGN)";

export const COMPANY_ADDRESS_LINES = [
  "30A (1st Floor), Jalan Merak 4A,",
  "Bandar Puchong Jaya, 47100 Puchong,",
  "Selangor, Malaysia"
] as const;

export const OFFICE_PHONE = {
  label: "+603 5626 5777",
  href: "tel:+60356265777"
} as const;

export const HOTLINE_PHONE = {
  label: "+6019 8899 296",
  href: "tel:+60198899296"
} as const;

export const MAP_EMBED_URL =
  "https://www.google.com/maps?q=30A%20Jalan%20Merak%204A%20Bandar%20Puchong%20Jaya%2047100%20Puchong%20Selangor%20Malaysia&output=embed";

export const SITE_URL = "https://aeora-research.com";

export const SITE_TITLE =
  "Aeora Research | Prop Desk, Market Intelligence & Edge";

export const SITE_DESCRIPTION =
  "Aeora Research is a research-led market ecosystem focused on market intelligence, trader development and performance-driven thinking.";

export const NAV_ITEMS = [
  { label: "Focus", href: "#focus" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "About", href: "#about" }
] as const;

export const PILLARS = [
  {
    eyebrow: "01",
    title: "Prop Desk",
    symbol: "prop",
    copy:
      "A structured environment centred on trader development, performance discipline and pathways toward professional market participation."
  },
  {
    eyebrow: "02",
    title: "Market Intelligence",
    symbol: "intelligence",
    copy:
      "Research across macro conditions, market structure, liquidity, positioning and cross-asset developments."
  },
  {
    eyebrow: "03",
    title: "Edge",
    symbol: "edge",
    copy:
      "The pursuit of repeatable advantage through process, risk discipline, decision quality and continuous refinement."
  }
] as const;

export const ENQUIRY_PATHWAYS = [
  "Trader Enquiries",
  "Research Collaboration",
  "Institutional Partnerships"
] as const;

export const NUMBERS = [
  {
    label: "Avg Annual Portfolio Target",
    kind: "range",
    from: 15,
    to: 30,
    suffix: "%"
  },
  {
    label: "Number of Prop Traders",
    kind: "integer",
    value: 8,
    suffix: "+"
  },
  {
    label: "Current AUM",
    kind: "decimal",
    value: 2.3,
    suffix: "mil MYR+",
    note: "still growing"
  }
] as const;

export const SOCIAL_CHANNELS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/aeoraresearch/"
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1SG2VkQo3J/?mibextid=wwXIfr"
  }
] as const;
