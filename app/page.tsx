import Link from 'next/link';
import { Suspense } from 'react';
import flows from '../flows/registry';

export default function Page() {
  return (
    <main>
      <section className="card" style={{ marginBottom: 16 }}>
        <h2 style={{ marginTop: 0 }}>Your Automations</h2>
        <p style={{ opacity: 0.8 }}>Run flows manually or let cron handle them.</p>
      </section>
      <div className="grid">
        {flows.map((flow) => (
          <div className="card" key={flow.id}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ margin: '0 0 4px 0' }}>{flow.name}</h3>
                <div style={{ opacity: 0.7, fontSize: 12 }}>{flow.description}</div>
              </div>
              <span className="mono" style={{ fontSize: 12, opacity: 0.7 }}>{flow.id}</span>
            </div>
            <div style={{ height: 8 }} />
            <div style={{ display: 'flex', gap: 8 }}>
              <form action={`/api/flows/${flow.id}/run`} method="post">
                <button className="button" type="submit">Run now</button>
              </form>
              <Link href={`/flow/${flow.id}`} className="button secondary" style={{ display: 'inline-block', paddingTop: 10, paddingBottom: 10, paddingLeft: 14, paddingRight: 14 }}>Details</Link>
            </div>
          </div>
        ))}
      </div>
      <section style={{ marginTop: 24 }} className="card">
        <h3 style={{ marginTop: 0 }}>API</h3>
        <ul>
          <li><code className="mono">GET /api/flows</code></li>
          <li><code className="mono">POST /api/flows/[id]/run</code></li>
          <li><code className="mono">POST /api/webhooks/[name]</code></li>
        </ul>
      </section>
    </main>
  );
}
