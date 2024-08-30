import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import RewardForm from '@/components/RewardForm';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

export default function Rewards() {
  return (
    <div>
      <Navbar />
      <Box sx={{ backgroundColor: '#FF7043', minHeight: '100vh', padding: 4 }}>
        <Container maxWidth="sm">
          <Paper 
            elevation={3} 
            sx={{ 
              padding: 4, 
              backgroundColor: '#FFE0B2',  // Cor de fundo do formulário mais clara
              borderRadius: '12px' 
            }}
          >
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
