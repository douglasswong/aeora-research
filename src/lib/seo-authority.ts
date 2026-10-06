export type AuthorityLink = {
  href: string;
  label: string;
  description: string;
};

type AuthorityFaq = {
  question: string;
  answer: string;
};

type AuthorityPrinciple = {
  number: string;
  title: string;
  copy: string;
};

export type AuthorityPillar = {
  slug: string;
  kicker: string;
  title: string;
  description: string;
  introduction: string;
  fieldLabel: string;
  fieldTags: readonly string[];
  definition: string;
  sections: readonly {
    eyebrow: string;
    title: string;
    paragraphs: readonly string[];
  }[];
  principles: readonly AuthorityPrinciple[];
  faqs: readonly AuthorityFaq[];
  relatedLinks: readonly AuthorityLink[];
};

export type AuthorityResourceSection = {
  eyebrow: string;
  title: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
  table?: {
    caption: string;
    headers: readonly string[];
    rows: readonly (readonly string[])[];
  };
  callout?: {
    title: string;
    copy: string;
  };
};

export type AuthorityResource = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  excerpt: string;
  category: string;
  noteNumber: string;
  tags: readonly string[];
  keyPoints: readonly string[];
  sections: readonly AuthorityResourceSection[];
  faqs: readonly AuthorityFaq[];
  relatedLinks: readonly AuthorityLink[];
  sources: readonly {
    label: string;
    href: string;
  }[];
};

export const SEO_AUTHORITY_PUBLISHED_AT = "2026-01-01";

