export type DropStage = 'prototype' | 'labs' | 'graduated'

export type DropLinkKey = 'live' | 'code' | 'writeup'

export interface Drop {
  slug: string
  number?: string
  title: string
  launched: string
  stage: DropStage
  summary: string
  note: string
  detail: string[]
  tags: string[]
  links: Partial<Record<DropLinkKey, string>>
}

export const siteMeta = {
  brand: 'VibesAgent',
  program: 'VibesAgent Labs',
  email: 'ian@vibesagent.com',
  links: {
    github: 'https://github.com/vibesagent',
    x: 'https://x.com/vibesagent',
    substack: 'https://vibesagent.substack.com',
  },
}

export const drops: Drop[] = [
  {
    slug: 'canadian-housing-difference',
    title: 'The Past Decade in Canadian Housing',
    launched: 'March 2026',
    stage: 'prototype',
    summary: 'A lens on regional differences in Canadian housing pressure and policy shape.',
    note: 'This experiment compares affordability dynamics across Canadian markets and captures the edge cases that matter.',
    detail: [
      'The project maps core housing signals to highlight where supply, rates, and regulation diverge the most.',
      'Each card and list row is tuned to surface what is changing, not just what is expensive.',
      'This is a prototype for a more practical housing-intelligence narrative: readable, fast, and useful.',
    ],
    tags: ['housing', 'markets', 'prototype'],
    links: {},
  },
  {
    slug: 'swarmfeed',
    title: 'Swarmfeed',
    launched: 'March 2026',
    stage: 'prototype',
    summary: 'A warm, continuous feed for coordinating multiple agents in one running stream.',
    note: '',
    detail: [],
    tags: ['agent interface'],
    links: {},
  },
]

export const stageLabels: Record<DropStage, string> = {
  prototype: 'Prototype',
  labs: 'Labs',
  graduated: 'Graduated',
}
