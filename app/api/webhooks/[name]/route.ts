import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, { params }: { params: { name: string } }) {
  const body = await req.json().catch(() => ({}));
  return NextResponse.json({ ok: true, name: params.name, received: body, ts: new Date().toISOString() });
}
