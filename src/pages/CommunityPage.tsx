import { Link } from 'react-router-dom'
import { siteMeta } from '../data/site'

const mailto = `mailto:${siteMeta.email}?subject=${encodeURIComponent('Community evidence study')}`
const sampleHref = `${import.meta.env.BASE_URL}samples/m3-mount-pleasant.pdf`

const deliverables = [
  {
    title: 'Verified baseline',
    body: 'Material public claims about the project tied to sources, dated, and separated from unresolved questions. Timeline and actor map included.',
  },
  {
    title: 'Issue and claim ledger',
    body: 'The concerns in the public record organized by issue: who raised each one, what evidence exists for and against, and where the record is silent.',
  },
  {
    title: 'Original community evidence',
    body: 'A target of 20–30 consented qualitative interviews with residents, businesses, and workers. Recruitment gaps are recorded; quotations are checked against recordings, written responses, or participant-confirmed notes.',
  },
  {
    title: 'Useful commitments and unresolved concerns',
    body: 'The commitments and design changes participants say would matter, alongside concerns and disagreements that remain.',
  },
  {
    title: 'Unknowns and a research plan',
    body: 'The questions the public record cannot answer, who may be able to answer them, and the next research steps.',
  },
  {
    title: 'Briefing',
    body: 'A written memo and one live session, with delivery agreed at kickoff.',
  },
]

