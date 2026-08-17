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
    client: "29029",
    title: "A brand built once, then stewarded",
    year: "2017, and 2025 to present",
    role: "Creative Director",
    summary:
      "I designed the 29029 identity in 2017. Eight years later I came back as their creative director, to sharpen what was there and build the brands that came next.",
    services: [
      "Brand identity",
      "Founder brand strategy",
      "Brand codification",
      "Digital product design",
      "Creative direction",
    ],
    sections: [
      {
        heading: "The first chapter",
        paragraphs: [
          "In 2017 I was the designer on 29029 at Brand Apart. We ran the full brand exercise, developed a range of territories, and presented them to Marc and his team.",
          "The mark they chose is the mark they still use. The core system built around it is the one running today.",
        ],
      },
      {
        heading: "Coming back",
        paragraphs: [
          "In 2025 the relationship started again, this time independently. I came in as creative director and primary creative lead, which in practice means two jobs at once.",
          "The first is stewardship, keeping the existing brand sharp as it stretches across more surfaces than it was designed for. The second is expansion, building new brands for new lines of business.",
        ],
      },
      {
        heading: "The founder brand",
        paragraphs: [
          "Marc Hodulich is not separate from 29029, so his brand needed the same rigor as the company's. I positioned him as the Cartographer of Limits, a founder who builds environments that change people rather than events that entertain them.",
          "The work included a transformation framework called the Peak Loop, ten brand pillars, the strategic thinking underneath it, and the full asset system and site that carry it.",
        ],
      },
      {
        heading: "29029 Triple",
        paragraphs: [
          "A mini ultra Marc and a small group are taking on. I built the brand for it, sized to sit inside the 29029 world without competing with it.",
        ],
      },
      {
        heading: "The participant dashboard",
        paragraphs: [
          "A digital home for participants to log their climbs, track elevation, record the events they have finished, and earn points against a shared system. Designed as a product, not a page.",
        ],
      },
      {
        heading: "Codifying the brand",
        paragraphs: [
          "The hardest problem was not visual. Marc carried the standard in his head, which meant the brand held when he was in the room and drifted when he was not.",
          "I worked through structured interviews, artifact review, and decision autopsies to turn his instinct into traceable rules. Not a guidelines document. A decision engine the team can actually use.",
        ],
      },
      {
        heading: "Where it stands",
        paragraphs: [
          "The current phase is an audit of every existing asset, and a refinement of the brand standards that govern them.",
        ],
      },
    ],
    credit: "Identity created in 2017 as a designer at Brand Apart. Creative direction from 2025 onward through Oleeha & Co.",
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
