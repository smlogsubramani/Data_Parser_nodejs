const express = require('express');
const app =  express();
const fileroute  = require('./src/routes');

app.use('/',fileroute);
app.use(express.json());

app.listen('3000',()=>{
    console.log('server running on port 3000');
});









