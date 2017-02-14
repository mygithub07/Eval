

var nameToSearch

//Function to retrieve names

var createStream = function (){

var lineNumber=0;
var nameLine = require('line-by-line')
lrName = new nameLine('./names.txt');
//lrName = new nameLine('./names-testFile.txt');

var ended = false;
      
 lrName.on('line', function (lineInNameFile) {
    ++lineNumber;
    nameToSearch=lowercase(lineInNameFile);
    FileSearch(nameToSearch);
 });     
 

}


var lowercase=function(str){
     return String(str).toLowerCase();
}

 //Function to search in list file
  
var  FileSearch = function (searchString){

    var LineByLineReader = require('line-by-line'),
    lr = new LineByLineReader('./list.txt');
    //lr = new LineByLineReader('./list-testFile.txt');
    var listlineNumber=0
    var arr = []
    
	lr.on('line', function (lineInListFile) {
        ++listlineNumber;
	    if (lineInListFile===searchString){
            arr.push(listlineNumber);
  
        } 
     });

     lr.on('end', function () {
	        console.log( searchString+ ":" + arr);
     });

} 

var runSearch = createStream();

exports.createStream = createStream;