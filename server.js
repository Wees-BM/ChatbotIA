const express = require('express');

const sequelize = require('./sequelize-config.js');
const init = require('C:\Users\Weslley\Desktop\chatbotia\db\init.js');

const app = express();
const port = 3000;


app.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await sequelize.query('SELECT * FROM usuarios');
    res.json(usuarios);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }

});

app.post('/usuarios', async (req, res) => {
  try {
    const usuarios = await sequelize.query('INSERT FROM usuarios');
    res.json(usuarios);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }

});

app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
