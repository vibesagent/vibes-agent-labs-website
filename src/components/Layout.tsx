import { NavLink, Outlet } from 'react-router-dom'
import { siteMeta } from '../data/site'

export function Layout() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="shell-inner site-header__inner">
          <NavLink className="brand-wordmark" to="/">
            {siteMeta.program}
          </NavLink>

          <nav className="site-nav" aria-label="External">
            <a className="site-nav__link" href={siteMeta.links.github} rel="noreferrer" target="_blank">
              GitHub
            </a>
            <a className="site-nav__link" href={siteMeta.links.x} rel="noreferrer" target="_blank">
              X
            </a>
          </nav>
        </div>
      </header>

      <main className="site-main">
        <div className="shell-inner">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