export const AUTHORITY_PILLARS: readonly AuthorityPillar[] = [
  {
    slug: "prop-desk-malaysia",
    kicker: "Trader development / Malaysia",
    title: "Prop Desk & Professional Trader Development in Malaysia",
    description:
      "A practical, non-promotional guide to the work, governance and development habits commonly associated with professional trading environments.",
    introduction:
      "A prop desk is not a shortcut, a funded-account promise or a job advertisement. It is a working environment built around market preparation, risk controls, review and accountable decision-making.",
    fieldLabel: "Professional market practice",
    fieldTags: ["Preparation", "Risk", "Review", "Execution"],
    definition:
      "In this guide, prop desk describes a professional trading environment and the disciplines around it. Aeora Research does not represent itself as a prop firm, broker, fund manager or provider of guaranteed access to trading capital.",
    sections: [
      {
        eyebrow: "01 / Definition",
        title: "Look past the label.",
        paragraphs: [
          "A prop desk is a working trading environment, not a funded-account promise or a job advert. Look for clear rules around capital, risk, execution and review; treat a programme's fees, eligibility and payout terms as due diligence, not proof of a professional pathway."
        ]
      },
      {
        eyebrow: "02 / Environment",
        title: "Build an observable process.",
        paragraphs: [
          "Professional development makes decisions observable: record market context, define risk before entry, document execution and review the result. The test is whether the process can be repeated, challenged and improved."
        ]
      },
      {
        eyebrow: "03 / Malaysia",
        title: "Check local suitability.",
        paragraphs: [
          "Before paying, verify the provider's legal entity, product terms, country eligibility and regulatory status. The Securities Commission Malaysia Investor Alert List is a useful starting point alongside the provider's own documentation."
        ]
      }
    ],
    principles: [
      {
        number: "01",
        title: "Context before position",
        copy: "Frame the market condition, liquidity and event risk before selecting an entry."
      },
      {
        number: "02",
        title: "Risk before conviction",
        copy: "Define loss limits, size and invalidation while the decision is still calm."
      },
      {
        number: "03",
        title: "Review before repetition",
        copy: "Keep a decision record that separates process quality from the outcome of one trade."
      },
      {
        number: "04",
        title: "Terms before commitment",
        copy: "Read commercial, eligibility and regulatory terms before paying for a service or evaluation."
      }
    ],
    faqs: [
      {
        question: "Is Aeora Research a prop firm?",
        answer:
          "No. Aeora Research presents research, education and trader-development material. It does not represent itself as a prop firm, broker, fund manager or provider of guaranteed funded-trader access."
      },
      {
        question: "Does trader development guarantee capital, employment or a desk role?",
        answer:
          "No. Learning material, an assessment or an expression of interest does not guarantee admission, funding, employment, evaluation, capital allocation or any professional trading role."
      },
      {
        question: "What should a Malaysian participant check before joining a trading programme?",
        answer:
          "Check the provider's identity, the actual product, fees, eligibility, country availability, risk disclosures and applicable regulatory information. Do not rely on social-media claims or a label alone."
      }
    ],
    relatedLinks: [
      {
        href: "/research/prop-firm-vs-prop-desk-malaysia",
        label: "Prop firm vs prop desk",
        description: "A neutral comparison of terms, incentives and due-diligence questions."
      },
      {
        href: "/research/professional-trader-roadmap-malaysia",
        label: "Professional trader roadmap",
        description: "A staged path for building market practice without career promises."
      },
      {
        href: "/pinnacle",
        label: "Aeora Trader Development",
        description: "Current programme information and any stated participation details."
      }
    ]
  },
  {
    slug: "institutional-trading-malaysia",
    kicker: "Market structure / Malaysia",
    title: "Institutional Trading in Malaysia: Market Structure, Access and Risk",
    description:
      "An educational overview of institutional trading disciplines, market access, liquidity and governance without implying Aeora Research provides institutional execution.",
    introduction:
      "Institutional trading is a collection of roles, controls and execution processes. It is not a badge a trader earns by using an advanced chart, and it is not a promise of access to a bank, broker or trading venue.",
    fieldLabel: "Market structure study",
    fieldTags: ["Liquidity", "Access", "Controls", "Process"],
    definition:
      "For this page, institutional trading refers to the systems and responsibilities used by organisations that execute, manage or facilitate substantial market activity. Aeora Research provides educational context, not institutional trading, execution, brokerage, institutional services or personalised advice. It is not a bank, broker, exchange or fund manager.",
    sections: [
      {
        eyebrow: "01 / Mechanics",
        title: "Focus on the workflow.",
        paragraphs: [
          "Institutional trading is defined by how orders, risk, approvals and records are managed. Visual tools or market vocabulary alone do not create the controls, responsibilities or permissions of an institutional role."
        ]
      },
      {
        eyebrow: "02 / Liquidity",
        title: "Put liquidity in context.",
        paragraphs: [
          "A displayed price does not guarantee available size or execution. Assess depth, timing, venue and risk; formal structures such as Bank Negara Malaysia's principal-dealer framework apply only within their specific market."
        ]
      },
      {
        eyebrow: "03 / Access",
        title: "Access still needs control.",
        paragraphs: [
          "Direct market access can shorten an electronic route, not remove financial, legal or pre-trade controls. Availability depends on the venue, broker, asset class, jurisdiction and onboarding requirements."
        ]
      }
    ],
    principles: [
      {
        number: "01",
        title: "Venue awareness",
        copy: "Know where an order is routed and what the relevant market structure permits."
      },
      {
        number: "02",
        title: "Pre-trade control",
        copy: "Use position, credit and risk limits before an order can create avoidable damage."
      },
      {
        number: "03",
        title: "Execution evidence",
        copy: "Assess the order decision, not only the final chart outcome."
      },
      {
        number: "04",
        title: "Post-trade accountability",
        copy: "Record decisions, exceptions and lessons so the process can improve."
      }
    ],
    faqs: [
      {
        question: "Does institutional trading mean guaranteed better returns?",
        answer:
          "No. Institutional processes may use different tools, controls and responsibilities, but they do not remove market risk or guarantee an outcome."
      },
      {
        question: "Does Aeora Research provide direct market access?",
        answer:
          "No. Aeora Research does not provide brokerage, execution or direct market access through this website."
      },
      {
        question: "Why learn about market structure before trading?",
        answer:
          "Market structure helps explain how prices, liquidity, order types and venues interact. It is useful context for more careful preparation, but it is not a trade signal."
      }
    ],
    relatedLinks: [
      {
        href: "/research/direct-market-access-explained",
        label: "Direct market access explained",
        description: "How DMA differs from a generic platform feature and why controls remain important."
      },
      {
        href: "/research/retail-vs-institutional-trading",
        label: "Retail and institutional trading",
        description: "A practical comparison of roles, constraints and information needs."
      },
      {
        href: "/courses",
        label: "Course catalogue",
        description: "Current educational offerings and their stated scope."
      }
    ]
  },
  {
    slug: "professional-trader-career-malaysia",
    kicker: "Career education / Malaysia",
    title: "How to Become a Professional Trader in Malaysia",
    description:
      "A grounded guide to professional trading careers, transferable skills, learning pathways and the limits of any generic career roadmap.",
    introduction:
      "A professional trading career is not one job title or one income model. It can include employed market roles, research, execution support, risk, operations or independent activity, each with distinct standards and uncertainty.",
    fieldLabel: "Career pathway map",
    fieldTags: ["Skills", "Process", "Evidence", "Judgement"],
    definition:
      "This page is career education, not a job board or recruitment offer. Aeora Research does not advertise guaranteed roles, placements, funded accounts, employment outcomes or income results.",
    sections: [
      {
        eyebrow: "01 / Reality check",
        title: "Start with capability.",
        paragraphs: [
          "A trading career is built on reading markets, communicating decisions, following risk controls and working with accountability. Separate employment roles, commercial education and funded-trader marketing before treating any listing as a career path."
        ]
      },
      {
        eyebrow: "02 / Evidence",
        title: "Make progress reviewable.",
        paragraphs: [
          "A market journal, pre-trade plan, risk log and review show how a person thinks and improves. Employers and programmes set their own role, market and jurisdiction requirements."
        ]
      },
      {
        eyebrow: "03 / Malaysia",
        title: "Verify the path.",
        paragraphs: [
          "A course, social profile or community is not an employment promise or regulatory approval. For regulated roles, ask the prospective employer directly and consult the relevant Securities Commission Malaysia materials."
        ]
      }
    ],
    principles: [
      {
        number: "01",
        title: "Build foundations",
        copy: "Learn instrument mechanics, risk language and the difference between a view and an executable process."
      },
      {
        number: "02",
        title: "Practise observation",
        copy: "Turn market notes into a repeatable habit rather than a stream of predictions."
      },
      {
        number: "03",
        title: "Show review quality",
        copy: "Document why a decision was made and what changed after the market responded."
      },
      {
        number: "04",
        title: "Verify opportunities",
        copy: "Confirm role, employer, location and licensing requirements from the actual source."
      }
    ],
    faqs: [
      {
        question: "Does Aeora Research offer trading jobs in Malaysia?",
        answer:
          "This page is not a job listing. Aeora Research does not use it to promise employment, placements or a professional trading role."
      },
      {
        question: "Do I need a specific qualification to work in trading?",
        answer:
          "Requirements vary by role, employer, product and jurisdiction. Confirm current requirements directly with the prospective employer and, where relevant, the appropriate regulator or professional body."
      },
      {
        question: "Can a course guarantee a professional trading career?",
        answer:
          "No. Education can support skill development, but it cannot guarantee job availability, admission, funding, returns or a career outcome."
      }
    ],
    relatedLinks: [
      {
        href: "/research/professional-trader-roadmap-malaysia",
        label: "Professional trader roadmap",
        description: "Six practical stages for developing a more reviewable market process."
      },
      {
        href: "/research/trading-career-malaysia",
        label: "Trading careers in Malaysia",
        description: "How to distinguish role types, skills and due-diligence questions."
      },
      {
        href: "/pinnacle",
        label: "Aeora Trader Development",
        description: "Current programme information, without implied career outcomes."
      }
    ]
  }
] as const;

