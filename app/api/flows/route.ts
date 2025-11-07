import { NextResponse } from 'next/server';
import flows from '../../../flows/registry';

export async function GET() {
  const list = flows.map(f => ({ id: f.id, name: f.name, description: f.description }));
  return NextResponse.json({ flows: list });
}
