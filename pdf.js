const fs = require('fs')
const pdfparse = require('pdf-parse')
const pdffile =  fs.readFileSync('testpdf.pdf')

pdfparse(pdffile).then(function(data){
    console.log(data.numpages)
    console.log(data.info)
    console.log(data.text)
})