// pages/api/login.js

import { withIronSessionApiRoute } from 'iron-session/next';
import axios from 'axios';

export default withIronSessionApiRoute(async (req, res) => {
  console.log('Request received:', req.body);

  const { email, password } = req.body;

  try {
    const response = await axios.post('http://localhost:3001/sign-in', { email, password });
    console.log('Response from backend:', response.data);

    const { accessToken } = response.data;

    req.session.user = { token: accessToken }; // Armazenar o token na sessão
    await req.session.save();

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(401).json({ message: 'Invalid credentials' });
  }
}, {
  password: process.env.SECRET_COOKIE_PASSWORD,
  cookieName: 'myapp_session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
});
