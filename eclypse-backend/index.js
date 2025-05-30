
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path')

const app = express();
app.use(cors());
app.use(bodyParser.json());
require('dotenv').config() 

const PORT = process.env.PORT || 5000;



const cart = [
    { id: 1, name: 'Nike Court Royale Men\'s Sneakers', quantity: 2, price: 4999 },
    { id: 2, name: 'The Souled Store Women\'s Solid Round Neck Oversized T-Shirt', quantity: 1, price: 599 },
    { id: 3, name: 'Levi\'s Women\'s Faded Denim Jacket', quantity: 1, price: 1999 },
  ]



// GET cart
app.get('/api/cart', (req, res) => {
  console.log("GET /api/cart");
  res.json(cart);
});

// POST to add item to cart
app.post('/api/cart', (req, res) => {
  const item = req.body;
  console.log("POST /api/cart", item);

  // Check if item already in cart (by id), if so, increase quantity
  const existing = cart.find(i => i.id === item.id);
  if (existing) {
    existing.quantity += item.quantity;
  } else {
    cart.push(item);
  }

  res.status(201).json({ message: "Item added to cart", cart });
});



app.listen(PORT, () => console.log('Server running on port 5000'));
