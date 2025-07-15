const express = require('express');
const cors = require('cors');
const fs = require('fs'); 

const app = express();
const PORT = 3001; 


app.use(cors()); 
app.use(express.json()); 


app.get('/api/products', (req, res) => {
  fs.readFile('db.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Erro ao ler o banco de dados.');
      return;
    }
    res.json(JSON.parse(data).products);
  });
});


app.post('/api/orders', (req, res) => {
  const order = req.body;


  console.log('--- NOVO PEDIDO RECEBIDO ---');
  console.log('Itens:', order.items);
  console.log('Total:', `$${order.total.toFixed(2)}`);
  console.log('---------------------------');

  res.status(201).json({ message: 'Pedido criado com sucesso!', order: order });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor backend rodando em http://localhost:${PORT}`);
});

