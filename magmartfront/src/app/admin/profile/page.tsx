"use client";

// Arquivo Product.js
import React,{ useEffect, useState } from 'react';
import styles from '@/styles/Product.module.css';
import "@/app/globals.css";
import Image from 'next/image'
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GetPokemon from '@/APIs/getPokemon';
import addToCart from '@/app/api/addToCart';
import Cookies from 'js-cookie';
import GetUserByCookie from '@/app/api/getUserByCookie'

function AdminProfile() {
    const [user_id, setUserId] = useState('');
    const [name, setName] = useState('');
    const [birth, setBirth] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    let data;
    useEffect(() => {
        async function getdados() {
            try {
                data = await GetUserByCookie();
                setBirth(data.birth_date)
                setUserId(data.id)
                setName(data.name)
                setPhone(data.phone)
                setEmail(data.email)
                console.log(data)
            } catch {
                console.log('erro')
            }
        }

        getdados();
    }, []);

  return (
      <div>
          <Navbar />
          <div className="flex flex-row justify-center items-center gap-4 p-8">
            <p className={`m-0 max-w-[200ch] text-sm text-balance`}>
                    {name}<br/>
                    Id: {user_id}<br />
                    Data de nascimento: {birth}<br />
                    Número: {phone}<br/>
                    Email: {email}<br/>
                </p>
          </div>
          <Footer />
      </div>
  );
}

export default AdminProfile;
