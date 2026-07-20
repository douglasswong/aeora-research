export const CONTACT_EMAIL = "support@aeora-research.com";

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
  "Aeora Research Malaysia | Market Intelligence & Prop Desk";

export const SITE_DESCRIPTION =
  "Aeora Research PLT is a research-led financial markets company in Malaysia focused on market intelligence, trader development and disciplined market participation.";

export const NAV_ITEMS = [
  { label: "Focus", href: "/#focus" },
  { label: "Philosophy", href: "/#philosophy" },
  { label: "About", href: "/#about" }
] as const;

export const TEAM_NAV_ITEM = { label: "Our Team", href: "/team" } as const;

export const FOOTER_NAV_ITEMS = [
  ...NAV_ITEMS,
  TEAM_NAV_ITEM,
  { label: "Research", href: "/research" }
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

export const PARTNER_GROUPS = [
  {
    id: "market",
    title: "Our Partners",
    partners: [
      {
        name: "Kenanga Futures",
        logo: "/partners/kenanga-futures.png",
        variant: "kenanga"
      },
      {
        name: "Pepperstone",
        logo: "/partners/pepperstone.png",
        variant: "pepperstone"
      },
      { name: "ATFX", logo: "/partners/atfx-tight.png", variant: "atfx" }
    ]
  },
  {
    id: "tech",
    title: "Tech Partners",
    partners: [
      { name: "QST", logo: "/partners/qst.png", variant: "qst" },
      {
        name: "Shinjiru",
        logo: "/partners/shinjiru.png",
        variant: "shinjiru"
      },
      {
        name: "TradingView",
        logo: "/partners/tradingview.png",
        variant: "tradingview"
      }
    ]
  },
  {
    id: "ai",
    title: "AI Systems",
    partners: [
      { name: "OpenAI", logo: "/partners/openai.webp", variant: "openai" },
      { name: "Codex", logo: "/partners/codex.png", variant: "codex" }
    ]
  }
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
    context: "Approx. USD 580K",
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
