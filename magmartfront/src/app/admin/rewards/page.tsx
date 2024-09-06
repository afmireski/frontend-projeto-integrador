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
  const mapPrizeTypes = ["pokemon", ""];

  const [tab, setTab] = React.useState(initialTabSelected);
  const [prizeType, setPrizeType] = React.useState(mapPrizeTypes[0]);
  
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
    setPrizeType(mapPrizeTypes[newValue]);
  };

  return (
    <div>
      <Navbar />
      <Box sx={{ backgroundColor: '#86BBD8', minHeight: '100vh', padding: 4 }}>
        <Container maxWidth="sm">
          <Paper 
            elevation={3} 
            sx={{ 
              padding: 4, 
              backgroundColor: '#cbf3f0',
              borderRadius: '12px' 
            }}
          >
            <div className="grid justify-items-center">
              <Tabs value={tab} onChange={handleTabChange} aria-label="disabled tabs example">
                <Tab label="Pokémon" />
                <Tab label="Outros"  />
              </Tabs>
            </div>
            <Box sx={{ mt: 4 }}>
              <RewardForm prize_type={prizeType} />
            </Box>
          </Paper>
        </Container>
      </Box>
      <Footer />
    </div>
  );
}
