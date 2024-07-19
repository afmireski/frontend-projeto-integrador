import { NextResponse } from 'next/server';
import { getIronSession } from 'iron-session';

const config = {
  password: process.env.SECRET_COOKIE_PASSWORD,
  cookieName: process.env.COOKIE_NAME,
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

export async function POST(request) {
  const body = await request.json();
  const { email, password } = body;
  
  const session = await getIronSession(request, config);

  // Aqui você adiciona sua lógica de autenticação
  if (email === 'a@a.com' && password === '123456') {
    session.user = { email };
    await session.save();
    return NextResponse.json({ success: true }, { status: 200 });
  } else {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }
}
