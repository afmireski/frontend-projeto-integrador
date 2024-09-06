"use client";
import GetAllPokemon from '@/app/api/getAllPokemon';
import { PokemonData } from '@/components/myTypes/PokemonTypes';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import CreateReward from '@/app/api/createReward';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';


export default function RewardForm({ prize_type }) {
  const [reward, setReward] = useState({
    pokemon: {
      id: '',
      name: '',
      tier_id: 0,
    },
    description: '',
    experience_required: '',
    prize_type: prize_type,
  });
  const [pokemons, setPokemons] = useState<PokemonData[]>([]);
  const [pokemonsGroupedByTier, setPokemonsGroupedByTier] = useState<Any[]>([]);

  useEffect(() => {
    async function getdados() {
      try {
        await GetAllPokemon().then((response) => {
          setPokemons(response);
          setPokemonsGroupedByTier(response.reduce((acc, pokemon) => {
              const tierName = pokemon.tier.name;
              if (!acc[tierName]) {
                  acc[tierName] = [];
              }
              acc[tierName].push(pokemon);
              return acc;
          }, {}));
        });
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

  const handleSelectChange = (e) => {
    const { value } = e.target;
    if (!value) return;

    const [pokemon] = pokemons.filter((p) => p.id === value);
    setReward({ ...reward, pokemon: {
      id: value,
      name: pokemon.name,
      tier_id: pokemon.tier.id,
    }});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("parameters: ", reward);
    console.log("prize type: ", prize_type);
    await CreateReward({
      tier_id: reward.pokemon.tier_id,
      name: reward.pokemon.name,
      description: reward.description,
      experience_required: Number(reward.experience_required),
      prize_type,
      prize: { "pokemon_id": reward.pokemon.id },
    });
  };

  if (prize_type === "pokemon") {
  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl required sx={{ minWidth: 250 }}>
            <InputLabel id="demo-simple-select-required-label">Pokémon</InputLabel>
            <Select native defaultValue="" id="grouped-native-select" label="Grouping" onChange={handleSelectChange}>
                <option aria-label="None" value="" />
                {Object.keys(pokemonsGroupedByTier).map((tierName) => (
                    <optgroup key={tierName} label={tierName}>
                        {pokemonsGroupedByTier[tierName].map((pokemon) => (
                            <option key={pokemon.id} value={pokemon.id}>
                                {pokemon.name}
                            </option>
                        ))}
                    </optgroup>
                ))}
            </Select>
          </FormControl>
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
            label="Experiência Necessária"
            name="experience_required"
            type="number"
            variant="outlined"
            value={reward.experience_required}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">🧪</InputAdornment>
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
