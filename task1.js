import { pipeline, Transform } from 'stream';

const reverse = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.reverse() + '\n');
  },
});
try {
  pipeline(
    process.stdin,
    reverse,
    process.stdout,
    err => console.log(err)
  )
}
catch (err) {
  console.log(err);
}
