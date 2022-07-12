const fs = require('fs');
const {stream, Transform } = require('stream');
const pipe = require('pipe')

const reverse = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.reverse());
    },
  });
process.stdin.pipe(reverse).pipe(process.stdout);
