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

export const KENANGA_FUTURES_APPLICATION_URL =
  "https://dco.kenanga.com.my/affiliate?agentCode=MRKNDW";

export const TRADER_DEVELOPMENT_INTEREST_URL =
  "https://forms.gle/5JtxMrrjjSH7bHj18";

export const TRADER_DEVELOPMENT_INTAKE = {
  status: "Ended",
  availability: null,
  dates: "22-23 August 2026",
  days: "Saturday & Sunday",
  location: "Kuala Lumpur, Malaysia",
  format: "Small Class, Training Room"
} as const;

export const TRADER_DEVELOPMENT_UPCOMING_INTAKE = {
  status: "Open",
  availability: "Limited Slots Left",
  proposedDates: "7-8 November 2026",
  days: "Saturday & Sunday",
  location: "Kuala Lumpur, Malaysia",
  format: "Small Class, Training Room"
} as const;

export const SITE_TITLE =
  "Aeora Research Malaysia | Market Intelligence & Prop Desk";

export const SITE_DESCRIPTION =
  "Aeora Research is a Malaysia based research-led market ecosystem focused on market intelligence, trader development and performance-driven thinking.";

export const HOME_NAV_ITEM = { label: "Home", href: "/" } as const;

export const ABOUT_NAV_ITEM = { label: "About", href: "/about" } as const;

export const RESEARCH_NAV_ITEM = {
  label: "Research",
  href: "/research"
} as const;

export const EVENT_NAV_ITEM = {
  label: "Event",
  href: "/atfx-wtc"
} as const;

export const TEAM_NAV_ITEM = { label: "Our Team", href: "/team" } as const;

export const TRADER_DEVELOPMENT_NAV_ITEM = {
  label: "Trader Development",
  compactLabel: "Trader Dev.",
  narrowLabel: "Dev.",
  href: "/pinnacle"
} as const;

export const FAQ_NAV_ITEM = { label: "FAQ", href: "/faq" } as const;

export const OTHER_SERVICES_NAV_ITEM = {
  label: "Other Services",
  href: "/dngconsultation"
} as const;

export const COURSES_NAV_ITEM = { label: "Courses", href: "/courses" } as const;

export const KF_ONBOARDING_NAV_ITEM = {
  label: "KF Onboarding",
  href: "/guides/kenanga-futures-account-opening#before-you-begin"
} as const;

export const DNG_CONSULTATION_CONTACT_URL =
  "https://forms.gle/5JtxMrrjjSH7bHj18";

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
  description?: string;
  link?: {
    label: string;
    href: string;
  };
  location: string;
  date: string;
  photos: readonly PinnacleGalleryItem[];
};

