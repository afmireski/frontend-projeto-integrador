// src/pages/api/login.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getIronSession } from 'iron-session';
import { SessionData } from '@/components/myTypes/SessionTypes';

const options = {
  password: process.env.SECRET_COOKIE_PASSWORD!,
  cookieName: process.env.COOKIE_NAME!,
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).end(); // Method Not Allowed
    return;
  }

  const { token, username, email,password } = req.body;

  // Autenticação: Verifique se o usuário e senha estão corretos
  // Isso deve ser adaptado para verificar as credenciais reais
  if (username === 'test' && password === 'password') {
    const session = await getIronSession<SessionData>(req, res, options);
    session.user = { token:token ,email:email,name: username};
    await session.save();

    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
}
