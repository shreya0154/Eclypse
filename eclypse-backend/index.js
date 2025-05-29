
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/api/cart', (req, res) => {
  res.json([
    { id: 1, name: 'Shoes', quantity: 2, price: 4999 },
    { id: 2, name: 'T-shirt', quantity: 1, price: 599 },
    { id: 3, name: 'Denim', quantity: 1, price: 1299 },
  ]);
});

app.listen(5000, () => console.log('Server running on port 5000'));
