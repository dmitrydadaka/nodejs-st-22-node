import { Transform } from 'stream';

const reverse = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.reverse() + '\n');
  },
});
try {
  process.stdin.pipe(reverse).pipe(process.stdout);
}
catch (err) {
  console.log(err);
}
