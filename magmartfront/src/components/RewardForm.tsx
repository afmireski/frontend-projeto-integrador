"use client";
import GetAllPokemon from '@/app/api/getAllPokemon';
import { PokemonData } from '@/components/myTypes/PokemonTypes';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';


export default function RewardForm({ prizeType }) {
  const [reward, setReward] = useState({
    name: '',
    description: '',
    experienceRequired: '',
    prizeType: prizeType
  });
  const [pokemons, setPokemons] = useState<PokemonData[]>([]);

  useEffect(() => {
    async function getdados() {
      try {
        await GetAllPokemon().then((response) => setPokemons(response));
      } catch (err) {
        console.log(err);
        throw new Error;
      }
    }
    getdados();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReward({ ...reward, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Recompensa cadastrada:', reward);
  };

  if (prizeType === "pokemon") {
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
            InputProps={{
              classes: {
                input: "font-mono",
              },
            }}
            value={reward.name}
            onChange={handleChange}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#F26419',
                },
                '&:hover fieldset': {
                  borderColor: '#FB5607',
                },
              },
              '& label.Mui-focused': {
                color: '#FB5607',
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
            InputProps={{
              classes: {
                input: "font-mono",
              },
            }}
            value={reward.description}
            onChange={handleChange}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#F26419',
                },
                '&:hover fieldset': {
                  borderColor: '#FB5607',
                },
              },
              '& label.Mui-focused': {
                color: '#D84315',
              },
            }}
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            required
            fullWidth
            label="Experiência"
            name="experienceRequired"
            type="number"
            variant="outlined"
            value={reward.experienceRequired}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">🎯</InputAdornment>
              ),
              classes: {
                input: "font-mono",
              },
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#F26419',
                },
                '&:hover fieldset': {
                  borderColor: '#FB5607',
                },
              },
              '& label.Mui-focused': {
                color: '#D84315',
              },
            }}
          />
        </Grid>
        <Grid item xs={7}>
          <Select>
            <MenuItem value="">
              <img
                src={`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format`}
                alt="teste"
                loading="lazy"
                style={{ width: "2em" }}
              /> Teste
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12}>
          <Button
            className="font-mono"
            type="submit"
            fullWidth
            variant="contained"
            sx={{ 
              height: '50px', 
              borderRadius: '8px',
              fontWeight: '700',
              color: '#ffffff',
              backgroundColor: '#F26419 !important',
              ':hover': {
                backgroundColor: '#FB5607',
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
}
