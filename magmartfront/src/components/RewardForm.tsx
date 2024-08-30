// components/RewardForm.js
"use client";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function RewardForm() {
  const [reward, setReward] = useState({
    name: '',
    description: '',
    experienceRequired: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReward({ ...reward, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Recompensa cadastrada:', reward);
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Nome"
            name="name"
            variant="outlined"
            value={reward.name}
            onChange={handleChange}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#D84315',
                },
                '&:hover fieldset': {
                  borderColor: '#BF360C',
                },
              },
              '& label.Mui-focused': {
                color: '#D84315',
              },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Descrição"
            name="description"
            multiline
            rows={3}
            variant="outlined"
            value={reward.description}
            onChange={handleChange}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#D84315',
                },
                '&:hover fieldset': {
                  borderColor: '#BF360C',
                },
              },
              '& label.Mui-focused': {
                color: '#D84315',
              },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Experiência necessária"
            name="experienceRequired"
            type="number"
            variant="outlined"
            value={reward.experienceRequired}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">🎯</InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#D84315',
                },
                '&:hover fieldset': {
                  borderColor: '#BF360C',
                },
              },
              '& label.Mui-focused': {
                color: '#D84315',
              },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ 
              height: '50px', 
              borderRadius: '8px', 
              backgroundColor: '#D84315',
              '&:hover': {
                backgroundColor: '#BF360C',
              },
            }}
          >
            Cadastrar Recompensa
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
