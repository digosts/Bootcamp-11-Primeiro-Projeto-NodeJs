import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.json({message:'Hello mlkin'});
})

app.listen(3333, () => {
  console.log('✌ top mlkin');
});