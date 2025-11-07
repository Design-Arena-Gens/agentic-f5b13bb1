import { NextRequest, NextResponse } from 'next/server';
import flows from '../../../../../flows/registry';
import { runFlow } from '../../../../../lib/engine';

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  const flow = flows.find(f => f.id === params.id);
  if (!flow) return NextResponse.json({ error: 'Flow not found' }, { status: 404 });
  let input: Record<string, any> | undefined;
  try { input = await req.json(); } catch { input = undefined; }
  const result = await runFlow(flow, input);
  return NextResponse.json({ ok: true, id: flow.id, result });
}

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  // Allow triggering via GET for convenience
  const flow = flows.find(f => f.id === params.id);
  if (!flow) return NextResponse.json({ error: 'Flow not found' }, { status: 404 });
  const result = await runFlow(flow);
  return NextResponse.json({ ok: true, id: flow.id, result });
}
