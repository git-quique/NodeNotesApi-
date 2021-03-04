import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.json({ message: 'API is up and running 🚀!!!'});
})

app.listen(PORT)