export const PINNACLE_GALLERY: readonly PinnacleGalleryEvent[] = [
  {
    id: "atdp-batch-4",
    code: "ATDP 2026",
    title: "Aeora Trader Development Batch-4",
    location: "Kuala Lumpur, Malaysia",
    date: "August 2026",
    photos: [
      {
        src: "/pinnacle/gallery/atdp-batch-4/batch-group.webp",
        alt: "Aeora Trader Development Batch-4 participants and facilitators in Kuala Lumpur",
        caption: "Aeora Trader Development Batch-4.",
        orientation: "landscape"
      },
      {
        src: "/pinnacle/gallery/atdp-batch-4/classroom-overview.webp",
        alt: "Aeora Trader Development participants during a classroom session",
        caption: "A focused small-class market practice session.",
        orientation: "landscape"
      },
      {
        src: "/pinnacle/gallery/atdp-batch-4/facilitator-team.webp",
        alt: "Aeora Trader Development Batch-4 facilitator team",
        caption: "The Batch-4 facilitator team.",
        orientation: "portrait"
      },
      {
        src: "/pinnacle/gallery/atdp-batch-4/market-practice.webp",
        alt: "Participants following a practical market-structure lesson",
        caption: "Connecting market structure with live practice.",
        orientation: "portrait"
      },
      {
        src: "/pinnacle/gallery/atdp-batch-4/volume-profile-session.webp",
        alt: "Aeora facilitator explaining volume profile and trade flow",
        caption: "Volume profile and trade-flow discussion.",
        orientation: "portrait"
      },
      {
        src: "/pinnacle/gallery/atdp-batch-4/trade-flow-briefing.webp",
        alt: "Aeora facilitator presenting a trade-flow lesson to participants",
        caption: "Reviewing participation and trade flow.",
        orientation: "portrait"
      },
      {
        src: "/pinnacle/gallery/atdp-batch-4/auction-market-session.webp",
        alt: "Aeora facilitator explaining auction market theory in the classroom",
        caption: "Auction market theory in practice.",
        orientation: "portrait"
      },
      {
        src: "/pinnacle/gallery/atdp-batch-4/participant-chart-review.webp",
        alt: "Participant presenting a chart structure during the Aeora programme",
        caption: "Participant-led chart review.",
        orientation: "portrait"
      },
      {
        src: "/pinnacle/gallery/atdp-batch-4/workshop-break.webp",
        alt: "Aeora Trader Development participants exchanging views during a workshop break",
        caption: "Exchanging perspectives between sessions.",
        orientation: "portrait"
      },
      {
        src: "/pinnacle/gallery/atdp-batch-4/participant-discussion.webp",
        alt: "Aeora Trader Development participants discussing market work in small groups",
        caption: "Small-group discussion and review.",
        orientation: "portrait"
      }
    ]
  },
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
  },
  {
    id: "malaysia-50-plus-expo",
    code: "Malaysia 50+ Expo 2024",
    title: "Malaysia 50+ Expo",
    description: "Our very first expo participation and experience with the team.",
    location: "Penang Island, Malaysia",
    date: "October 2024",
    photos: [
      {
        src: "/pinnacle/gallery/malaysia-50-plus-expo-2024/certificate-of-appreciation.webp",
        alt: "D&G Consultation team receiving a certificate of appreciation at the Malaysia 50+ Expo in Penang Island",
        caption: "Receiving a certificate of appreciation at the Expo.",
        orientation: "landscape"
      },
      {
        src: "/pinnacle/gallery/malaysia-50-plus-expo-2024/expo-team.webp",
        alt: "D&G Consultation team at the Malaysia 50+ Expo booth in Penang Island",
        caption: "The team at the Malaysia 50+ Expo booth.",
        orientation: "landscape"
      }
    ]
  },
  {
    id: "at-global-wine-cheese",
    code: "AT Global 2024",
    title: "Wine and Cheese Session",
    description:
      "An afternoon red wine and market outlook session with AT Global, featuring Weems Chan, ATFX Global Head of Marketing, and Martin Lam, ATFX Chief Analyst, Asia Pacific.",
    location: "Petaling Jaya, Malaysia",
    date: "July 2024",
    photos: [
      {
        src: "/pinnacle/gallery/at-global-wine-cheese-2024/session-group.webp",
        alt: "AT Global guests and attendees gathered at the Wine and Cheese Session in Petaling Jaya",
        caption: "Guests gathered for the Wine and Cheese Session.",
        orientation: "landscape"
      },
      {
        src: "/pinnacle/gallery/at-global-wine-cheese-2024/market-outlook-session.webp",
        alt: "Attendees following the AT Global market outlook session",
        caption: "Following the afternoon market outlook discussion.",
        orientation: "portrait"
      },
      {
        src: "/pinnacle/gallery/at-global-wine-cheese-2024/market-outlook-presentation.webp",
        alt: "ATFX market outlook presentation during the Wine and Cheese Session",
        caption: "Market outlook in discussion.",
        orientation: "portrait"
      },
      {
        src: "/pinnacle/gallery/at-global-wine-cheese-2024/wine-toast.webp",
        alt: "Guests raising a toast during the Wine and Cheese Session",
        caption: "A toast to the afternoon session.",
        orientation: "landscape"
      },
      {
        src: "/pinnacle/gallery/at-global-wine-cheese-2024/atfx-hosts.webp",
        alt: "ATFX Global hosts at the Wine and Cheese Session",
        caption: "Welcoming guests to the session.",
        orientation: "portrait"
      },
      {
        src: "/pinnacle/gallery/at-global-wine-cheese-2024/wine-and-cheese-board.webp",
        alt: "Wine and cheese board prepared for session guests",
        caption: "Wine and cheese prepared for guests.",
        orientation: "portrait"
      },
      {
        src: "/pinnacle/gallery/at-global-wine-cheese-2024/attendee-table.webp",
        alt: "Guests seated at the Wine and Cheese Session",
        caption: "Conversations around the table.",
        orientation: "landscape"
      },
      {
        src: "/pinnacle/gallery/at-global-wine-cheese-2024/market-outlook-table.webp",
        alt: "Guests following a market outlook session with ATFX and Malaysian flags",
        caption: "Market outlook with the session guests.",
        orientation: "landscape"
      },
      {
        src: "/pinnacle/gallery/at-global-wine-cheese-2024/wine-presentation.webp",
        alt: "ATFX representatives presenting a bottle of wine during the session",
        caption: "A moment from the wine presentation.",
        orientation: "landscape"
      },
      {
        src: "/pinnacle/gallery/at-global-wine-cheese-2024/market-outlook-conversation.webp",
        alt: "Guests at the AT Global Wine and Cheese Session",
        caption: "An afternoon of market conversation.",
        orientation: "landscape"
      }
    ]
  },
  {
    id: "at-global-london-office",
    code: "AT Global 2023",
    title: "ATFX Office Visit",
    description:
      "ATFX Office Visit at Cornhill, the historic nucleus and financial centre of modern London, England. Hosted by Wei Qiang Zhang, Managing Director of ATFX Connect Global.",
    location: "London, UK",
    date: "October 2023",
    photos: [
      {
        src: "/pinnacle/gallery/at-global-london-office-2023/cornhill-street.webp",
        alt: "Visitor outside 32 Cornhill near the ATFX London office",
        caption: "At Cornhill in the City of London.",
        orientation: "portrait"
      },
      {
        src: "/pinnacle/gallery/at-global-london-office-2023/royal-exchange-entrance.webp",
        alt: "Visitor outside the Royal Exchange Buildings near ATFX at Cornhill",
        caption: "Arriving at the Royal Exchange Buildings.",
        orientation: "portrait"
      },
      {
        src: "/pinnacle/gallery/at-global-london-office-2023/atfx-awards.webp",
        alt: "ATFX awards and recognition on display at the London office",
        caption: "ATFX awards and recognition.",
        orientation: "portrait"
      },
      {
        src: "/pinnacle/gallery/at-global-london-office-2023/london-office.webp",
        alt: "Workstations inside the ATFX London office",
        caption: "Inside the ATFX London office.",
        orientation: "portrait"
      },
      {
        src: "/pinnacle/gallery/at-global-london-office-2023/atfx-office-visit.webp",
        alt: "Visitor meeting the ATFX team in the London office",
        caption: "Meeting the ATFX team in London.",
        orientation: "portrait"
      },
      {
        src: "/pinnacle/gallery/at-global-london-office-2023/atfx-office-portrait.webp",
        alt: "Visitor at the ATFX London office",
        caption: "At the ATFX London office.",
        orientation: "portrait"
      },
      {
        src: "/pinnacle/gallery/at-global-london-office-2023/atfx-london-coffee.webp",
        alt: "ATFX-branded coffee during the London office visit",
        caption: "A pause during the office visit.",
        orientation: "portrait"
      },
      {
        src: "/pinnacle/gallery/at-global-london-office-2023/cornhill-directory.webp",
        alt: "Directory listing ATFX at 32 Cornhill in London",
        caption: "ATFX at 32 Cornhill.",
        orientation: "portrait"
      }
    ]
  },
  {
    id: "at-global-bangkok-doe",
    code: "AT Global 2023",
    title: "ATFX Office Visit & Duke of Edinburgh Cup",
    description:
      "An ATFX office visit in Bangkok alongside The Duke of Edinburgh Cup 2023 Bangkok Qualifier golf session.",
    link: {
      label: "Official Duke of Edinburgh Cup announcement",
      href: "https://www.atfx.com/en/about-us/company-news/atfx-official-partner-duke-of-edinburgh-cup"
    },
    location: "Bangkok, Thailand",
    date: "July 2023",
    photos: [
      {
        src: "/pinnacle/gallery/at-global-bangkok-doe-2023/bangkok-office-01.webp",
        alt: "ATFX visitors at the AT Global Solutions office reception in Bangkok",
        caption: "Arriving at the AT Global Solutions office in Bangkok.",
        orientation: "portrait"
      },
      {
        src: "/pinnacle/gallery/at-global-bangkok-doe-2023/bangkok-office-02.webp",
        alt: "ATFX team gathering during the Bangkok office visit",
        caption: "Team gathering during the Bangkok office visit.",
        orientation: "portrait"
      },
      {
        src: "/pinnacle/gallery/at-global-bangkok-doe-2023/bangkok-office-03.webp",
        alt: "ATFX representatives at the Duke of Edinburgh Cup 2023 Bangkok Qualifier",
        caption: "At the Duke of Edinburgh Cup 2023 Bangkok Qualifier.",
        orientation: "landscape"
      },
      {
        src: "/pinnacle/gallery/at-global-bangkok-doe-2023/bangkok-office-04.webp",
        alt: "ATFX participant on the golf course at the Duke of Edinburgh Cup 2023 Bangkok Qualifier",
        caption: "A moment on the golf course.",
        orientation: "portrait"
      },
      {
        src: "/pinnacle/gallery/at-global-bangkok-doe-2023/bangkok-office-05.webp",
        alt: "AT Global Solutions office reception in Bangkok",
        caption: "AT Global Solutions office reception.",
        orientation: "portrait"
      },
      {
        src: "/pinnacle/gallery/at-global-bangkok-doe-2023/doe-bangkok-golf-session.webp",
        alt: "ATFX participants at the Duke of Edinburgh Cup 2023 Bangkok Qualifier",
        caption: "The Duke of Edinburgh Cup 2023 Bangkok Qualifier.",
        orientation: "landscape"
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
    role: "Head of Multi-Asset Strategy & Opportunity Scout",
    image: "/team/max-fong.png"
  },
  {
    index: "04",
    slug: "joshua",
    name: "Joshua Chew",
    role: "Execution & Market Structure Analyst",
    image: "/team/joshua-chew.png"
  },
  {
    index: "05",
    slug: "marcus",
    name: "Marcus Lam",
    role: "FX & CFD Strategist",
    image: "/team/marcus-lam.webp"
  },
  {
    index: "06",
    slug: "shady",
    name: "Shady Kambai",
    role: "Global Client Relations",
    image: "/team/shady-kambai-portrait.webp"
  },
  {
    index: "07",
    slug: "joel",
    name: "Joel Banner",
    role: "Client Relationship Manager",
    image: "/team/joel-banner-portrait.webp"
  }
] as const;

export type TeamMember = (typeof TEAM_MEMBERS)[number];

export const FOOTER_NAV_ITEMS = [
  HOME_NAV_ITEM,
  TEAM_NAV_ITEM,
  RESEARCH_NAV_ITEM,
  TRADER_DEVELOPMENT_NAV_ITEM,
  EVENT_NAV_ITEM,
  OTHER_SERVICES_NAV_ITEM,
  COURSES_NAV_ITEM,
  KF_ONBOARDING_NAV_ITEM
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
  "Commercial Hedging",
  "Research Collaboration",
  "Institutional Partnerships",
  "Portfolio Consultations"
] as const;

export const PARTNER_GROUPS = [
  {
    id: "market",
    title: "Our Partners",
    partners: [
      {
        name: "Kenanga Futures",
        logo: "/partners/kenanga-futures.png",
        variant: "kenanga",
        href: KENANGA_FUTURES_APPLICATION_URL
      },
      {
        name: "Pepperstone",
        logo: "/partners/pepperstone.png",
        variant: "pepperstone",
        href: "https://trk.pepperstonepartners.com/SH13p"
      },
      {
        name: "ATFX",
        logo: "/partners/atfx-tight.png",
        variant: "atfx",
        href: "https://login-gm.atfx-gm.com/register?utm_medium=salescustomelink&redirect_uri=applyLive&invitationCode=DekxDNDPych4PXFJVJjag1HtimaTpw63iZzQCJjqhXk%3D"
      }
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
        variant: "tradingview",
        href: "https://www.tradingview.com/gopro/?share_your_love=douglasswg"
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
  },
  {
    id: "payment",
    title: "Payment Partners",
    partners: [
      {
        name: "RedotPay",
        logo: "/partners/redotpay.webp",
        variant: "redotpay",
        href: "https://url.hk/i/en/hbq89"
      },
      { name: "5Pay", logo: "/partners/5pay.png", variant: "5pay" }
    ]
  },
  {
    id: "strategic",
    title: "Strategic Partners",
    partners: [
      {
        name: "Max Anyarat Advisory",
        logo: "/partners/max-anyarat.webp",
        variant: "max-anyarat",
        href: "https://www.instagram.com/maxanyaratadvisory/"
      },
      {
        name: "Manulife Investment Management",
        logo: "/partners/manulife-investment-management.png",
        variant: "manulife",
        href: "https://client.asia.manulifeam.com/en_MY/NewUser?invitation_url=bce1ec10-b72d-11f1-945c-a3f76360649c_n76hjduas8xro6wl1jjzx5fgkgjtanhafntqpqfnhskal0wigyccwdjajonrlwgz.1790154249553"
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
    value: 12,
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

export const LINKEDIN_COMPANY_URL =
  "https://www.linkedin.com/company/aeora-research/";

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
