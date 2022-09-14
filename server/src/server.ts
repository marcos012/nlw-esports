import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({ name: 'dale', age: 30 })
});


app.listen(3333);
