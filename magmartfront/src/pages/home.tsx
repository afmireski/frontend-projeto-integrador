import React,{ useState } from 'react';
import styles from '../styles/Home.module.css';
import "../app/globals.css";
import Image from 'next/image'
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Footer from '../components/Footer';

function Home() {
  return (
      <div>
          <Navbar />
          <div className="flex flex-row justify-center items-center gap-4 p-8">
              <Card title="Título do Card" description="Descrição do card. Aqui você pode colocar mais informações sobre o conteúdo." />
              <Card title="Outro Título" description="Descrição do card. Mais informações sobre o conteúdo." />
              <Card title="Um terceiro título" description="Descrição do card. Mais informações sobre o conteúdo." />
          </div>
          <Footer />
      </div>
  );
}

export default Home;
