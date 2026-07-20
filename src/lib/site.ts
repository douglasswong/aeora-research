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

export const PINNACLE_NAV_ITEM = { label: "Pinnacle", href: "/pinnacle" } as const;

export type PinnacleGalleryItem = {
  src: string;
  alt: string;
  caption: string;
  orientation: "portrait" | "landscape";
};

export type PinnacleGalleryEvent = {
  id: string;
  code: string;
  title: string;
  location: string;
  date: string;
  photos: readonly PinnacleGalleryItem[];
};

export const PINNACLE_GALLERY: readonly PinnacleGalleryEvent[] = [
  {
    id: "pic",
    code: "PIC 2026",
    title: "PhilipCapital 16th Investment Conference",
    location: "Kuala Lumpur, Malaysia",
    date: "July 2026",
    photos: [
      {
        src: "/pinnacle/gallery/pic-2026/conference-team.jpg",
        alt: "Aeora Research attendees at the PhilipCapital 16th Investment Conference",
        caption: "Aeora Research attendees at the conference.",
        orientation: "portrait"
      },
      {
        src: "/pinnacle/gallery/pic-2026/conference-pair.jpg",
        alt: "Two Aeora Research attendees at the PhilipCapital 16th Investment Conference",
        caption: "On site at PIC 2026.",
        orientation: "portrait"
      },
      {
        src: "/pinnacle/gallery/pic-2026/conference-audience.jpg",
        alt: "Attendees seated during the PhilipCapital 16th Investment Conference",
        caption: "Following the conference programme.",
        orientation: "landscape"
      }
    ]
  },
  {
    id: "fia",
    code: "FIA Forum 2026",
    title: "Futures Industry Association Forum",
    location: "Kuala Lumpur, Malaysia",
    date: "July 2026",
    photos: [
      {
        src: "/pinnacle/gallery/fia-2026/forum-group.jpg",
        alt: "Aeora Research attendees at an FIA Forum 2026 event space",
        caption: "Connecting with the market community.",
        orientation: "landscape"
      },
      {
        src: "/pinnacle/gallery/fia-2026/forum-pair.jpg",
        alt: "Two attendees wearing FIA Forum 2026 lanyards",
        caption: "At FIA Forum Kuala Lumpur.",
        orientation: "portrait"
      },
      {
        src: "/pinnacle/gallery/fia-2026/forum-delegates.jpg",
        alt: "Aeora Research attendees at FIA Forum 2026",
        caption: "In discussion at the forum.",
        orientation: "landscape"
      },
      {
        src: "/pinnacle/gallery/fia-2026/forum-stage.jpg",
        alt: "Two attendees in front of the FIA Forum Kuala Lumpur 2026 stage",
        caption: "FIA Forum Kuala Lumpur 2026.",
        orientation: "portrait"
      },
      {
        src: "/pinnacle/gallery/fia-2026/forum-venue.jpg",
        alt: "FIA Forum Kuala Lumpur 2026 venue and registration screen",
        caption: "Forum venue in Kuala Lumpur.",
        orientation: "portrait"
      }
    ]
  }
];

export const TEAM_MEMBERS = [
  {
    index: "02",
    slug: "nicol",
    name: "Nicol",
    role: "Co-founder & Head of Finance",
    image: "/team/nicol.png"
  },
  {
    index: "03",
    slug: "max",
    name: "Max Fong",
    role: "Head of Multi-Asset Trading & Opportunity Scout",
    image: "/team/max-fong.png"
  },
  {
    index: "04",
    slug: "joshua",
    name: "Joshua Chew",
    role: "Execution & Market Structure Analyst",
    image: "/team/joshua-chew.png"
  }
] as const;

export type TeamMember = (typeof TEAM_MEMBERS)[number];

export const FOOTER_NAV_ITEMS = [
  ...NAV_ITEMS,
  TEAM_NAV_ITEM,
  PINNACLE_NAV_ITEM,
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
      {
        name: "Codex",
        logo: "/partners/codex-tight.png",
        variant: "codex"
      }
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
