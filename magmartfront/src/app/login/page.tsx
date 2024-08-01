// src/app/login/page.tsx

"use client";

import { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'; // Biblioteca para manipular cookies no frontend

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/sign-in', {
        email,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.status === 200) {
        const token = response.data.token;

        // Armazene o token em um cookie
        Cookies.set('authToken', token, { 
          expires: 7, // O token expira em 7 dias
          secure: true, // O cookie só será enviado em conexões HTTPS
          sameSite: 'strict' // Protege contra CSRF
        });

        window.location.href = '/'; // Redireciona após login bem-sucedido
      } else {
        setError('Login failed');
      }
    } catch (error) {
      setError('An error occurred during login');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
      {error && <p>{error}</p>}
    </form>
  );
}
