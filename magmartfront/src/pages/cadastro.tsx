// components/Cadastro.js

import React,{ useState } from 'react';
import styles from '../styles/Cadastro.module.css';
import "../app/globals.css";
import Image from 'next/image'
import { useRouter } from 'next/router';

export default function Cadastrar() {
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
      <form onSubmit={handleLogin} className={styles.form} >
        <div className='flex flex-col h-full w-10/12 justify-center items-center'>
          <div className='flex flex-col h-full w-full justify-center items-center p-3'>
            <h2 className='text-2xl font-bold text-white'>CADASTRO</h2>
          </div>
          <div className='flex flex-col h-full w-full justify-center items-center'>
            <div className='flex flex-row h-full w-full  m-2 justify-center items-center'>
              <div className='flex flex-col h-full w-1/2 justify-center items-center'>
                <div className='flex flex-row h-full w-full justify-center items-center'>
                  <div className=''>
                    <input
                      type="text"
                      className={styles.myinput}
                      id="nome"
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
                      type="email"
                      id="email"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="E-mail"
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
              </div>
              <div className='flex flex-col h-full w-1/2 m-2 justify-center items-center'>
                <div className='flex flex-row h-full w-full justify-center items-center'>
                  <div className=''>
                    <input
                      type="text"
                      className={styles.myinput}
                      id="numero"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Telefone"
                    />
                  </div>
                </div>
                <div className='flex flex-row h-full w-full justify-center items-center'>
                  <div className="">
                    <input
                      className="w-[10.5rem] p-1 mb-4 border border-gray-300 rounded-lg opacity-50 text-black"
                      type="date"
                      id="Nascimento"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Data de Nascimento"
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
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center h-full w-full'>
            <div className='flex flex-col justify-center items-center h-full w-full'>
              <button className="bg-[#E7852B] h-full w-[65%] p-2 rounded-lg text-white" type="submit">Salvar Alteração</button>
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