export const AUTHORITY_RESOURCE_LINKS: readonly AuthorityLink[] = [
  {
    href: "/research/prop-firm-vs-prop-desk-malaysia",
    label: "Prop firm vs prop desk",
    description: "Separate the commercial labels, operating models and questions that matter."
  },
  {
    href: "/research/professional-trader-roadmap-malaysia",
    label: "Professional trader roadmap",
    description: "Build from foundations to a reviewable professional process."
  },
  {
    href: "/research/trading-career-malaysia",
    label: "Trading career in Malaysia",
    description: "A career guide that distinguishes education, recruitment and regulated roles."
  },
  {
    href: "/research/market-making-explained",
    label: "Market making explained",
    description: "How two-way quoting and liquidity provision fit into market structure."
  },
  {
    href: "/research/direct-market-access-explained",
    label: "Direct market access explained",
    description: "What DMA means, what it does not mean and why controls still matter."
  },
  {
    href: "/research/retail-vs-institutional-trading",
    label: "Retail vs institutional trading",
    description: "Compare objectives, constraints, information and accountability."
  },
  {
    href: "/research/trading-desk-risk-management",
    label: "Trading desk risk management",
    description: "Risk limits, position sizing, review and operational discipline."
  },
  {
    href: "/research/order-flow-and-volume-profile",
    label: "Order flow and volume profile",
    description: "How to use market-activity tools as context rather than certainty."
  }
] as const;

const BNM_PRINCIPAL_DEALERS = {
  label: "Bank Negara Malaysia: Principal Dealers and two-way quotation responsibilities",
  href: "https://financialmarkets.bnm.gov.my/list-of-principal-dealers"
} as const;

const BNM_FX_MARKET = {
  label: "Bank Negara Malaysia: Foreign-exchange market access and primary market makers",
  href: "https://financialmarkets.bnm.gov.my/Foreign-Exchange-Market"
} as const;

const BNM_ETP = {
  label: "Bank Negara Malaysia: Approved electronic trading platforms",
  href: "https://www.bnm.gov.my/-/approved-electronic-trading-platforms-etp-"
} as const;

const SC_INVESTOR_ALERT = {
  label: "Securities Commission Malaysia: Investor Alert List",
  href: "https://www.sc.com.my/investor-alert-list"
} as const;

const SC_LICENSING = {
  label: "Securities Commission Malaysia: Licensing process",
  href: "https://www.sc.com.my/about/client-charter/business-processes/the-licensing-process"
} as const;

const BURSA_FTAP = {
  label: "Bursa Malaysia: Futures Trading Apprenticeship Programme overview",
  href: "https://assist.bursamalaysia.com/hc/en-us/articles/13381601137167-What-is-the-Futures-Trading-Apprenticeship-Programme-FTAP"
} as const;

const SIDC = {
  label: "Securities Industry Development Corporation: Malaysian capital-market learning",
  href: "https://www.sidc.com.my/"
} as const;

const FINRA_MARKET_ACCESS = {
  label: "FINRA: Market access and pre-trade risk controls",
  href: "https://www.finra.org/rules-guidance/key-topics/market-access"
} as const;

const FINRA_STOCKS = {
  label: "FINRA: Direct access, order routing and execution venues",
  href: "https://www.finra.org/investors/investing/investment-products/stocks"
} as const;

const CME_FX_PROFILE = {
  label: "CME Group: Order-book depth, spreads and market-activity data",
  href: "https://www.cmegroup.com/markets/ebs/fx-market-profile.html"
} as const;

