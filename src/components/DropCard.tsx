import { stageLabels } from '../data/site'
import type { Drop } from '../data/site'
import { getDropHref } from '../utils/dropHref'

interface DropCardProps {
  drop: Drop
}

const linkLabels: Record<'live' | 'code' | 'writeup', string> = {
  live: 'Live',
  code: 'Code',
  writeup: 'Write-up',
}

export function DropCard({ drop }: DropCardProps) {
  const externalLinks = Object.entries(drop.links) as Array<['live' | 'code' | 'writeup', string | undefined]>

  return (
    <article className="drop-card">
      <div className="drop-card__header">
        {drop.number ? <span className="drop-card__number">{drop.number}</span> : null}
        <span className="stage-badge" data-stage={drop.stage}>
          {stageLabels[drop.stage]}
        </span>
      </div>

      <div>
        <h3 className="drop-card__title">{drop.title}</h3>
        <p className="drop-card__date">{drop.launched}</p>
      </div>

      <p className="drop-card__summary">{drop.summary}</p>

      <div className="link-row">
        <a className="link-chip link-chip--internal" href={getDropHref(drop)}>
          Visit project
        </a>
        {externalLinks
          .filter(([, href]) => Boolean(href))
          .map(([key, href]) => (
            <a key={key} className="link-chip" href={href} rel="noreferrer" target="_blank">
              {linkLabels[key]}
            </a>
          ))}
      </div>
    </article>
  )
}
