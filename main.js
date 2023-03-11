//const express = require('express');
// npm init -y

// code .

// npm install express --save

// npm i nodemon -D

//"type":"module", se usa en el scrip de pachage json para trabajra import


import express from 'express';

const app = express();

const port = 1500;


function searchUser(username, password) {
  let userFind = users.find(user => user.username == username && user.password == password);
  return userFind;
}

let users = [
  { username: 'dc', name: 'Diber Cambindo', password: '4' },
  { username: 'ar', name: 'Andres Ricaurte', password: '10' }
]
let myuser
let estado = true;

let rol = 1

function mylogin(req, res, next) {
  if (rol == 1) {
    next();
  }
}


function findUserLogin(password, username) {
  return (req, res, next) => {
    let encontrar = users.find(usr => usr.username == username && usr.password == password)
    if (encontrar != undefined) {
      myuser = encontrar
      next();
    }
  }
};


//Middlwares si es verdadesro no lo deja pasar


// app.use(mylogin)
// app.use((req, res, next) => {
//   if (estado) {
//     next()
//   }
// });

// //otro filtro para usuario y contraseña

// app.use((req, res, next) => {
//   let resultado = searchUser('dc', '4');
//   if (resultado != undefined) {
//     next();

//   } else {
//     next(new Error('usuario y / o contraseña inválidos'));
// //   }
// });

// primer metodo para que el server escuche 
app.listen(port, () => {
  console.log(`server in http://localhost:${port}`)
});

//Endpoinst

app.get('/login', findUserLogin('4', 'dc'), (req, res) => {
  res.send(`has iniciado sesión con el usauario${myuser.username}y el nombre${myuser.name}`)
});

app.get('/login/:username/:password', (req, res, next) => {
  //Desestructurar a req.params
  const { username, password, name } = req.params;
  let uFind = searchUser(username, password);
  if (uFind != undefined) {

    res.send('sesión OK')
    next()
  } else {
    next(new Error('usiario y/o contraseña inválidos...'))
  }
});


app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post('/login', (req, res) => {
  res.send('Got a POST request')
});

app.put('/login', (req, res) => {
  res.send('Got a PUT request at /login')
});

app.delete('/login', (req, res) => {
  res.send('Got a DELETE request at /login')
});

