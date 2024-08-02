// middleware.js

import { NextResponse } from 'next/server';

export async function middleware(req) {
  const token = req.cookies.get('authToken'); // Obtém o token dos cookies
  const url = req.nextUrl.clone();

  // Define as rotas protegidas
  const protectedRoutes = ['/user'];

  if (protectedRoutes.includes(url.pathname)) {
    if (!token) {
      // Se não houver token, redirecione para a página de login
      url.pathname = '/login';
      return NextResponse.redirect(url);
    }

    // Envia o token ao backend para verificação
    const response = await fetch('http://localhost:3001/verify-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Envia o token no cabeçalho
      },
    });

    if (!response.ok) {
      // Se a autenticação falhar, redirecione para a página de login
      url.pathname = '/login';
      return NextResponse.redirect(url);
    }
  }

  // Se o token for válido, continue para a rota solicitada
  return NextResponse.next();
}

export const config = {
  matcher: '/protected/:path*', // Define o escopo das rotas protegidas
};
