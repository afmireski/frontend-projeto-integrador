// components/Login.js

import React,{ useState } from 'react';
import styles from '../styles/Login.module.css';
import "../app/globals.css";
import Image from 'next/image'
import { useRouter } from 'next/router';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica para autenticar o usuário
    console.log('Usuário:', username);
    console.log('Senha:', password);
  };

  return (
    <div className={styles.containerLogin}>
      <form onSubmit={handleLogin} className={styles.form}>
        <div className='flex flex-col h-full w-full'>
          <div className='flex flex-col h-full w-full justify-center items-center p-3'>
            <h2 className='text-2xl font-bold text-white'>LOGIN</h2>
          </div>
          <div className='flex flex-col h-full w-full justify-center items-center'>
            <div className='flex flex-row h-full w-full justify-center items-center'>
              <div className=''>
                <input
                  type="text"
                  className={styles.myinput}
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Nome"
                />
              </div>
            </div>
            <div className='flex flex-row h-full w-full justify-center items-center'>
              <div className="">
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
            <div className='flex flex-row w-full justify-start mb-5'>
              <input className='mr-2' type="checkbox" name="remember-me" id="remember"/>
              <div className='text-white'>lembre-me</div>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center h-full w-full'>
            <div className='flex flex-col justify-center items-center h-full w-full'>
              <button className="bg-[#E7852B] h-full w-full p-2 rounded-lg text-white" type="submit">Entrar</button>
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
