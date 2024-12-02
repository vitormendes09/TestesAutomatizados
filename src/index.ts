import express from 'express';

const app = express();

app.get('/', (req, res) =>{
    res.send('Hellou Word');
})

app.listen(3333);