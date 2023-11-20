const express = require('express');
const app =  express();
const cors = require('cors');
const fileroute  = require('./src/routes');


app.use(cors()); 
app.use(express.json());
app.use('/',fileroute);



app.listen('3000',()=>{
    console.log('server running on port 3000');
});









