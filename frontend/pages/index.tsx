import { Box } from '@mui/material'
import type { NextPage } from 'next'
import Lista from '../src/components/Lista/Lista'


const Home: NextPage = () => {
  const professores: Professor[] = [
    {
      id: 1,
      nome: "Professor 1",
      foto: "https://github.com/borgesbsb",
      descricao: "Descrição do professor 1",
      valor_hora: 200
    },
    {
      id: 2,
      nome: "Professor 1",
      foto: "https://github.com/borgesbsb",
      descricao: "Descrição do professor 2",
      valor_hora: 200
    },
    {
      id: 3,
      nome: "Professor 1",
      foto: "https://github.com/borgesbsb",
      descricao: "Descrição do professor 3",
      valor_hora: 200
    },
    {
      id: 4,
      nome: "Professor 1",
      foto: "https://github.com/borgesbsb",
      descricao: "Descrição do professor 4",
      valor_hora: 200
    }
  ]
    
  

  return (
    <Box sx={{backgroundColor: 'secondary.main' }} >
        <Lista></Lista>
    </Box>
      

 
    
  )
}

export default Home
