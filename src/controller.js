
const csv = require('csv-parser')
const fs = require('fs')
const results = [];

const pdfparse = require('pdf-parse')
const pdffile =  fs.readFileSync('testpdf.pdf')

const WordExtractor = require("word-extractor"); 
const extractor = new WordExtractor();
const extracted = extractor.extract("Resume.docx");

var XLSX = require("xlsx");
var workbook = XLSX.readFile('test.xlsx');


const getintialdata = (req, res) => {
    const responseText = `
        <p>WELCOME TO THE DATA EXTRACTOR</p>
        <p>To extract the word file, give /getword</p>
        <p>To extract the excel file, give /getexcel</p>
        <p>To get the CSV file, give /getcsv</p>
        <p>To get the PDF file, give /getpdf</p>
    `;

    res.status(200).send(responseText);
}


const getcsv = (req,res) =>{
    fs.createReadStream('Data.csv')
    .pipe(csv({}))
    .on('data' , (data) => results.push(data))
    .on('end',()=>{
        res.status(200).send(results);
        console.log("csv data sent successfully");
    })
}

const getpdf = (req, res) => {
    pdfparse(pdffile).then(function(data) {
        const responseData = {
            info: data.info,
            numpages: data.numpages,
            text: data.text
        };

        res.status(200).send(responseData);
        console.log("pdf data sent successfully");
    })
}


const getword = (req,res) =>{

    extracted.then(function(doc)
    {
        const getword = {
            word : doc.getBody()
        }
        res.status(200).send(getword);
        console.log("word data sent successfully");
    });
}

const getexcel = (req,res) =>{

    var worksheet = workbook.Sheets[workbook.SheetNames[0]];
    var data = XLSX.utils.sheet_to_json(worksheet);
    res.status(200).send(data);
    console.log("excel data sent successfully");
}


module.exports = {
    getcsv,
    getword,
    getexcel,
    getpdf,
    getintialdata
}
