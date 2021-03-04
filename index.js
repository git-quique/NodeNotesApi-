import express from 'express';
import morgan from 'morgan';

const app = express();
const PORT = 3000;

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.json({ message: 'API is up and running 🚀!!!'});
})

app.listen(PORT, () => {
  console.log('APP listening on port 3000 🎧!!!');
})