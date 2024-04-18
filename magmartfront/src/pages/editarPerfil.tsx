// components/Cadastro.js

import React,{ useState } from 'react';
import styles from '../styles/EditarPerfil.module.css';
import "../app/globals.css";
import Navbar from '../components/Navbar';

export default function EditarPerfil() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica para autenticar o usuário
    console.log('Usuário:', username);
    console.log('Senha:', password);
  };

  return (
    <div className={styles.mainLogin}>
        <div className='w-full'>
            <Navbar />
        </div>
        <div className={styles.ContainerEditarPerfil}>
            <form onSubmit={handleLogin} className={styles.form} >
                <div className='flex flex-col h-full w-10/12 justify-center items-center'>
                <div className='flex flex-col h-full w-full justify-center items-center p-3'>
                    <h2 className='text-2xl font-bold text-white'>Editar Perfil</h2>
                </div>
                <div className='flex flex-col h-full w-full justify-center items-center'>
                    <div className='flex flex-row h-full w-full  m-2 justify-center items-center'>
                        <div className='flex flex-col h-full w-1/2 justify-center items-center'>
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
                                    className={styles.myinput}
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Confirmar Senha"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center h-full w-full'>
                    <div className='flex flex-col justify-center items-center h-full w-full'>
                    <button className="bg-[#E7852B] h-full w-[65%] p-2 rounded-lg text-white" type="submit">Cadastrar</button>
                    </div>
                    <div className='flex flex-col justify-center mt-5 items-center h-full w-full'>
                    <button className="bg-[#e72b2b] h-full w-[65%] p-2 rounded-lg text-white" type="submit">Apagar Perfil</button>
                    </div>
                </div>
                </div>
            </form>
        </div>
    </div>
  );
}
