//const express = require('express');
// npm init -y

// code .

// npm install express --save

// npm i nodemon -D

 //"type":"module", se usa en el scrip de pachage json para trabajra import


import express from 'express';

const app = express();

const port = 1500;


// primer metodo para que el server escuche 
app.listen(port, () => {
  console.log(`server in http://localhost:${port}`)
})

// Endpoinst

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  res.send('Got a POST request')
})

app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})

app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
})

