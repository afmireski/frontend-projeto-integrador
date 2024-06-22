// components/Login.js

import React, { useState } from 'react';
import styles from '../styles/Login.module.css';
import "../app/globals.css";
import Image from 'next/image';
import { useRouter } from 'next/router';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(''); // Estado para rastrear erros de login
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/sign-in', {
        email: username,
        password: password,
      });

      const { accessToken } = response.data;

      // Armazenar o token em um cookie
      Cookies.set('token', accessToken, { expires: 1, secure: true, sameSite: 'strict' });

      // Redirecionar o usuário para uma página protegida
      router.push('/home');
    } catch (error) {
      console.error('Login failed:', error);

      // Verifica se a resposta de erro contém "invalid credentials"
      if (error.response && error.response.data.error_message === 'invalid password') {
        setLoginError('senha incorreta');
      } else {
        setLoginError('Ocorreu um erro inesperado. Tente novamente mais tarde.');
      }
    }
  };

  return (
    <div className={styles.containerLogin}>
      <form onSubmit={handleLogin} className={styles.form}>
        <div className='flex flex-col h-full w-96'>
          <div className='flex flex-col h-full w-full justify-center items-center p-3'>
            <h2 className='text-2xl font-bold text-white'>LOGIN</h2>
          </div>
          <div className='flex flex-col h-full w-full justify-center items-center'>
            <div className='flex flex-row h-full w-full justify-center items-center'>
              <div>
                <input
                  type="email"
                  className={styles.myinput}
                  id="email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="E-mail"
                />
              </div>
            </div>
            <div className='flex flex-row h-full w-full justify-center items-center'>
              <div>
                <input
                  className={styles.myinput}
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Senha"
                />
              </div>
            </div>
            {loginError && (
              <div className='flex flex-row h-full w-full justify-center items-center'>
                <p className='text-red-500'>{loginError}</p>
              </div>
            )}
            <div className='flex flex-row w-[70%] justify-start mb-5'>
              <div className='flex flex-row w-full justify-start mb-5'>
                <input className='mr-2' type="checkbox" name="remember-me" id="remember"/>
                <div className='text-white'>lembre-me</div>
              </div>
              <div className='flex flex-row w-full justify-end mb-5'>
                <div className='text-white'><a className='hover:underline' href='#'>esqueçeu a senha?</a></div>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center h-full w-full'>
            <div className='flex flex-col justify-center items-center h-full w-full'>
              <button className="bg-[#E7852B] h-full w-[65%] p-2 rounded-lg text-white" type="submit">Entrar</button>
            </div>
            <div className='flex flex-col justify-center items-center h-full w-full mt-5'>
              <button className="bg-[#ffffff] h-full w-10 p-2 rounded-full text-white" type="submit">
                <Image src="/google-37.png" alt="Picture of the author" width={30} height={30} />
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
