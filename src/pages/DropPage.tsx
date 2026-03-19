import { Link, useParams } from 'react-router-dom'
import { drops, stageLabels } from '../data/site'
import { NotFoundPage } from './NotFoundPage'

const detailLabels = {
  live: 'Live product',
  code: 'Repository',
  writeup: 'Write-up',
} as const

export function DropPage() {
  const { slug } = useParams()
  const drop = drops.find((entry) => entry.slug === slug)

  if (!drop) {
    return <NotFoundPage />
  }

  const detailLinks = Object.entries(drop.links).filter(([, href]) => Boolean(href))

  return (
    <div className="detail-stack">
      <section className="detail-header panel">
        <div className="detail-header__meta">
          {drop.number ? <span className="detail-header__number">{drop.number}</span> : null}
          <span className="stage-badge" data-stage={drop.stage}>
            {stageLabels[drop.stage]}
          </span>
        </div>
        <h1 className="detail-header__title">{drop.title}</h1>
        <p className="detail-header__date">{drop.launched}</p>
        <p className="detail-header__lede">{drop.summary}</p>
      </section>

      <section className="detail-grid">
        <article className="artifact-panel">
          <div className="artifact-frame">
            <span className="artifact-frame__label">Artifact surface</span>
            <div>
              <h2 className="artifact-frame__headline">The interface thesis comes first.</h2>
              <p className="body-copy">{drop.note}</p>
            </div>
            <div className="artifact-frame__grid">
              <div className="artifact-tile">
                <p className="artifact-tile__label">Focus</p>
                <p className="artifact-tile__value">{drop.tags[0]}</p>
              </div>
              <div className="artifact-tile">
                <p className="artifact-tile__label">Mode</p>
                <p className="artifact-tile__value">{stageLabels[drop.stage]}</p>
              </div>
              <div className="artifact-tile">
                <p className="artifact-tile__label">Program</p>
                <p className="artifact-tile__value">VibesAgent Labs</p>
              </div>
              <div className="artifact-tile">
                <p className="artifact-tile__label">Shape</p>
                <p className="artifact-tile__value">One surface, many agents</p>
              </div>
            </div>
          </div>
        </article>

        <aside className="detail-sidebar">
          <div className="status-block">
            <h3>Project state</h3>
            <p>{drop.note}</p>
          </div>
          <div className="detail-note">
            <h3>Links</h3>
            {detailLinks.length > 0 ? (
              <div className="button-row">
                {detailLinks.map(([key, href]) => (
                  <a key={key} className="button button--soft" href={href} rel="noreferrer" target="_blank">
                    {detailLabels[key as keyof typeof detailLabels]}
                  </a>
                ))}
              </div>
            ) : (
              <p>The public live link, repo link, and write-up can drop in here when they are ready.</p>
            )}
          </div>
        </aside>
      </section>

      <section className="detail-panel">
        <div className="section-header">
          <p className="eyebrow">Project Note</p>
          <h2 className="section-header__title">Why this exists</h2>
        </div>

        <div className="detail-story">
          {drop.detail.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="button-row" style={{ marginTop: 24 }}>
          <Link className="button" to="/">
            Back home
          </Link>
        </div>
      </section>
    </div>
  )
}
