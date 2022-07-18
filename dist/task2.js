"use strict";

var _fs = _interopRequireWildcard(require("fs"));

var _csvtojson = _interopRequireDefault(require("csvtojson"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
const stream = (0, _fs.createWriteStream)('data.txt');
(0, _csvtojson.default)(csvReadSettings).fromFile('./csv/data.csv').subscribe((obj, line) => {
  stream.write(JSON.stringify(obj) + '\n');
});