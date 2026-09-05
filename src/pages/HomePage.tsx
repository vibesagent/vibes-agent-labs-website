import { Link } from 'react-router-dom'
import { MountainScene } from '../components/MountainScene'
import { drops } from '../data/site'

export function HomePage() {
  return (
    <div className="landing">
      <section className="identity">
        <MountainScene />
        <div className="hero-intro">
          <p className="eyebrow">Vibes Agent</p>
          <h1 className="hero-intro__lede">Community evidence for data-centre decisions.</h1>
          <Link className="button hero-intro__button" to="/community">
            Explore the community pilot
          </Link>
        </div>
      </section>

      {drops.length > 0 ? (
        <section className="drops">
          <ol className="drop-list">
            {drops.map((drop) => (
              <li key={drop.slug} className="drop-row">
                <div className="drop-row__content">
                  {drop.number ? <p className="drop-row__number">{drop.number}</p> : null}
                  {drop.stage === 'labs' ? (
                    <span className="stage-badge drop-row__badge" data-stage={drop.stage}>
                      Labs
                    </span>
                  ) : null}
                  <h2 className="drop-row__title">
                    {drop.links.live ? <a href={drop.links.live}>{drop.title}</a> : drop.title}
                  </h2>
                  <p className="drop-row__summary">{drop.summary}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      ) : null}
    </div>
  )
}
