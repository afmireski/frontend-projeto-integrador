"use client"
import React, { useState } from 'react';
import styles from '@/styles/EditarPerfil.module.css';
import "@/app/globals.css";
import Navbar from '@/components/Navbar';
import axios from 'axios'; // Importar Axios para fazer solicitações HTTP
import EditUser from '@/APIs/editUser';

export default function EditarPerfil() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [userID, setuserId] = useState('');

    const handleUpdateProfile = async (e: any) => {
        e.preventDefault();

        try {
            // Envia os dados do usuário para a API para atualização
            const response = await axios.patch(`http://localhost:3001/users/${userID}/update`, {
                name: name,
                email: email,
                phone: "+55"+phone,
            });

            // Verifica se a atualização foi bem-sucedida
            if (response.status === 200) {
                console.log('Perfil atualizado com sucesso!');
            } else {
                console.error('Erro ao atualizar o perfil.');
            }
        } catch (error) {
            console.error('Erro ao atualizar o perfil:', error);
        }
    };

    return (
        <div className={styles.mainLogin}>
            <div className='w-full'>
                <Navbar />
            </div>
            <div className={styles.ContainerEditarPerfil}>
                <form onSubmit={handleUpdateProfile} className={styles.form}>
                    <div className='flex flex-col h-full w-10/12 justify-center items-center'>
                        <div className='flex flex-col h-full w-full justify-center items-center p-3'>
                            <h2 className='text-2xl font-bold text-white'>Editar Perfil</h2>
                        </div>
                        <div className='flex flex-col h-full w-full justify-center items-center'>
                            <div className='flex flex-row h-full w-full  m-2 justify-center items-center'>
                                <div className='flex flex-col h-full w-1/2 justify-center items-center'>
                                    <div className='flex flex-row h-full w-full justify-center items-center'>
                                        <div className=''>
                                            <input
                                                className={styles.myinput}
                                                type="text"
                                                id="userID"
                                                value={userID}
                                                onChange={(e) => setuserId(e.target.value)}
                                                placeholder="ID"
                                            />
                                        </div>
                                    </div>
                                    <div className='flex flex-row h-full w-full justify-center items-center'>
                                        <div className="">
                                            <input
                                                className={styles.myinput}
                                                type="email"
                                                id="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="E-mail"
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
                                            id="nome"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Nome"
                                            />
                                        </div>
                                    </div>
                                    <div className='flex flex-row h-full w-full justify-center items-center'>
                                        <div className="">
                                            <input
                                                type="text"
                                                className={styles.myinput}
                                                id="phone"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                placeholder="Telefone"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center h-full w-full'>
                            <div className='flex flex-col justify-center items-center h-full w-full'>
                                <button className="bg-[#E7852B] h-full w-[65%] p-2 rounded-lg text-white" type="submit">Atualizar Perfil</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}