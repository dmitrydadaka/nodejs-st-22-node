const { fs, createWriteStream } = require('fs');
const  csv = require('csvtojson');

const csvReadSettings = {
    noheader: false,
    headers: ['book', 'author', 'amount', 'price'],
    delimiter: 'auto',
    trim: true,
    ignoreEmpty: true,
    colParser: {
      amount: 'omit',
      price: function (item) {
        return Number(item.replace(',', '.'));
      }
    },
    checkType: true
  }; 

const stream = createWriteStream('data.txt');

csv(csvReadSettings).fromFile('./csv/data.csv').subscribe((obj, line) => {
    stream.write(JSON.stringify(obj)+'\n'),
    err => console.log(err)
});