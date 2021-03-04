import express from 'express';
import morgan from 'morgan';

const app = express();
const PORT = 3000;

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.json({ message: 'API is up and running 🚀!!!'});
});

app.get('/error', (req, res) => {
  throw new Error('oops I made a mistake');
})

app.use((req, res) => {
  res.status(404).json({ message: 'Not found 😢'});
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({ message: `${err.message} 💥` });
})

app.listen(PORT, () => {
  console.log('APP listening on port 3000 🎧!!!');
});