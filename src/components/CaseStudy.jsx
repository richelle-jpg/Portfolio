import { Section } from './Sections.jsx';

const steps = ['Playwright test suites', 'Laravel QA platform', 'Execution history + analytics', 'Dashboard + email reports'];

export default function CaseStudy() {
  return (
    <Section id="case-study" title="Case Study: QA Automation Platform">
      <p className="lead">A centralized Laravel platform integrated with Playwright regression suites, built at TechNavy Philippines Corporation. No client data, URLs, credentials, or screenshots are shown here.</p>
      <ol className="flow" aria-label="High-level flow">{steps.map((s) => <li key={s}>{s}</li>)}</ol>
      <div className="grid two">
        <div className="card"><h3>What it does</h3><ul><li>Runs Playwright regression suites across multiple projects</li><li>Keeps execution history and pass/fail analytics</li><li>Visualizes results in a dashboard</li><li>Sends automated email reports of regression results</li></ul></div>
        <div className="card"><h3>My contributions</h3><ul><li>Built the platform and its Playwright integration</li><li>Wrote reusable regression suites (DRIMS, PeopleCore HRIS)</li><li>Investigated failures and reduced flakiness</li></ul></div>
        <div className="card"><h3>Problem addressed</h3><p>TODO: describe, in your words, why results needed centralizing (for example scattered reports across projects).</p></div>
        <div className="card"><h3>Challenges &amp; lessons</h3><p>TODO: add 2 to 3 real examples (a flaky test, its root cause, and the fix). Avoid made-up numbers.</p></div>
        <div className="card"><h3>Future improvements (proposed, not built)</h3><p>TODO: list only ideas you have not implemented.</p></div>
      </div>
      <p className="muted">Screenshot evidence: add illustrative examples with fictional data only.</p>
    </Section>
  );
}
