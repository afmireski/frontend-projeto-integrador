"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/CadPokemon.module.css';
import "@/app/globals.css";
import AdmNavbar from '@/components/AdmNavbar';

export default function EditarUsuario() {
    const [userId, setUserId] = useState('');

    return (
        <div className={styles.mainLogin}>
            <div className='w-full'>
                <AdmNavbar />
            </div>
            <div className={styles.ContainerCadPokemon}>
                <form className={styles.form} >
                    <div className='flex flex-col h-full w-10/12 justify-center items-center'>
                        <div className='flex flex-col h-full w-full justify-center items-center p-3'>
                            <h2 className='text-2xl font-bold text-white'>Buscar Usuário</h2>
                        </div>
                        <div className='flex flex-col h-full w-full justify-center items-center'>
                            <div className='flex flex-row h-full w-full  m-2 justify-center items-center'>
                                <div className='flex flex-col h-full w-full justify-center items-center'>
                                    <div className='flex flex-row h-full w-full justify-center items-center'>
                                        <div className="">
                                            <input
                                                className={styles.myinput}
                                                type="text"
                                                id="userId"
                                                value={userId}
                                                onChange={(e) => setUserId(e.target.value)}
                                                placeholder="ID do Usuário"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center h-full w-full'>
                            <div className='flex flex-col justify-center mt-5 items-center h-full w-full'>
                            <Link href={`/admin/users/${userId}`}><button className="bg-[#e72b2b] h-full w-[65%] p-2 rounded-lg text-white" type="submit">Buscar Usuário</button></Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
