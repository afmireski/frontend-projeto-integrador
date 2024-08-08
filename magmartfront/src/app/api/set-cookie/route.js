// src/app/api/set-cookie/route.js
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request) {
  const { email, username } = await request.json();

  // Configure as opções do cookie
  const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24, // 1 dia
  };

  // Criar os cookies
  cookies().set('userEmail', email, options);
  cookies().set('userName', username, options);

  return NextResponse.json({ message: 'Cookies set successfully' });
}
