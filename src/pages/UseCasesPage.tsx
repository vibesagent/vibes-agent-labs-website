import { useCases } from '../data/site'

export function UseCasesPage() {
  return (
    <div className="page-stack use-case-page">
      <p className="eyebrow">Products</p>

      <section className="use-case-suite" aria-labelledby="use-case-suite-title">
        <div className="use-case-suite__header">
          <h1 id="use-case-suite-title" className="use-case-suite__title">
            Computer Use Eval Suites - for agents
          </h1>
        </div>

        <ul className="use-case-suite__list">
          {useCases.map((useCase) => (
            <li key={useCase.slug} className="use-case-row">
              <h2 className="use-case-row__title">{useCase.title}</h2>
              <a className="button button--soft use-case-row__link" href={useCase.href}>
                Open
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