export const AUTHORITY_RESOURCES: readonly AuthorityResource[] = [
  {
    slug: "prop-firm-vs-prop-desk-malaysia",
    title: "Prop Firm vs Prop Desk in Malaysia: What Is the Difference?",
    shortTitle: "Prop Firm vs Prop Desk",
    description:
      "A neutral explanation of prop-firm evaluations, professional trading desks and the due-diligence questions Malaysian traders should ask before paying for a programme.",
    excerpt:
      "Similar language can describe very different commercial arrangements. Start with the operating model, not the promise.",
    category: "Trader Development",
    noteNumber: "G01",
    tags: [
      "prop firm vs prop desk Malaysia",
      "proprietary trading Malaysia",
      "funded trader programme Malaysia",
      "prop desk education"
    ],
    keyPoints: [
      "A prop firm, a prop desk and an online evaluation are not interchangeable terms.",
      "Commercial rules, account type, fees and country eligibility should be checked from the provider itself.",
      "Aeora Research does not position itself as a prop firm or promise funding, employment or capital access."
    ],
    sections: [
      {
        eyebrow: "01 / The terms",
        title: "Similar words, different operating models.",
        paragraphs: [
          "Proprietary trading generally describes trading undertaken with a firm's own capital rather than client assets. A professional prop desk may sit within a larger organisation and operate with defined risk, supervision, technology, compliance and review practices.",
          "An online funded-trader programme is usually a commercial product with an evaluation, rules and payment terms. It may involve simulated trading, live trading, external capital or a mixture of arrangements depending on the provider. The only reliable description is the provider's current documentation."
        ],
        table: {
          caption: "A practical distinction",
          headers: ["Question", "Professional prop desk", "Online evaluation programme"],
          rows: [
            ["Primary relationship", "Organisation, process and internal controls", "Customer agreement and published rules"],
            ["Capital arrangement", "Depends on the firm's own structure", "Depends on the provider's specific terms"],
            ["What to verify", "Role, entity, controls and eligibility", "Fees, account type, restrictions, payouts and country eligibility"]
          ]
        }
      },
      {
        eyebrow: "02 / Due diligence",
        title: "Read the terms before the marketing.",
        paragraphs: [
          "Do not judge an offer from a social-media result, a claimed profit split or a funded-account label. Confirm the legal entity, whether the account is simulated or live, the evaluation rules, daily and total loss limits, fees, payout conditions, dispute process and restrictions that apply to Malaysian residents.",
          "Availability can change with a provider's compliance, payment and onboarding policies. A search result is not an approval, and a programme marketed in one jurisdiction may not be offered under the same terms in another."
        ],
        bullets: [
          "Who is the contracting legal entity?",
          "What account is actually being used after an evaluation?",
          "Which fees, loss limits, data fees or platform rules apply?",
          "Can the provider confirm current Malaysian eligibility in writing?",
          "Where can a participant find the terms, complaints process and risk disclosures?"
        ]
      },
      {
        eyebrow: "03 / Aeora scope",
        title: "Education is not a capital promise.",
        paragraphs: [
          "Aeora Research develops material around market context, risk awareness, execution practice and review. It does not use this guide to market a funded challenge, provide brokerage or promise a role on a trading desk.",
          "That boundary matters. A sound learning environment should make risks and limits clearer, not imply that a course, assessment or enquiry converts into capital allocation or employment."
        ],
        callout: {
          title: "Useful next step",
          copy: "Compare a provider's primary documents with your own risk tolerance and financial circumstances before making any payment or committing to an evaluation."
        }
      }
    ],
    faqs: [
      {
        question: "Are all funded-trader programmes the same?",
        answer:
          "No. Rules, fees, account arrangements, permitted products, payout conditions and country availability vary. Read the actual agreement for the provider you are considering."
      },
      {
        question: "Does Aeora Research provide funded trading accounts?",
        answer:
          "No. Aeora Research does not offer funded accounts through this website."
      }
    ],
    relatedLinks: [
      AUTHORITY_PILLAR_LINK("prop-desk-malaysia"),
      AUTHORITY_RESOURCE_LINKS[1],
      AUTHORITY_RESOURCE_LINKS[6]
    ],
    sources: [SC_INVESTOR_ALERT, BURSA_FTAP, SC_LICENSING]
  },
  {
    slug: "professional-trader-roadmap-malaysia",
    title: "A Professional Trader Roadmap for Malaysia: Skills Before Scale",
    shortTitle: "Professional Trader Roadmap",
    description:
      "A six-stage learning roadmap for Malaysian traders who want to develop a more disciplined process without confusing education with a promise of a trading career.",
    excerpt:
      "A durable trading process is built in stages: foundations, market reading, risk, execution, structure and review.",
    category: "Trader Development",
    noteNumber: "G02",
    tags: [
      "professional trader roadmap Malaysia",
      "how to become a professional trader Malaysia",
      "trading development process",
      "trader skills Malaysia"
    ],
    keyPoints: [
      "A roadmap should make the next capability visible, not promise an outcome or timetable.",
      "Risk and review belong before scale, not after it.",
      "Evidence of process is more useful than a collection of uncontextualised results."
    ],
    sections: [
      {
        eyebrow: "01 / Foundation",
        title: "Learn the mechanics before interpreting the noise.",
        paragraphs: [
          "Begin with the instrument, venue, order types, margin or leverage mechanics and the practical cost of trading. A trader who cannot explain how an order is routed or where a loss can expand is not ready to make the process more complex.",
          "This foundation should also include the difference between research, education, execution and personalised advice. Those distinctions make it easier to evaluate information without assigning it authority it does not have."
        ],
        bullets: [
          "Instrument and contract mechanics",
          "Order types and execution conditions",
          "Risk, margin, leverage and liquidity basics",
          "A simple written decision template"
        ]
      },
      {
        eyebrow: "02 / Market reading",
        title: "Observe a market before trying to predict it.",
        paragraphs: [
          "Build a repeatable pre-market routine. Record the economic calendar, reference levels, market condition, liquidity expectations and scenarios that would make your view less useful.",
          "The objective is not to become certain. It is to recognise what is known, what is inferred and what requires caution when the market changes."
        ]
      },
      {
        eyebrow: "03 / Risk and psychology",
        title: "Make risk visible while it is still controllable.",
        paragraphs: [
          "Set position sizing, loss limits and invalidation rules before a trade is placed. A review should record whether those constraints were respected, not only whether the market later moved in the desired direction.",
          "Psychology is part of process design. Fatigue, urgency, loss chasing and overconfidence are easier to address when routines, limits and review prompts exist before a difficult session."
        ],
        callout: {
          title: "No implied finish line",
          copy: "Completing a learning path does not guarantee funding, employment, a professional role, profitability or readiness for a particular product."
        }
      },
      {
        eyebrow: "04 / Execution and review",
        title: "Treat every decision as a record you can improve.",
        paragraphs: [
          "The final stages connect execution, market structure and review. A professional process can explain its inputs, its limits and what it will change after evidence accumulates.",
          "The most useful next step is often smaller: improve one preparation habit, one risk rule or one review practice rather than trying to trade more instruments or more size."
        ]
      }
    ],
    faqs: [
      {
        question: "How long does it take to become a professional trader?",
        answer:
          "There is no universal timetable. Progress depends on the role, market, education, supervision, financial circumstances and evidence of capability. Be wary of fixed-time promises."
      },
      {
        question: "Is a profitable month proof of a professional process?",
        answer:
          "No. One result does not establish a repeatable process. A useful record includes context, risk, execution quality and review across changing conditions."
      }
    ],
    relatedLinks: [
      AUTHORITY_PILLAR_LINK("professional-trader-career-malaysia"),
      AUTHORITY_RESOURCE_LINKS[2],
      AUTHORITY_RESOURCE_LINKS[6]
    ],
    sources: [BURSA_FTAP, SIDC, SC_LICENSING]
  },
  {
    slug: "trading-career-malaysia",
    title: "Trading Careers in Malaysia: Roles, Skills and Questions to Ask",
    shortTitle: "Trading Careers in Malaysia",
    description:
      "A grounded guide to the different meanings of a trading career in Malaysia, from market roles and research to risk, operations and independent activity.",
    excerpt:
      "A trading career is wider than a single seat in front of a chart. Start by separating roles, responsibilities and regulation.",
    category: "Career Education",
    noteNumber: "G03",
    tags: [
      "trading career Malaysia",
      "trader job Malaysia",
      "professional trading career Malaysia",
      "capital market careers Malaysia"
    ],
    keyPoints: [
      "Trading careers include execution, research, sales, risk, operations and market-support functions.",
      "A job-board result, course page or prop-firm evaluation is not an employment offer.",
      "Regulated-role requirements must be confirmed directly with the employer and relevant authority."
    ],
    sections: [
      {
        eyebrow: "01 / Roles",
        title: "Map the work before choosing the title.",
        paragraphs: [
          "Trading-related work can include execution, sales and trading, research, market risk, operations, compliance, technology and client coverage. These roles work together but ask for different evidence, licences, technical skills and working patterns.",
          "Independent trading is another category altogether. It is not an employer relationship and carries its own financial, operational and psychological risks. Do not assume that a successful independent trader is performing the same work as an employed market professional."
        ],
        table: {
          caption: "Career categories to separate",
          headers: ["Category", "Typical focus", "What to verify"],
          rows: [
            ["Market-facing role", "Execution, sales, research or risk decisions", "Employer, role scope, supervision and eligibility"],
            ["Market-support role", "Operations, technology, compliance or controls", "Skills, systems exposure and regulated responsibilities"],
            ["Independent activity", "Personal market participation", "Personal risk, platform terms, costs and legal obligations"]
          ]
        }
      },
      {
        eyebrow: "02 / Skills",
        title: "Build skills that travel across roles.",
        paragraphs: [
          "Clear writing, numerical reasoning, market context, risk awareness, attention to detail and the ability to explain a decision are useful across the market ecosystem. A well-kept journal or research note can demonstrate care, but it does not replace a formal hiring process.",
          "Where a role touches a regulated activity, requirements can change. Treat official regulatory materials and the employer's recruitment process as the source of truth."
        ]
      },
      {
        eyebrow: "03 / Questions",
        title: "Ask for facts a real opportunity can answer.",
        paragraphs: [
          "A credible job opportunity should identify the employer, contract type, responsibilities, location, manager or team, remuneration structure and any eligibility requirements. A vague promise of a trading role, capital allocation or guaranteed income deserves extra scrutiny.",
          "Avoid sending money or sensitive documents to an unverified party. If an offer touches regulated financial activity, contact the prospective employer through an independently verified channel before taking the next step."
        ],
        bullets: [
          "Which legal entity is hiring?",
          "What is the role and who supervises it?",
          "Is this employment, contract work, a course or an evaluation?",
          "What licence, registration or experience is actually required?",
          "What fees, if any, are required before work begins?"
        ]
      }
    ],
    faqs: [
      {
        question: "Does Aeora Research recruit traders through this page?",
        answer:
          "No. This is career education, not a recruitment page or an employment offer."
      },
      {
        question: "Can a training programme guarantee a job?",
        answer:
          "No. Training may support skill development, but it cannot guarantee a job, placement, income, licence or market outcome."
      }
    ],
    relatedLinks: [
      AUTHORITY_PILLAR_LINK("professional-trader-career-malaysia"),
      AUTHORITY_RESOURCE_LINKS[1],
      { href: "/faq", label: "Aeora FAQ", description: "Clear boundaries around research, education and trader development." }
    ],
    sources: [SC_LICENSING, SIDC, BURSA_FTAP]
  },
  {
    slug: "market-making-explained",
    title: "Market Making Explained: Quotes, Liquidity and Inventory Risk",
    shortTitle: "Market Making Explained",
    description:
      "A concise guide to market making, two-way quotes, liquidity provision and the inventory risk that distinguishes this role from a directional trade.",
    excerpt:
      "Market making is about making two-sided prices under defined responsibilities, not predicting every next move.",
    category: "Market Structure",
    noteNumber: "G04",
    tags: ["market making explained", "market maker Malaysia", "two way quotes", "liquidity provision"],
    keyPoints: [
      "Market makers commonly quote both a bid and an offer to help support liquidity.",
      "The role carries inventory, adverse-selection and operational risks.",
      "Malaysia's principal-dealer framework is one official example of formal two-way quoting responsibilities."
    ],
    sections: [
      {
        eyebrow: "01 / Function",
        title: "A market maker helps make a market tradable.",
        paragraphs: [
          "A market maker generally stands ready to quote a bid and an offer in a product or market. That can support liquidity by giving other participants a visible two-sided price, but the exact obligations depend on the venue, product and regulatory framework.",
          "The aim is not to be right about every price movement. A market maker must manage the risk created when it buys from one participant and sells to another while market conditions, information and available liquidity change."
        ],
        table: {
          caption: "Three ideas that should not be collapsed",
          headers: ["Term", "Plain-language meaning", "Why it matters"],
          rows: [
            ["Bid", "The price a participant is prepared to buy at", "Shows one side of available interest"],
            ["Offer", "The price a participant is prepared to sell at", "Shows the other side of available interest"],
            ["Spread", "The difference between bid and offer", "Can change with risk, time and available liquidity"]
          ]
        }
      },
      {
        eyebrow: "02 / Risk",
        title: "Two-sided quoting does not remove uncertainty.",
        paragraphs: [
          "If a market maker receives more buying or selling interest, it can accumulate inventory. A sudden move, changing volatility or loss of liquidity can make it difficult to reduce that exposure at an expected price.",
          "For that reason, genuine market-making activity is connected to systems, limits, supervision and product-specific responsibilities. It should not be treated as a simple retail strategy or a generic platform feature."
        ]
      },
      {
        eyebrow: "03 / Malaysia",
        title: "Use the local example precisely.",
        paragraphs: [
          "Bank Negara Malaysia describes principal dealers and Islamic principal dealers as having obligations to provide two-way price quotations for benchmark securities under all market conditions to support secondary-market liquidity. That is a formal role in a defined market framework.",
          "It does not mean every institution, trader or online platform is a market maker. Always distinguish an official market role from marketing language."
        ]
      }
    ],
    faqs: [
      {
        question: "Is a market maker the same as a broker?",
        answer:
          "Not necessarily. Roles, obligations and business models differ by market and provider. A broker can route or facilitate orders, while market making concerns quoting and managing liquidity in defined circumstances."
      },
      {
        question: "Can an individual become a market maker by using a charting tool?",
        answer:
          "No. A charting tool does not create the legal, technological, capital or market-role conditions associated with formal market making."
      }
    ],
    relatedLinks: [
      AUTHORITY_PILLAR_LINK("institutional-trading-malaysia"),
      AUTHORITY_RESOURCE_LINKS[4],
      AUTHORITY_RESOURCE_LINKS[7]
    ],
    sources: [BNM_PRINCIPAL_DEALERS, BNM_FX_MARKET, BNM_ETP]
  },
  {
    slug: "direct-market-access-explained",
    title: "Direct Market Access Explained: Routing, Controls and Execution",
    shortTitle: "Direct Market Access",
    description:
      "What direct market access means, how it relates to order routing and why speed does not remove the need for pre-trade controls.",
    excerpt:
      "DMA can change the route to a venue. It does not remove the controls, responsibilities or risks around an order.",
    category: "Market Structure",
    noteNumber: "G05",
    tags: ["direct market access explained", "DMA trading Malaysia", "order routing", "execution controls"],
    keyPoints: [
      "DMA refers to an access or routing arrangement, not a promise of superior performance.",
      "Venue access remains subject to provider, jurisdiction, client-category and risk-control requirements.",
      "Execution quality depends on liquidity, order type, timing, size and market condition."
    ],
    sections: [
      {
        eyebrow: "01 / Definition",
        title: "DMA describes a route, not a result.",
        paragraphs: [
          "Direct market access commonly refers to an arrangement that lets orders be routed more directly to an exchange, alternative venue or electronic market. The exact path, tools and permissions vary by broker, asset class and jurisdiction.",
          "A more direct route does not guarantee a fill, a particular price, lower risk or better performance. The market still decides what liquidity is available when the order arrives."
        ]
      },
      {
        eyebrow: "02 / Controls",
        title: "Access needs risk controls before an order reaches a market.",
        paragraphs: [
          "Professional market-access arrangements are normally surrounded by controls such as credit limits, position limits, order-size checks, price collars and supervision. Those controls protect the provider, the client and the wider market from avoidable errors.",
          "The presence of controls should not be read as a guarantee of safety. It is a recognition that rapid execution can magnify a mistake if the process is weak."
        ],
        bullets: [
          "Pre-trade risk checks",
          "Credit and capital limits",
          "Order-size and price validation",
          "Venue, product and client eligibility",
          "Monitoring and post-trade review"
        ]
      },
      {
        eyebrow: "03 / Practical reading",
        title: "Ask what the service actually does.",
        paragraphs: [
          "If a provider advertises DMA, ask which market, which product, which venue, what account type and what protections are involved. A generic platform label cannot answer those questions.",
          "In Malaysia, Bank Negara Malaysia's approved electronic trading-platform information covers specific wholesale money-market and foreign-exchange platform arrangements. It should not be used to imply retail product availability or an Aeora service."
        ]
      }
    ],
    faqs: [
      {
        question: "Does direct market access eliminate slippage?",
        answer:
          "No. Slippage depends on market conditions, liquidity, size, order type, speed and the available counterparties or venue."
      },
      {
        question: "Does Aeora Research provide DMA?",
        answer:
          "No. Aeora Research does not provide brokerage, execution or direct market access through this website."
      }
    ],
    relatedLinks: [
      AUTHORITY_PILLAR_LINK("institutional-trading-malaysia"),
      AUTHORITY_RESOURCE_LINKS[3],
      AUTHORITY_RESOURCE_LINKS[6]
    ],
    sources: [FINRA_MARKET_ACCESS, FINRA_STOCKS, BNM_ETP]
  },
  {
    slug: "retail-vs-institutional-trading",
    title: "Retail vs Institutional Trading: Different Constraints, Not Different Physics",
    shortTitle: "Retail vs Institutional Trading",
    description:
      "A practical comparison of retail and institutional trading that focuses on objectives, access, controls and constraints rather than myths about secret information.",
    excerpt:
      "The distinction is not about who has a better chart. It is about objectives, responsibilities, size, controls and infrastructure.",
    category: "Market Structure",
    noteNumber: "G06",
    tags: ["retail vs institutional trading", "institutional trading Malaysia", "retail trader education", "market structure"],
    keyPoints: [
      "Retail and institutional participants can use similar data while operating under very different responsibilities.",
      "Institutional scale often creates execution and governance constraints that retail traders do not face.",
      "Neither category is a guarantee of a better decision or market outcome."
    ],
    sections: [
      {
        eyebrow: "01 / Comparison",
        title: "The distinction begins with responsibility.",
        paragraphs: [
          "A retail participant normally acts for their own account within the tools and terms provided by an intermediary. An institutional participant may be responsible for client assets, a firm's balance sheet, liquidity provision, a portfolio mandate or a regulated operating process.",
          "Those responsibilities change what must be documented, who can approve a trade, how risk is monitored and what happens after the transaction."
        ],
        table: {
          caption: "A useful comparison, not a hierarchy",
          headers: ["Dimension", "Retail participant", "Institutional participant"],
          rows: [
            ["Primary objective", "Personal strategy or account objective", "Mandate, client, firm or market-role objective"],
            ["Scale", "Usually smaller and more flexible", "May face market impact, liquidity and governance constraints"],
            ["Controls", "Provider and personal risk controls", "Formal limits, supervision, compliance and operating procedures"],
            ["Information", "Public, provider and self-directed research", "May combine market data, research and internal systems subject to policy"]
          ]
        }
      },
      {
        eyebrow: "02 / Common myths",
        title: "Institutional does not mean effortless.",
        paragraphs: [
          "Larger size can create a harder execution problem: a participant may need to transact without revealing too much intent or moving the price unfavourably. More access also means more obligations, controls and points of failure.",
          "Retail participants may have flexibility and smaller market impact, but that does not remove leverage, liquidity, cost or decision-quality risks."
        ],
        callout: {
          title: "Better question",
          copy: "Instead of asking how to trade like an institution, ask which market-structure and risk practices are genuinely applicable to your own account, product and level of responsibility."
        }
      },
      {
        eyebrow: "03 / Learning",
        title: "Borrow disciplines, not borrowed claims.",
        paragraphs: [
          "Retail traders can learn from institutional disciplines such as planning, sizing, execution review and market-context work. They should not claim institutional access, regulated status or a professional role they do not have.",
          "The goal of education is better judgement about the tools and constraints in front of you, not a more impressive label."
        ]
      }
    ],
    faqs: [
      {
        question: "Do institutional traders always have better information?",
        answer:
          "Not automatically. Participants may have different data, systems and mandates, but all trading decisions remain subject to uncertainty, risk and changing market conditions."
      },
      {
        question: "Can retail traders use institutional concepts?",
        answer:
          "Yes, when the concepts are applied honestly to the products, access and risk limits actually available to the individual."
      }
    ],
    relatedLinks: [
      AUTHORITY_PILLAR_LINK("institutional-trading-malaysia"),
      AUTHORITY_RESOURCE_LINKS[3],
      AUTHORITY_RESOURCE_LINKS[4]
    ],
    sources: [BNM_FX_MARKET, BNM_PRINCIPAL_DEALERS, FINRA_STOCKS]
  },
  {
    slug: "trading-desk-risk-management",
    title: "Trading Desk Risk Management: Limits, Review and Decision Quality",
    shortTitle: "Trading Desk Risk Management",
    description:
      "A practical guide to trading-desk risk management, including limits, sizing, execution review and the difference between a risk control and a prediction.",
    excerpt:
      "Risk management is the framework that keeps a market decision reviewable when the market disagrees.",
    category: "Risk Management",
    noteNumber: "G07",
    tags: ["trading desk risk management", "trading risk controls", "position sizing", "trading process"],
    keyPoints: [
      "Risk limits set the boundary for uncertainty; they do not forecast the market.",
      "Position size, liquidity and event risk should be considered together.",
      "A review process distinguishes a valid loss from a preventable process failure."
    ],
    sections: [
      {
        eyebrow: "01 / Purpose",
        title: "Risk management gives a decision a boundary.",
        paragraphs: [
          "Every market decision has uncertainty. Risk management makes that uncertainty explicit through size, limits, stop conditions, exposure awareness and escalation rules. It is not a set of slogans applied after a difficult trade.",
          "A good control does not say the market cannot move against you. It says what happens if it does, who is responsible and how the next decision will be reviewed."
        ]
      },
      {
        eyebrow: "02 / Controls",
        title: "Use multiple controls rather than one fragile rule.",
        paragraphs: [
          "Position sizing, loss limits, concentration limits, event-risk constraints and execution checks address different problems. A fixed stop can help limit a single trade, but it may not address liquidity gaps, correlated exposure or repeated decision errors.",
          "Controls must fit the product, time horizon, account, venue and participant. A generic rule copied from another market can create a false sense of security."
        ],
        table: {
          caption: "Control categories",
          headers: ["Control", "What it addresses", "Question to review"],
          rows: [
            ["Position size", "Exposure relative to risk capacity", "Was size consistent with volatility and liquidity?"],
            ["Loss limit", "Defined downside for a trade, day or period", "Was the limit respected without moving the goalposts?"],
            ["Concentration", "Too much exposure to one theme or factor", "Did apparently separate positions depend on the same outcome?"],
            ["Execution check", "Order and venue mechanics", "Did the order type fit the actual market condition?"]
          ]
        }
      },
      {
        eyebrow: "03 / Review",
        title: "A loss can be informative; an unexamined process cannot.",
        paragraphs: [
          "A trade can lose even when the initial process was sound, and a trade can make money despite a poor process. Separating those two ideas is central to serious review.",
          "Keep the original thesis, size, risk limit, execution notes and post-trade assessment together. Over time, that record helps identify whether errors come from analysis, timing, sizing, implementation or rule discipline."
        ],
        callout: {
          title: "Important boundary",
          copy: "No risk framework guarantees a trading result. It is a way to manage uncertainty and improve decisions, not a promise of performance."
        }
      }
    ],
    faqs: [
      {
        question: "Is a stop-loss order enough for risk management?",
        answer:
          "No. A stop can be one control, but a complete process also considers position size, liquidity, exposure, event risk, order handling and review."
      },
      {
        question: "Can risk management prevent all losses?",
        answer:
          "No. Risk management cannot eliminate market uncertainty. It helps define and manage exposure in advance."
      }
    ],
    relatedLinks: [
      AUTHORITY_PILLAR_LINK("prop-desk-malaysia"),
      AUTHORITY_RESOURCE_LINKS[1],
      AUTHORITY_RESOURCE_LINKS[4]
    ],
    sources: [FINRA_MARKET_ACCESS, SC_LICENSING, BNM_PRINCIPAL_DEALERS]
  },
  {
    slug: "order-flow-and-volume-profile",
    title: "Order Flow and Volume Profile: Context, Not a Trading Signal",
    shortTitle: "Order Flow and Volume Profile",
    description:
      "A clear guide to order flow and volume profile, including what market-activity tools can show, what they cannot prove and how to use them with risk awareness.",
    excerpt:
      "Order flow and volume profile can describe market activity. They cannot turn an uncertain market into a guaranteed trade.",
    category: "Market Structure",
    noteNumber: "G08",
    tags: ["order flow explained", "volume profile explained", "order flow Malaysia", "market structure education"],
    keyPoints: [
      "Order flow concerns the activity and interaction of orders; the available view depends on the venue and data source.",
      "Volume profile organises traded volume by price, but it is not a forecast or proof of future support and resistance.",
      "Use market-activity tools with context, liquidity awareness and predefined risk."
    ],
    sections: [
      {
        eyebrow: "01 / Order flow",
        title: "Order flow is activity, not a secret message.",
        paragraphs: [
          "Order flow refers broadly to buying and selling activity reaching a market. Depending on the venue and data feed, a participant may observe quotes, trades, depth, volume, aggressor classifications or only a limited representation of activity.",
          "No single display shows the entire market across every product. Over-the-counter markets, fragmented venues, hidden liquidity and different data conventions all affect what a tool can reveal."
        ],
        table: {
          caption: "What a tool may show versus what it cannot settle",
          headers: ["Tool or view", "Can help describe", "Cannot guarantee"],
          rows: [
            ["Order book", "Displayed depth and quoted interest at a venue", "How much liquidity will remain when an order arrives"],
            ["Trade volume", "Reported activity over a period", "The next directional move"],
            ["Volume profile", "How activity was distributed across prices", "A future support, resistance or entry outcome"]
          ]
        }
      },
      {
        eyebrow: "02 / Volume profile",
        title: "Use distribution to ask better questions.",
        paragraphs: [
          "A volume profile groups traded volume by price over a selected period. It can help a trader see where activity accumulated, where the market moved quickly and where a chosen session developed a distribution.",
          "The choice of session, instrument, venue and data source changes the profile. A useful reading therefore includes the underlying market context and a clear reason for selecting the period."
        ]
      },
      {
        eyebrow: "03 / Discipline",
        title: "Context and risk still come first.",
        paragraphs: [
          "A visual cluster, imbalance or high-volume area should be treated as an observation to test, not an instruction to trade. The same pattern can behave differently around scheduled data, low liquidity, a change in volatility or a shift in the broader market narrative.",
          "Before acting, define what would invalidate the interpretation, how much risk is appropriate and what market condition would make the data less reliable."
        ],
        callout: {
          title: "Avoid certainty language",
          copy: "No order-flow, footprint or volume-profile reading guarantees direction, timing, execution quality or a trading outcome."
        }
      }
    ],
    faqs: [
      {
        question: "Does volume profile predict where price must go next?",
        answer:
          "No. It describes historical activity over a chosen sample. It can inform questions about context, but it does not determine a future market outcome."
      },
      {
        question: "Do all markets provide the same order-flow data?",
        answer:
          "No. Data availability and meaning vary by market structure, venue, product, broker and feed. Understand what the specific data source does and does not represent."
      }
    ],
    relatedLinks: [
      AUTHORITY_PILLAR_LINK("institutional-trading-malaysia"),
      AUTHORITY_RESOURCE_LINKS[3],
      AUTHORITY_RESOURCE_LINKS[6]
    ],
    sources: [CME_FX_PROFILE, FINRA_STOCKS, BNM_FX_MARKET]
  }
] as const;

export function getAuthorityPillar(slug: string) {
  return AUTHORITY_PILLARS.find((pillar) => pillar.slug === slug);
}

export function requireAuthorityPillar(slug: string): AuthorityPillar {
  const pillar = getAuthorityPillar(slug);

  if (!pillar) {
    throw new Error(`Unknown authority pillar: ${slug}`);
  }

  return pillar;
}

export function getAuthorityResource(slug: string) {
  return AUTHORITY_RESOURCES.find((resource) => resource.slug === slug);
}

function AUTHORITY_PILLAR_LINK(slug: string): AuthorityLink {
  const pillar = AUTHORITY_PILLARS.find((item) => item.slug === slug);

  if (!pillar) {
    throw new Error(`Unknown authority pillar: ${slug}`);
  }

  return {
    href: `/${pillar.slug}`,
    label: pillar.title,
    description: pillar.description
  };
}
