import { Link } from 'react-router-dom'
import { MountainScene } from '../components/MountainScene'
import { drops, siteMeta } from '../data/site'

export function HomePage() {
  const hasWriting = Boolean(siteMeta.links.substack)

  return (
    <div className="landing">
      <section className="identity">
        <MountainScene />
        <h1 className="identity__title">{siteMeta.program}</h1>
      </section>

      <section className="drops">
        <ol className="drop-list">
          {drops.map((drop) => (
            <li key={drop.slug} className="drop-row">
              <div className="drop-row__content">
                {drop.number ? <p className="drop-row__number">{drop.number}</p> : null}
                <h2 className="drop-row__title">
                  <Link to={`/labs/${drop.slug}`}>{drop.title}</Link>
                </h2>
                <p className="drop-row__summary">{drop.summary}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {hasWriting ? (
        <section className="writing-link-section">
          <h2 className="section-label">Writing</h2>
          <a className="drop-row__link" href={siteMeta.links.substack} rel="noreferrer" target="_blank">
            Substack
          </a>
        </section>
      ) : null}
    </div>
  )
}
