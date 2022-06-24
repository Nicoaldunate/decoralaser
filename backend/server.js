import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/productos', (req, res) => {
  res.send(data.productos);
});
app.get('/api/productos/slug/:slug', (req, res) => {
  const producto = data.productos.find((x) => x.slug === req.params.slug);
  if (producto) {
    res.send(producto);
  } else {
    res.status(404).send({ message: 'producto no encontrado' });
  }
});

const port = process.env.port || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
