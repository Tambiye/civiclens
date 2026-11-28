import type { CategoryKey } from "@/lib/research/types";
import type { OfficeType } from "@/lib/candidates/types";

/**
 * Comparison category framework. Each category adapts its guiding questions
 * and relevance to the office being compared.
 */

export type Relevance = "core" | "adapted" | "limited";

export interface CategoryDefinition {
  key: CategoryKey;
  title: string;
  short: string;
  /** react-icons/fi icon name, resolved in the UI layer. */
  icon: string;
  overview: string;
  /** What an evaluation of this category looks at, per office. */
  focus: Record<OfficeType, string>;
  relevance: Record<OfficeType, Relevance>;
  /** Shown when relevance is "adapted" or "limited". */
  relevanceNote?: Partial<Record<OfficeType, string>>;
  /** Included in the user-weighting panel. */
  weightable: boolean;
}

const all = (r: Relevance): Record<OfficeType, Relevance> => ({
  president: r,
  governor: r,
  senator: r,
});

export const CATEGORIES: CategoryDefinition[] = [
  {
    key: "economy",
    title: "Economy and Cost of Living",
    short: "Economy",
    icon: "FiTrendingUp",
    overview:
      "Inflation, food prices, purchasing power, growth, currency, poverty, business conditions and household impact.",
    focus: {
      president:
        "National macroeconomic decisions (fiscal, trade, exchange-rate, subsidy and tax policy) and measurable outcomes, alongside proposed economic plans and their financing.",
      governor:
        "State economic policy: internally generated revenue, investment climate, agriculture and commerce, and cost-of-living interventions within state powers.",
      senator:
        "Legislative positions and votes on economic bills, appropriation oversight and advocacy for the district's economic interests.",
    },
    relevance: { president: "core", governor: "core", senator: "adapted" },
    relevanceNote: {
      senator:
        "Senators do not run economic policy; this category looks at legislation, oversight and advocacy.",
    },
    weightable: true,
  },
  {
    key: "security",
    title: "Security",
    short: "Security",
    icon: "FiShield",
    overview:
      "Terrorism, kidnapping, armed conflict, crime, prevention, intelligence, institutional reform and human rights.",
    focus: {
      president:
        "Command of the armed forces and federal police, security funding, institutional reforms and human-rights conduct. Outcomes are shared with states, communities and security agencies.",
      governor:
        "State security architecture, coordination with federal agencies, community policing and conflict response. Governors do not command the police or military.",
      senator:
        "Security legislation, oversight of security agencies and representation of constituency security concerns.",
    },
    relevance: { president: "core", governor: "core", senator: "adapted" },
    relevanceNote: {
      governor:
        "Nigeria's police and military are federal; governors influence security mainly through coordination and funding.",
      senator: "Assessed through legislation, oversight and advocacy.",
    },
    weightable: true,
  },
  {
    key: "education",
    title: "Education",
    short: "Education",
    icon: "FiBookOpen",
    overview:
      "Access, school infrastructure, funding, teacher quality, literacy, enrolment, learning outcomes and higher education.",
    focus: {
      president:
        "Federal education funding, universities, student loans, basic-education transfers (UBEC) and national policy.",
      governor:
        "Primary and secondary schools, teacher recruitment, state universities and counterpart funding.",
      senator: "Education legislation, oversight and constituency projects.",
    },
    relevance: { president: "core", governor: "core", senator: "adapted" },
    weightable: true,
  },
  {
    key: "healthcare",
    title: "Healthcare",
    short: "Health",
    icon: "FiHeart",
    overview:
      "Funding, hospitals, insurance, primary care, personnel, maternal and child health, and preparedness.",
    focus: {
      president:
        "Federal health budget, tertiary hospitals, national health insurance and public-health preparedness.",
      governor:
        "Primary healthcare centres, state hospitals, health workforce and state insurance schemes.",
      senator: "Health legislation, oversight and constituency health advocacy.",
    },
    relevance: { president: "core", governor: "core", senator: "adapted" },
    weightable: true,
  },
  {
    key: "infrastructure",
    title: "Infrastructure and Development",
    short: "Infrastructure",
    icon: "FiTool",
    overview:
      "Roads, bridges, housing, water, transport and rail: cost, completion, maintenance and transparency. Announced is not completed.",
    focus: {
      president:
        "Federal roads, rail, ports and housing, including project origin, financing and real completion status.",
      governor:
        "State roads, water, urban development and housing, separating inherited projects from new ones.",
      senator:
        "Constituency projects, appropriation advocacy and oversight of federal infrastructure spending.",
    },
    relevance: { president: "core", governor: "core", senator: "adapted" },
    weightable: true,
  },
  {
    key: "power",
    title: "Power and Energy",
    short: "Power",
    icon: "FiZap",
    overview:
      "Electricity access, generation, transmission, distribution, reliability, affordability and reform.",
    focus: {
      president:
        "Power-sector reform, tariffs, grid investment, gas supply and the Electricity Act framework.",
      governor:
        "State electricity markets (post-2023 Electricity Act), rural electrification and off-grid projects.",
      senator: "Energy legislation and oversight.",
    },
    relevance: { president: "core", governor: "adapted", senator: "adapted" },
    weightable: true,
  },
  {
    key: "jobs",
    title: "Jobs and Opportunity",
    short: "Jobs",
    icon: "FiBriefcase",
    overview:
      "Employment, youth jobs, job quality, entrepreneurship, small businesses, investment and skills.",
    focus: {
      president:
        "National employment outcomes, investment policy, MSME support and job-creation mechanisms.",
      governor:
        "State employment programmes, MSME support, agriculture and investment attraction.",
      senator: "Legislation and advocacy affecting jobs and enterprise.",
    },
    relevance: { president: "core", governor: "core", senator: "adapted" },
    weightable: true,
  },
  {
    key: "finance",
    title: "Financial Management",
    short: "Finance",
    icon: "FiPieChart",
    overview:
      "Revenue, spending, debt, borrowing, debt service, budget execution, procurement and transparency.",
    focus: {
      president:
        "Federal budgets, borrowing, debt service, revenue reform and audit findings.",
      governor:
        "State budgets, IGR, debt, budget performance and procurement transparency.",
      senator:
        "Appropriation oversight, public-accounts work and personal/office financial transparency.",
    },
    relevance: { president: "core", governor: "core", senator: "adapted" },
    weightable: true,
  },
  {
    key: "leadership",
    title: "Leadership and Governing Capacity",
    short: "Leadership",
    icon: "FiCompass",
    overview:
      "Decision-making, crisis management, appointments, coalition building and ability to implement.",
    focus: {
      president:
        "Cabinet quality, crisis response, coalition management and policy implementation.",
      governor:
        "Administrative competence, appointments and execution at state level.",
      senator:
        "Committee leadership, coalition building in the chamber and effectiveness.",
    },
    relevance: all("core"),
    weightable: true,
  },
  {
    key: "integrity",
    title: "Integrity and Accountability",
    short: "Integrity",
    icon: "FiCheckSquare",
    overview:
      "Disclosures, conflicts of interest, investigations, court records and audit findings. Allegations are not findings.",
    focus: {
      president: "Same standard for every candidate.",
      governor: "Same standard for every candidate.",
      senator: "Same standard for every candidate.",
    },
    relevance: all("core"),
    weightable: true,
  },
  {
    key: "experience",
    title: "Experience and Track Record",
    short: "Experience",
    icon: "FiAward",
    overview:
      "Previous offices, professional background, budgets managed and execution history, judged by relevance rather than years.",
    focus: {
      president: "Relevance of prior executive, legislative and private-sector roles to national office.",
      governor: "Relevance of prior roles to running a state government.",
      senator: "Relevance of prior roles to lawmaking, oversight and representation.",
    },
    relevance: all("core"),
    weightable: true,
  },
  {
    key: "vision",
    title: "Vision, Policy and Future Plans",
    short: "Vision",
    icon: "FiTarget",
    overview:
      "Priorities, proposed reforms, implementation strategy, funding, timelines, risks and feasibility.",
    focus: {
      president: "National manifesto and its feasibility.",
      governor: "State-level agenda and its feasibility.",
      senator: "Legislative agenda and representation priorities.",
    },
    relevance: all("core"),
    weightable: true,
  },
  {
    key: "foreign",
    title: "Foreign Relations and Diplomacy",
    short: "Foreign",
    icon: "FiGlobe",
    overview:
      "Diplomacy, international agreements, trade, regional leadership and foreign investment.",
    focus: {
      president: "Foreign policy, ECOWAS/AU leadership, trade and international partnerships.",
      governor: "Foreign direct investment and development-partner relationships at state level.",
      senator: "Foreign-affairs committee work and treaty ratification.",
    },
    relevance: { president: "core", governor: "limited", senator: "limited" },
    relevanceNote: {
      governor:
        "Foreign policy is a federal power. For governors this covers only investment and development-partner relationships.",
      senator:
        "Foreign policy is executive-led. For senators this covers committee work and treaty oversight.",
    },
    weightable: true,
  },
  {
    key: "humanImpact",
    title: "Human Impact",
    short: "Human impact",
    icon: "FiUsers",
    overview:
      "How decisions affect household income, affordability, access to services and vulnerable groups.",
    focus: {
      president: "Documented effects of national policies on households and vulnerable groups.",
      governor: "Documented effects of state policies on residents.",
      senator: "Documented constituency-level effects of legislative and advocacy work.",
    },
    relevance: all("core"),
    weightable: true,
  },
  {
    key: "promises",
    title: "Promises and Delivery",
    short: "Promises",
    icon: "FiClipboard",
    overview:
      "For incumbents, promises tracked against delivery. For aspirants, promises with their targets, mechanisms, costs and risks.",
    focus: {
      president: "Promise tracking (incumbents) or promise specificity (aspirants).",
      governor: "Promise tracking (incumbents) or promise specificity (aspirants).",
      senator: "Legislative commitments and their follow-through.",
    },
    relevance: all("core"),
    weightable: true,
  },
];

export const CATEGORY_BY_KEY: Record<CategoryKey, CategoryDefinition> =
  Object.fromEntries(CATEGORIES.map((c) => [c.key, c])) as Record<
    CategoryKey,
    CategoryDefinition
  >;
