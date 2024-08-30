"use client";

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import RewardForm from '@/components/RewardForm';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import * as React from 'react';

export default function Rewards() {
  const initialTabSelected = 0;  
  const [value, setValue] = React.useState(initialTabSelected);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Navbar />
      <Box sx={{ backgroundColor: '#FF7043', minHeight: '100vh', padding: 4 }}>
        <Container maxWidth="sm">
          <Paper 
            elevation={3} 
            sx={{ 
              padding: 4, 
              backgroundColor: '#FFE0B2',
              borderRadius: '12px' 
            }}
          >
            <div className="grid justify-items-center">
              <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
                <Tab label="Pokémon" />
                <Tab label="Futuras" disabled />
              </Tabs>
            </div>
            <Box sx={{ mt: 4 }}>
              <RewardForm />
            </Box>
          </Paper>
        </Container>
      </Box>
      <Footer />
    </div>
  );
}
