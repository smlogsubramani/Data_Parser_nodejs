
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

const sizeOf = require('image-size');


const getintialdata = (req, res) => {
    const responseText = `
        <h1>WELCOME TO THE DATA EXTRACTOR</h1>
        <p>To extract the word file, give /getword</p>
        <p>To extract the excel file, give /getexcel</p>
        <p>To get the CSV file, give /getcsv</p>
        <p>To get the PDF file, give /getpdf</p>
        <p>To get the Image Description, give /getimage</p>
        <p>To get the zipfiles, give /getzip </p>
    `;
    
    res.status(200).send(responseText);
}


const getcsv = (req,res) =>{
    fs.createReadStream('Data.csv')
    .pipe(csv({}))
    .on('data' , (data) => results.push(data))
    .on('end',()=>{
        const jsondata = JSON.stringify(results);
        res.status(200).send(jsondata);
        console.log("csv data sent successfully");
    })
    .on('error', (error) => {
        console.error('Error reading CSV:', error);
        res.status(500).send('Error reading CSV');
      });  
}

const getpdf = (req, res) => {
    pdfparse(pdffile).then(function(data) {
        const responseData = {
            info: data.info,
            numpages: data.numpages,
            text: data.text
        };
        const jsondata = JSON.stringify(responseData);
        res.status(200).send(jsondata);
        console.log("pdf data sent successfully");
    })
    .then('error', (error) => {
        console.error('Error reading pdf:', error);
        res.status(500).send('Error reading pdf');
    });
}


const getword = (req,res) =>{

    extracted.then(function(doc)
    {
        const getword = {
            word : doc.getBody()
        }
        const jsondata = JSON.stringify(getword)
        res.status(200).send(jsondata);
        console.log("word data sent successfully");
    })
    .then('error', (error) => {
        console.error('Error reading word:', error);
        res.status(500).send('Error reading word');
    });
}

const getexcel = (req,res) =>{
    try{
    var worksheet = workbook.Sheets[workbook.SheetNames[0]];
    var data = XLSX.utils.sheet_to_json(worksheet);
    const jsondata = JSON.stringify(data)
    res.status(200).send(jsondata);
    console.log("excel data sent successfully");
    }
    catch(error){
        console.log("The error is : ",error);
        res.status(500).send("Error reading the excel file");
    }
}


const getImgdescrption = (req,res) =>{

    try {
        const dimensions = sizeOf('testimage.png');
        res.status(200).send(dimensions)
        console.log("Image descriptions sent successfully");
      } catch (error) {
        console.error('Error:', error);
        res.status(500).send("Error reading the image");
      }

}


const getzip = (req,res) =>{
const AdmZip = require('adm-zip');
const zipFilePath = 'test.zip';

try {
    const zip = new AdmZip(zipFilePath);
    const zipEntries = zip.getEntries();

    const fileNames = zipEntries
      .filter((entry) => !entry.isDirectory)
      .map((entry) => entry.entryName);

    if (fileNames.length > 0) {
      res.status(200).json({ files: fileNames });
    } else {
      res.status(200).send('No files found in the zip.');
    }
    }
    catch (error){
    console.error('Error:', error);
    res.status(500).send('Error reading zip file.');
    }
}


module.exports = {
    getcsv,
    getword,
    getexcel,
    getpdf,
    getintialdata,
    getImgdescrption,
    getzip
}
