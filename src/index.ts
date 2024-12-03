import express from 'express';

const app = express();

app.get('/', (req, res) =>{
    res.send('Hellou Word');
})

app.listen(3333, ( ) => {

    console.log("Server is running on port 3333")
} );


