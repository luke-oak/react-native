const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;
const token = 'RGAPI-8c40758c-1c0b-46c0-84cb-c89ae3c4aa48';

app.use(cors());

app.use(express.json());

app.get('/api/riot/summoner/:name', async (req, res) => {
  try {
    const { name } = req.params;

    const response = await axios.get(
      `https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}`,
      {
        headers: {
          'X-Riot-Token': token,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter dados do jogador' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor intermediário rodando em http://localhost:${PORT}`);
});
