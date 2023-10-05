// EXCEL FILE EXTRACTOR TEST 

var XLSX = require("xlsx");
var workbook = XLSX.readFile('test.xlsx');

var worksheet = workbook.Sheets[workbook.SheetNames[0]];

var data = XLSX.utils.sheet_to_json(worksheet);

console.log(data);