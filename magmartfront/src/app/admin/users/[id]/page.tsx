'use client'
import React,{ useEffect, useState } from 'react';
import styles from '@/styles/Product.module.css';
import "@/app/globals.css";
import AdmNavbar from '@/components/AdmNavbar';
import Footer from '@/components/Footer';
import { Button } from '@mui/material'; 
import Link from 'next/link';
import GetUserById from '@/APIs/getUserById';
import DeleteUser from '@/APIs/deleteUser';
import axios from 'axios';

function Product({params}: {params: {id: string}}) {
    const [user_id, setUserId] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [birth, setBirth] = useState('');
    const [role, setRole] = useState('');
    let data;
    useEffect(() => {
        async function getdados() {
            try {
                //setPokId(queryString);
                //if (typeof router.query.data === 'string') {
                    data = await GetUserById(params.id);
                    setUserId(data.Id);
                    setName(data.Name);
                    setPhone(data.Phone);
                    setEmail(data.Email);
                    setBirth(data.BirthDate);
                    setRole(data.Role);
                    console.log(data)
                //}
                
            } catch {
                console.log('erro')
            }
        }

        getdados();
    }, []);

    const handleDelete = async (e: any) => {
        DeleteUser(params.id)
    }

    const [patchedName, setPatchedName] = useState('');
    const [patchedPhone, setPatchedPhone] = useState('');
    const [patchedEmail, setPatchedEmail] = useState('');
    const handleUpdateUser = async (e:any) => {
        e.preventDefault();

        try {
            // Envia os dados do usuário para a API para atualização
            const response = await axios.patch(`http://localhost:3001/users/${params.id}/update`, {
                name: patchedName,
                email: patchedEmail,
                phone: "+55"+patchedPhone,
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
        <div>
            <AdmNavbar />
            <div className="flex flex-row justify-center min-h-screen items-center gap-4 p-8">
                <div className={styles.ContainerCadPokemon}>
                    <form className={styles.form} >
                        <div className='flex flex-col h-full w-10/12 justify-center items-center'>
                            <div className='flex flex-col h-full w-full justify-center items-center p-3'>
                                <h2 className='text-2xl font-bold text-black'>Editar Usuário</h2>
                            </div>
                            <div className='flex flex-col h-full w-full justify-center items-center'>
                                <div className='flex flex-row h-full w-full  m-2 justify-center items-center'>                                    
                                    <div className='flex flex-col h-full w-1/2 m-2 justify-center items-center'>
                                        <div className='flex flex-row h-full w-full justify-center items-center'>
                                            <div className=''>
                                                <input
                                                    type="string"
                                                    className={styles.myinput}
                                                    id="Name"
                                                    value={patchedName}
                                                    onChange={(e) => setPatchedName(e.target.value)}
                                                    placeholder="Nome"
                                                />
                                            </div>
                                        </div>
                                        <div className='flex flex-row h-full w-full justify-center items-center'>
                                            <div className="">
                                                <input
                                                    className={styles.myinput}
                                                    type="string"
                                                    id="Email"
                                                    value={patchedEmail}
                                                    onChange={(e) => setPatchedEmail(e.target.value)}
                                                    placeholder="Email"
                                                />
                                            </div>
                                        </div>
                                        <div className='flex flex-row h-full w-full justify-center items-center'>
                                            <div className="">
                                                <input
                                                    className={styles.myinput}
                                                    type="string"
                                                    id="Phone"
                                                    value={patchedPhone}
                                                    onChange={(e) => setPatchedPhone(e.target.value)}
                                                    placeholder="Phone"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center h-full w-full'>
                                <div className='flex flex-col justify-center items-center h-full w-full'>
                                    <button onClick={handleUpdateUser} className="bg-[#E7852B] h-full w-[65%] p-2 rounded-lg text-white" type="button">Editar Usuário</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            <div className='description'>
                <p className={`m-0 max-w-[200ch] text-sm text-balance`}>
                    Id: {user_id}<br/>
                    Nome: {name}<br/>
                    Data de Nascimento: {birth}<br/>
                    Telefone: {phone}<br/>
                    Email: {email}<br/>
                    Papel: {role}
                </p>
                <Button onClick={handleDelete} className="bg-[#E7852B] h-full w-[65%] p-2 rounded-lg text-white" variant="contained"> <Link href={"/admin/users/find"}>Deletar Usuário</Link> </Button>
            </div> 
          </div>
          <Footer />
      </div>
  );
}

export default Product;