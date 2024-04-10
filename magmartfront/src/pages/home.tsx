
import React,{ useState } from 'react';
import styles from '../styles/Home.module.css';
import "../app/globals.css";
import Image from 'next/image'
import { useRouter } from 'next/router';
import Nav from './header';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica para autenticar o usuário
    console.log('Usuário:', username);
    console.log('Senha:', password);
  };

  return (
    <div>
      <Nav></Nav>
      <div className={styles.containerHome}>

      </div>
    </div>
  );
}
