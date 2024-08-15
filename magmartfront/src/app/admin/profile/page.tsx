"use client";

// Arquivo Product.js
import React,{ useEffect, useState } from 'react';
import styles from '@/styles/Profile.module.css';
import "@/app/globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GetUserByCookie from '@/app/api/getUserByCookie'
import {Card, Avatar, CardContent, Typography, CircularProgress, Box, Divider, ThemeProvider} from '@mui/material';
import { UserData } from '@/components/myTypes/UserTypes';

function AdminProfile() {
    const [name, setName] = useState('');
    const [birth, setBirth] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [experience, setExperience] = useState(0);
    const [minimal_experience, setMinExp] = useState(0);
    const [limit_experience, setMaxExp] = useState(0);
    const [tier_name, setTierName] = useState('');
    const progress = ((experience - minimal_experience) / (limit_experience - minimal_experience)) * 100;

    let data: UserData;
    let formatedDate;
    const formatPhoneNumber = (phone: string): string => {
        // Remove o código do país (+55) e outros caracteres que não sejam dígitos
        const cleaned = phone.replace(/^(\+55)/, '').replace(/\D/g, '');
        const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
      
        if (match) {
          return `(${match[1]}) ${match[2]}-${match[3]}`;
        }
      
        return phone; // Retorna o número original se não puder formatar
      };
    //const formattedPhone = formatPhoneNumber(phone);
    useEffect(() => {
        async function getdados() {
            try {
                data = await GetUserByCookie();

                console.log("Data ->, \n", data);
                formatedDate = new Date(data.birth_date).toLocaleDateString("pt-BR")
                console.log("FD ->, ", formatedDate);
                setBirth(formatedDate)
                setName(data.name)
                setPhone(formatPhoneNumber(data.phone))
                setEmail(data.email)
                setExperience(data.status.experience)
                setMinExp(data.status.tiers.minimal_experience)
                setMaxExp(data.status.tiers.limit_experience)
                setTierName(data.status.tiers.name)
                console.log(data)
            } catch(e: any) {
                console.log(e.message)
            }
        }

        getdados();
    }, []);

  return (
      <div className={styles.containerProfile}>
          <Navbar />
          <div className="grid justify-center items-center gap-4 p-8">
          <Card sx={{ maxWidth: 600, padding: 4 }}>
            <CardContent>
            <div className="flex flex-row justify-center items-center gap-4 p-8 scale-125">
                <div>
                <Avatar sx={{ width: 56, height: 56, mb: 2 }}>
                {name.charAt(0).toUpperCase()}
                </Avatar>
                <Typography variant="h5" component="div">
                {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {phone}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Nascimento: {birth}
                </Typography>
                </div>
                <Divider orientation="vertical" flexItem />
                
                <div className="flex-column justify-center items-center gap-4 p-2">
                    <Box sx={{ position: 'relative', display: 'inline-flex', ml: 2 }}>
                        <CircularProgress variant="determinate" value={progress} size={56} color="warning" />
                        <Box
                        sx={{
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            position: 'absolute',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        >
                        <Typography variant="caption" component="div" color="text.secondary">
                            {`${Math.round(progress)}%`}
                        </Typography>
                        </Box>
                    </Box>
                    
                <Typography variant="h5" component="div">
                {experience}/{limit_experience}
                </Typography>
                <ThemeProvider
                    theme={{
                        palette: {
                        primary: {
                            main: '#FFD54F',
                            dark: '#FFCA28',
                        },
                        },
                    }}
                    >
                    <Box
                        display="flex"
                        alignItems="center"
                        gap={4}
                        p={2}           
                        sx={{
                        width: 100,
                        height: 30,
                        borderRadius: 1,
                        bgcolor: 'primary.main',
                        '&:hover': {
                            bgcolor: 'primary.dark',
                        },
                        }}
                    >
                        {tier_name}
                    </Box>
                </ThemeProvider>
                </div>
                </div>
            </CardContent>
            </Card>
                           
          </div>
          <div className={styles.copyright}>
            <Footer />
          </div>
          
      </div>
  );
}

export default AdminProfile;
