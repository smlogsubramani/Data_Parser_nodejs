// WORD FILE EXTRACTOR TEST 

const WordExtractor = require("word-extractor"); 
const extractor = new WordExtractor();
const extracted = extractor.extract("Resume.docx");

extracted.then(function(doc)
 {
     console.log(doc.getBody());
 }
 );

 //need to add router file 