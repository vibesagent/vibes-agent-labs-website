import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="not-found">
      <p className="eyebrow">Not found</p>
      <h1 className="not-found__title">That page is not part of the archive.</h1>
      <p className="body-copy">
        The brand hub is small for now. Head back to the home page or open Labs.
      </p>
      <div className="button-row not-found__actions">
        <Link className="button" to="/">
          Home
        </Link>
        <Link className="button button--ghost" to="/labs">
          Labs
        </Link>
      </div>
    </section>
  )
}
