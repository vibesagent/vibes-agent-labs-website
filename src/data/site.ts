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
    substack: '',
  },
}

export const drops: Drop[] = [
  {
    slug: 'swarmfeed',
    title: 'Swarmfeed',
    launched: 'March 2026',
    stage: 'prototype',
    summary: '',
    note:
      'The current Labs version is focused on interface and orchestration feel rather than the backend runtime.',
    detail: [
      'Swarmfeed treats agent orchestration like a timeline instead of a pile of terminals. The point is visibility, steering, and a calmer way to direct parallel work.',
      'This first public pass is intentionally narrow. It is a UX thesis before it becomes a platform thesis.',
      'If the interaction model proves itself, it can graduate out of Labs and become a standalone product with its own identity.',
    ],
    tags: ['agent interface', 'orchestration', 'prototype'],
    links: {},
  },
]

export const stageLabels: Record<DropStage, string> = {
  prototype: 'Prototype',
  labs: 'Labs',
  graduated: 'Graduated',
}
