// src/app/protected/page.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function ProtectedPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const response = await fetch('http://localhost:8080/api/auth/check', {
        method: 'GET',
        credentials: 'include', // Inclui cookies na solicitação
      });

      if (response.ok) {
        setIsAuthenticated(true);
      } else {
        router.push('/login');
      }
    };

    checkAuth();
  }, [router]);

  return (
    isAuthenticated ? (
      <div>
        <h1>Protected Content</h1>
        <button onClick={async () => {
          await fetch('http://localhost:3001/sign-out', {
            method: 'POST',
            credentials: 'include', // Inclui cookies na solicitação
          });
          router.push('/login');
        }}>Logout</button>
      </div>
    ) : (
      <p>Loading...</p>
    )
  );
}
