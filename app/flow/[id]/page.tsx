import flows from '../../../flows/registry';
import { notFound } from 'next/navigation';

export default function FlowDetail({ params }: { params: { id: string }}) {
  const flow = flows.find(f => f.id === params.id);
  if (!flow) return notFound();
  return (
    <main className="card">
      <h2 style={{ marginTop: 0 }}>{flow.name}</h2>
      <p style={{ opacity: 0.8 }}>{flow.description}</p>
      <pre className="mono" style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(flow, null, 2)}</pre>
      <form action={`/api/flows/${flow.id}/run`} method="post">
        <button className="button" type="submit">Run now</button>
      </form>
    </main>
  );
}
