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
import { UserData } from '@/components/myTypes/UserTypes';

function Profile() {
    const [name, setName] = useState('');
    const [birth, setBirth] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    let data: UserData;
    useEffect(() => {
        async function getdados() {
            try {
                data = await GetUserByCookie();

                console.log("Data ->, \n", data);
                
                setBirth(data.birth_date)
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
                    Nome: {name}<br/>
                    Data de nascimento: {birth}<br />
                    Número: {phone}<br/>
                    Email: {email}<br/>
                </p>
          </div>
          <Footer />
      </div>
  );
}

export default Profile;
