import { Outlet } from 'react-router-dom'
import { siteMeta } from '../data/site'

export function Layout() {
  return (
    <div className="site-shell">
      <main className="site-main">
        <div className="shell-inner">
          <Outlet />
        </div>
      </main>

      <footer className="site-footer">
        <div className="shell-inner footer-minimal">
          <a className="footer-link" href={siteMeta.links.github} rel="noreferrer" target="_blank">
            GitHub
          </a>
        </div>
      </footer>
    </div>
  )
}
