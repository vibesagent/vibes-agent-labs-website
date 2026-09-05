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

export interface UseCase {
  slug: string
  title: string
  summary: string
  href: string
}

export const siteMeta = {
  brand: 'VibesAgent',
  program: 'VibesAgent Labs',
  email: 'ian@vibesagent.com',
  links: {
    github: 'https://github.com/vibesagent',
  },
}

export const drops: Drop[] = [
]

export const useCases: UseCase[] = [
  {
    slug: 'crm-system',
    title: 'CRM System',
    summary: 'Customer relationship workflow running in a dedicated Cloudflare Worker.',
    href: 'https://crm.vibesagent.com',
  },
  {
    slug: 'ticket-system',
    title: 'Ticket System',
    summary: 'Support ticket workflow running in a dedicated Cloudflare Worker.',
    href: 'https://tickets.vibesagent.com',
  },
]

export const stageLabels: Record<DropStage, string> = {
  prototype: 'Prototype',
  labs: 'Labs',
  graduated: 'Graduated',
}
