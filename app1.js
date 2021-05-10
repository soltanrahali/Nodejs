// for this program to work install the following:
// npm install prompt-sync
// npm install --save n-readlines

const prompt = require('prompt-sync')();
var name = prompt('Enter the file name');
console.log(`The fileName is ${name}`);
const fs = require('fs')
const content = 'content!'
var fileName= `/Node/${name}`

const lineByLine = require('n-readlines');
const liner = new lineByLine('/Node/myData.txt');
let line
while(line=liner.next()){
    if(line==name){
        console.log('file already exists')
        name = prompt('Enter the file name');
        
    }
}

fs.writeFile(fileName, content, err => {
  if (err) {
    console.error(err)
    return
  }
  console.log("You are awesome!")
})

fs.appendFile('./myData.txt',`${name}\n`, (err) => {
    if(err) throw err;
    return
})

