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

function Profile() {
    const [pok_id, setPokId] = useState('');
    const [ref_id, setRefId] = useState(1);
    const [name, setName] = useState('');
    const [weight, setWeight] = useState(1);
    let data;
    useEffect(() => {
        async function getdados() {
            try {
                //setPokId(queryString);
                //if (typeof router.query.data === 'string') {
                data = GetUserByCookie();
                //}
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
            Placeholder
          </div>
          <Footer />
      </div>
  );
}

export default Profile;
