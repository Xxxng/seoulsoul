import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, result_neighborhood } = body;

    if (!email || !result_neighborhood) {
      return NextResponse.json({ error: 'Missing data' }, { status: 400 });
    }

    const { error } = await supabase
      .from('leads')
      .insert([
        { 
          email: email, 
          result_neighborhood: result_neighborhood
        }
      ]);

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (err) {
    console.error('API Error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