export function CommunityPage() {
  return (
    <div className="page-stack community-page">
      <Link className="eyebrow" to="/" aria-label="VibesAgent home">VibesAgent</Link>

      <section className="page-hero" aria-labelledby="community-title">
        <h1 id="community-title" className="page-hero__title">
          Community evidence for data-centre decisions.
        </h1>
        <p className="page-hero__lede">
          Understand the questions people living and working nearby want answered, the
          commitments they consider useful, and the disagreements that remain. Ian Macdonald
          would lead a source-backed baseline, consented interviews, and a buyer briefing.
        </p>
        <p className="body-copy"><strong>Proposed pilot: CAD 10,000 · Three weeks from agreed kickoff · One project.</strong></p>
        <div className="button-row">
          <a className="button" href={mailto}>
            Email Ian
          </a>
          <a className="button button--soft" href={sampleHref} target="_blank" rel="noreferrer">
            Read the sample (PDF)
          </a>
        </div>
      </section>

      <section aria-labelledby="deliverables-title">
        <div className="section-header">
          <h2 id="deliverables-title" className="section-header__title">
            What you get
          </h2>
        </div>
        <div className="feature-grid community-grid">
          {deliverables.map((item) => (
            <div key={item.title} className="panel">
              <h3 className="panel__title">{item.title}</h3>
              <p className="panel__body">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="first-study" aria-labelledby="first-study-title">
        <div className="section-header">
          <h2 id="first-study-title" className="section-header__title">
            Public-source sample: M3, Mount Pleasant
          </h2>
          <p className="section-header__lede">
            The TELUS and Westbank AI data centre proposed at 111 East 5th Avenue, Vancouver.
            On July 21, 2026, Council reconsidered its earlier hearing referral and returned the
            report to staff for further consultation. The City says engagement will begin after
            the election and gives no confirmed replacement date. The rezoning has not been
            approved through that decision.
          </p>
        </div>
        <div className="metric-row" style={{ marginTop: 20 }}>
          <div className="metric-block">
            <h3>Application</h3>
            <p>Westbank is the applicant/developer; 111 E 5th Property Inc. is the registered owner. TELUS is the proposed operator.</p>
          </div>
          <div className="metric-block">
            <h3>Public record</h3>
            <p>The June staff report records approximately 579 submissions, including support and concerns. This is not a count of opponents or a poll.</p>
          </div>
          <div className="metric-block">
            <h3>Research questions</h3>
            <p>What do people nearby need to understand about the proposal, which evidence would help, and where would disagreement persist?</p>
          </div>
          <div className="metric-block">
            <h3>Sample status</h3>
            <p>Public-source work only, dated September 4, 2026. No community interviews have been conducted for this sample.</p>
          </div>
        </div>
        <p className="body-copy" style={{ marginTop: 16 }}>
          Sources:{' '}
          <a className="footer-link" href="https://www.shapeyourcity.ca/111-e-5" rel="noreferrer" target="_blank">
            City of Vancouver, Shape Your City
          </a>
          {', '}
          <a
            className="footer-link"
            href="https://council.vancouver.ca/20260714/documents/regu20260714min.pdf#page=63"
            rel="noreferrer"
            target="_blank"
          >
            Council minutes, July 21
          </a>
          {', and '}
          <a className="footer-link" href="https://council.vancouver.ca/20260714/documents/rr1.pdf#page=6" target="_blank" rel="noreferrer">
            Staff report, June 30
          </a>
          .
        </p>
        <p className="body-copy" style={{ marginTop: 16 }}>
          <a className="sample-link" href={sampleHref} target="_blank" rel="noreferrer">
            Read the source-backed M3 sample (PDF)
          </a>
          {' '}for the record, company projections, open questions, and proposed study.
        </p>
      </section>

      <section aria-labelledby="how-title">
        <div className="section-header">
          <h2 id="how-title" className="section-header__title">
            How it works
          </h2>
        </div>
        <div className="feature-grid community-grid">
          <div className="panel">
            <h3 className="panel__title">Week one. Baseline and recruitment.</h3>
            <p className="panel__body">
              Agree the decision question and interview guide, verify the public record, and
              recruit through several local channels. Check access and response early.
            </p>
          </div>
          <div className="panel">
            <h3 className="panel__title">Week two. Interviews.</h3>
            <p className="panel__body">
              In person, by phone, or by structured text interview. Participants know who
              commissioned the study and choose whether to be recorded or quoted. Any AI
              assistance is disclosed in advance. Participants are offered a plain-language summary.
            </p>
          </div>
          <div className="panel">
            <h3 className="panel__title">Week three. Briefing.</h3>
            <p className="panel__body">
              Information needs, useful commitments, unresolved objections, and research still
              needed. A findings memo, evidence ledger, and one live briefing.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="terms-title">
        <div className="section-header">
          <h2 id="terms-title" className="section-header__title">
            Proposed terms
          </h2>
        </div>
        <div className="metric-row" style={{ marginTop: 20 }}>
          <div className="metric-block">
            <h3>Price</h3>
            <p>CAD 10,000, fixed. Half on start, half on delivery. Confirm applicable taxes and any recruitment expenses in the written agreement.</p>
          </div>
          <div className="metric-block">
            <h3>Scope</h3>
            <p>One project, one decision. Target: 20–30 interviews with adults, conducted in English. Qualitative findings; no estimate of neighbourhood support or promise of approval.</p>
          </div>
          <div className="metric-block">
            <h3>Independence</h3>
            <p>The sponsor is disclosed and disagreement is preserved. Buyer outputs omit participant identities and identifying details. Consent sets quotation choices, withdrawal limits, and retention dates before interviews.</p>
          </div>
          <div className="metric-block">
            <h3>Not included</h3>
            <p>Representative polling, paid recruitment panels, technical certification, public communications, and translation beyond English.</p>
          </div>
        </div>
        <p className="body-copy" style={{ marginTop: 16 }}>
          The three-week schedule starts once the decision question, recruitment routes, consent
          process, and project access are agreed. The buyer helps identify local invitation channels;
          participation is voluntary and access is not yet secured. If recruitment falls short, we
          flag it in week one and agree a revised schedule or scope before proceeding.
        </p>
      </section>

      <section className="panel" aria-labelledby="contact-title">
        <h2 id="contact-title" className="panel__title">
          Talk to Ian
        </h2>
        <p className="panel__body">
          For the developer or operator responsible for M3’s next engagement phase: start with
          a 15-minute conversation about the decision, existing research, and recruitment access.
          The longer-term vision is an ongoing community–developer research and conversation
          service. This first Vancouver pilot can be delivered manually.
        </p>
        <div className="button-row" style={{ marginTop: 16 }}>
          <a className="button" href={mailto}>
            {siteMeta.email}
          </a>
        </div>
      </section>

      <p className="footer-note">
        Looking for the VibesAgent Labs computer-use eval suites?{' '}
        <Link className="footer-link" to="/use-cases">
          They live here.
        </Link>
      </p>
    </div>
  )
}
