//const express = require('express');
// npm init -y

// code .

// npm install express --save

// npm i nodemon -D

//"type":"module", se usa en el scrip de pachage json para trabajra import


import express from 'express';

const app = express();

const port = 1500;

let users = [
  { username: 'dc', aname: 'Diber Cambindo', password: '4' },
  { username: 'ar', name: 'Andres Ricaurte', password: '10' }
]

function searchUser(username, password) {
  let userFind = users.find(user => user.username == username && user.password == password);
  return userFind;
}


let estado = true;

let rol = 1

function mylogin(req, res, next) {
  if (rol == 1) {
    next();
  }
}

//Middlwares si es verdadesro no lo deja pasar


app.use(mylogin)
app.use((req, res, next) => {
  if (estado) {
    next()
  }
});

//otro filtro para usuario y contraseña

app.use((req, res, next) => {
  let resultado = searchUser('dc', '4');
  if (resultado != undefined) {
    next();

  } else {
    next(new Error('usuario y / o contraseña inválidos'));
  }
});

// primer metodo para que el server escuche 
app.listen(port, () => {
  console.log(`server in http://localhost:${port}`)
});

//Endpoinst

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post('/', (req, res) => {
  res.send('Got a POST request')
});

app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
});

app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
});

