// components/Cadastro.js

import React,{ useState } from 'react';
import styles from '../styles/Cadastro.module.css';
import "../app/globals.css";
import Image from 'next/image'
import axios from 'axios'; // Importe o Axios para fazer requisições HTTP
import { useRouter } from 'next/router';

export default function Cadastrar() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const router = useRouter();
  
    const handleCadastro = async (e) => {
      e.preventDefault();
  
      // Verifique se as senhas coincidem
      if (password !== confirmPassword) {
        console.error('As senhas não coincidem');
        return;
      }


  
      // Dados a serem enviados para o backend
      const userData = {
        name: name,
        email: email,
        phone: `+55`+phone,
        birth_date: new Date(birthDate),
        password: password,
        confirm_password: confirmPassword,
      };
  
      try {
        // Faça uma requisição POST para a rota de criação de usuário no backend
        const response = await axios.post(`${process.env.API_URL}/users/new`, userData);
  
        // Se a requisição for bem-sucedida, redirecione para a página de login
        console.log('Usuário cadastrado com sucesso:', response.data);
        router.push('/login'); // Redirecione para a página de login
      } catch (error) {
        // Se ocorrer um erro, lide com ele (exiba uma mensagem de erro, etc.)
        console.error('Erro ao cadastrar usuário:', error);
      }
    };
  
  

  return (
    <div className={styles.containerLogin}>
      <form onSubmit={handleCadastro} className={styles.form} >
        <div className='flex flex-col h-full w-10/12 justify-center items-center'>
          <div className='flex flex-col h-full w-full justify-center items-center p-3'>
            <h2 className='text-2xl font-bold text-white'>CADASTRO</h2>
          </div>
          <div className='flex flex-col h-full w-full justify-center items-center'>
            <div className='flex flex-row h-full w-full  m-2 justify-center items-center'>
              <div className='flex flex-col h-full w-1/2 justify-center items-center'>
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
                      className={styles.myinput}
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Telefone"
                    />
                  </div>
                </div>
                <div className='flex flex-row h-full w-full justify-center items-center'>
                  <div className="">
                    <input
                      className="w-[13.5rem] p-1 mb-4 border border-gray-300 rounded-lg opacity-50 text-black"
                      type="date"
                      id="Nascimento"
                      value={birthDate}
                      onChange={(e) => setBirthDate(e.target.value)}
                      placeholder="Data de Nascimento"
                    />
                  </div>
                </div>
                <div className='flex flex-row h-full w-full justify-center items-center'>
                  <div className="">
                    <input
                      className={styles.myinput}
                      type="password"
                      id="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirmar Senha"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center h-full w-full'>
            <div className='flex flex-col justify-center items-center h-full w-full'>
              <button className="bg-[#E7852B] h-full w-[65%] p-2 rounded-lg text-white" type="submit">Entrar</button>
            </div>
            <div className='flex flex-col justify-center items-center h-full w-full mt-5'>
              <button className="bg-[#ffffff] h-full w-10 p-2 rounded-full text-white" type="submit">
                <Image src="/google-37.png" alt="Picture of the author" width={30} height={30} />
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
