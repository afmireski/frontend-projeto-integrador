'use client'
import React,{ useEffect, useState } from 'react';
import styles from '@/styles/Product.module.css';
import "@/app/globals.css";
import Image from 'next/image'
import { useRouter } from 'next/router';
import AdmNavbar from '@/components/AdmNavbar';
import Card from '@/components/Card';
import Footer from '@/components/Footer';
import PropTypes from 'prop-types';
import { types } from 'util';
import { Button } from '@mui/material'; 
import Link from 'next/link';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import GetUserById from '@/APIs/getUserById';
import DeleteUser from '@/APIs/deleteUser';
import { UserData } from '@/components/myTypes/UserTypes';
import axios from 'axios';

function Product({params}: {params: {id: string}}) {
    const [user_id, setUserId] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    let data;
    useEffect(() => {
        async function getdados() {
            try {
                //setPokId(queryString);
                //if (typeof router.query.data === 'string') {
                    data = await GetUserById(params.id);
                    setUserId(data.id);
                    setName(data.name);
                    setPhone(data.phone);
                    setEmail(data.email);
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
      <div>
          <AdmNavbar />
          <div className="flex flex-row justify-center min-h-screen items-center gap-4 p-8">
            <div>
                
            </div>
            <div className='description'>
                <p className={`m-0 max-w-[200ch] text-sm text-balance`}>
                    {name}<br/>
                    Id: {pok_id}<br/>
                    Número: {ref_id}<br/>
                    Tipo: {type}
                </p>
                <p className={`m-0 max-w-[100ch] text-sm text-balance`}>
                    Experiência: {exp} <br/>
                    Peso: {weight}<br/>
                    Altura: {height}<br/>
                    Tier: {tier_name}<br/>
                    Experiência mínima requerida: {min_exp}<br/>
                    Limite de experiência: {limit_exp}
                </p>
                <p className={`m-0 max-w-[100ch] text-sm text-balance`}>
                    Preço: {price} <br/>
                    Quantidade: {stock}
                </p>
                <br/>
                <Button onClick={handleDelete} className="bg-[#E7852B] h-full w-[65%] p-2 rounded-lg text-white" variant="contained"> <Link href={"/admin/pokemon/list"}>Deletar Pokemon</Link> </Button>
            </div> 
          </div>
          <Footer />
      </div>
  );
}

export default Product;