import { Link } from 'react-router-dom'
import { MountainScene } from '../components/MountainScene'
import { drops } from '../data/site'

export function HomePage() {
  return (
    <div className="landing">
      <section className="identity">
        <MountainScene />
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

    </div>
  )
}
