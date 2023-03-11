//const express = require('express');

import express from 'express';

const app = express();

const port = 1500;

app.listen(port,()=>{
    console.log(`server in http://localhost:${port}`)
})

