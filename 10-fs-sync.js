


const { readFileSync , writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')


writeFileSync(
    './content/ result-sync.txt',
     `this is combination of two files first is ${first} and second is ${second}`,
      {flag:'a'})





console.log(first, second);