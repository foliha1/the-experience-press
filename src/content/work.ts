export type WorkSection = {
  heading: string;
  paragraphs: string[];
};

export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  year: string;
  role: string;
  services: string[];
  summary: string;
  sections: WorkSection[];
  credit: string;
};

export const work: CaseStudy[] = [
  {
    slug: "trilith",
    client: "Trilith",
    title: "A town built around making things",
    year: "DRAFT: 2023",
    role: "DRAFT: Experience design lead",
    services: [
      "Experience identity",
      "Environmental graphics",
      "Wayfinding",
      "Print and editorial",
    ],
    summary:
      "DRAFT: A community built around film production needed a visual world as considered as the place itself — one voice from the street signs to the printed programme.",
    sections: [
      {
        heading: "The brief",
        paragraphs: [
          "DRAFT: Trilith came with a place already full of character and a set of surfaces that did not yet agree with each other. The work began with listening: what the town wanted visitors to feel in the first ninety seconds.",
          "DRAFT: The specific scope, stakeholders, and timeline for this engagement still need confirming before this section is published.",
        ],
      },
      {
        heading: "The approach",
        paragraphs: [
          "DRAFT: We set a single thematic treatment and let it flex — the same typographic register on a banner, a badge, and a screen, so nothing felt borrowed from somewhere else.",
          "DRAFT: Details of the system as delivered — components, standards, handover materials — to be confirmed.",
        ],
      },
      {
        heading: "The result",
        paragraphs: [
          "DRAFT: No metrics are claimed here yet. Outcome language will be written only once it can be verified with the client.",
        ],
      },
    ],
    credit: "DRAFT: Design and direction, Oleeha & Co. Client approval pending.",
  },
  {
    slug: "29029",
    client: "29029 Everesting",
    title: "An endurance event that had to feel like a summit",
    year: "DRAFT: 2022",
    role: "DRAFT: Design direction",
    services: [
      "Experience identity",
      "Signage and on-mountain graphics",
      "Screen and stage surfaces",
      "Participant artefacts",
    ],
    summary:
      "DRAFT: A multi-day endurance event where the design had to carry people through the hardest hours — legible in the dark, warm at the finish.",
    sections: [
      {
        heading: "The brief",
        paragraphs: [
          "DRAFT: The event lives outdoors, at altitude, across a full day and night. Every surface had to work while tired, in the cold, at a glance.",
          "DRAFT: Engagement scope and dates to be confirmed.",
        ],
      },
      {
        heading: "The approach",
        paragraphs: [
          "DRAFT: One system, tuned for conditions: heavy contrast where it mattered, restraint everywhere else, and a set of repeating marks that told you how far you had come.",
          "DRAFT: Component list and production partners to be confirmed.",
        ],
      },
      {
        heading: "The result",
        paragraphs: [
          "DRAFT: Results, participant feedback, and any figures are unverified and intentionally omitted.",
        ],
      },
    ],
    credit: "DRAFT: Design and direction, Oleeha & Co. Credit line to be confirmed.",
  },
  {
    slug: "coca-cola",
    client: "Coca-Cola",
    title: "A brand world held steady across many rooms",
    year: "DRAFT: 2021",
    role: "DRAFT: Contributing designer",
    services: [
      "Experience graphics",
      "Content-surface standards",
      "Programming and zoning cues",
      "Templates and handover",
    ],
    summary:
      "DRAFT: Work inside an established global brand system, extended to live surfaces without loosening a single standard.",
    sections: [
      {
        heading: "The brief",
        paragraphs: [
          "DRAFT: The brand was already whole. The task was extension — taking a set of rules written for print and screen and making them behave in a room.",
          "DRAFT: Exact remit, agency of record, and team structure to be confirmed.",
        ],
      },
      {
        heading: "The approach",
        paragraphs: [
          "DRAFT: We worked in the gaps: zoning cues, mainstage standards, and templates a large team could use without drifting.",
          "DRAFT: Deliverable list to be confirmed with the client before publication.",
        ],
      },
      {
        heading: "The result",
        paragraphs: [
          "DRAFT: No performance claims are made. This section awaits client sign-off.",
        ],
      },
    ],
    credit: "DRAFT: Contributed as part of a wider team. Attribution to be confirmed.",
  },
];

export function getCaseStudy(slug: string) {
  return work.find((entry) => entry.slug === slug);
}

export function getNeighbours(slug: string) {
  const index = work.findIndex((entry) => entry.slug === slug);
  if (index === -1) return { previous: undefined, next: undefined };
  return {
    previous: index > 0 ? work[index - 1] : work[work.length - 1],
    next: index < work.length - 1 ? work[index + 1] : work[0],
  };
}
