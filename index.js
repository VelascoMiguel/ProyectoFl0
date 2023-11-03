const express = require('express');
const path = require('node:path');
const cors  = require('cors');

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

app.get('/', (req,res) =>{
    res.send('Que onda papaaaa');
})

app.listen(port, () =>{
    console.log('Listening at port', port)
})
