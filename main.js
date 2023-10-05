// CSV FILE EXTRACTOR TEST.

const csv = require('csv-parser')
const fs = require('fs')

const results = [];

fs.createReadStream('Data.csv')
.pipe(csv({}))
.on('data' , (data) => results.push(data))
.on('end',()=>{
    console.log(results);
})










