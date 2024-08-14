import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import Cookies from 'js-cookie';

export async function middleware(req: NextRequest) {
  const protectedRoutes = [
    '/users/',
    '/admin/',
    '/admin/new',
    '/tiers',
    '/pokemon/',
    '/cart/',
    '/purchases/finish',
    '/profile/orders'
  ];

  const pathname = req.nextUrl.pathname;

  // Verifica se a rota atual é protegida
  const isProtected = protectedRoutes.some((route) => pathname.startsWith(route));

  if (isProtected) {
    const token = Cookies.get('authToken'); // Pega o token do cookie

    if (!token) {
      // Redireciona para a página de login se não houver token
      // return NextResponse.redirect(new URL('/login', req.url));
    }

    // Se houver token, adiciona-o aos cabeçalhos da requisição
    req.headers.set('Authorization', `${token}`);
  }

  // Continua a requisição
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/users/:path*',
    '/admin/:path*',
    '/tiers/:path*',
    '/pokemon/:path*',
    '/carts/:path*',
    '/purchases/finish',
    '/profile/orders'
  ],
};
