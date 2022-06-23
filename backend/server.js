import express from 'express';
import datos from './data.js';

const app = express();

app.get('/api/productos', (req, res) => {
  res.send(datos.tipoProductos);
});

const port = process.env.port || 5000;

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
