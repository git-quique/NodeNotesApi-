import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import routes from './routes/index.js';

const app = express();
const PORT = 3000;

app.use(morgan('dev'));
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(routes);

app.get('/error', (req, res) => {
  throw new Error('oops I made a mistake');
});

app.use((req, res) => {
  res.status(404).json({ message: 'Not found 😢'});
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({ message: `${err.message} 💥` });
});

app.listen(PORT, () => {
  console.log('APP listening on port 3000 🎧!!!');
});