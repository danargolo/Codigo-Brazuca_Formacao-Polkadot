import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// app.get('/api/cryptocurrencies', async (req, res) => { 
//   console.log('API CMC')
    
//     try {
//         const response = await fetch('https://pro-api.coinmarketcap.com/v1/fiat/map', {
//           method: 'GET',
//           headers: {
//               'Accept': 'application/json',
//               'X-CMC_PRO_API_KEY': process.env.CMC_API_KEY
//           }
//         });
//         const data = await response.json();
//         res.json(data);
//     } catch (error) {
//         res.status(500).json({ error: 'Erro ao buscar dados da API.' });
//     }
// });

app.post('/dot-exchange', async (req, res) => {
    console.log("chama server", req.body);
    
    const { fiat } = req.body;
    console.log(fiat);
     

    if (!fiat) {
      return res.status(400).json({ error: 'A moeda fiat é necessária' });
    }
  
    try {
      const response = await fetch(`https://pro-api.coinmarketcap.com/v2/tools/price-conversion?amount=1&id=6636&convert=${fiat}`, {
        method: 'GET',
        headers: {
          'X-CMC_PRO_API_KEY': process.env.CMC_API_KEY,
          'Content-Type': 'application/json',
        },
      });
      console.log('chamou cmc');
      
  
      const data = await response.json();
      console.log(data);
      
  
      if (!response.ok) {
        return res.status(response.status).json({ error: data.status.error_message });
      }
  
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar o valor da Polkadot' });
    }
  });

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});