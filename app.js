const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`Hello World from Port ${port}`);
});

app.get('/myName', (req, res) => {
  const name = 'Fernanda'; // Reemplaza 'Tu Nombre' con tu nombre
  res.send(`¡Hola Mundo! Mi nombre es ${name}`);
});

app.listen(port, () => {
  console.info(`Database is running on port ${port}`);
});
