import fs from 'fs';
import util from 'util';
import csv from 'csvtojson';


csv().fromFile('./csv/data.csv').then((jsonObj) => {

    if(!Array.isArray(jsonObj)) throw Error('Operation failed! Data is not array!');

    const newData = jsonObj.map((e) => {
        const newObj = {};
        for (let key in e) {
            if (key !== 'amount') newObj[key] = e[key];
        }
        return newObj;
    });
    for (let obj of newData) {
        fs.appendFile('./data.txt', util.inspect(obj) + "\n", (err) => {
            if (err) {
                throw new Error('Operation failed!');
            }
        });
    }
});
