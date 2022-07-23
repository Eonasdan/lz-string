//import { compress, decompress } from './dist/lz-string.esm' //rollup gets cranky if "type: module" is set
const { compress, decompress } = require('../dist/lz-string');

const compressed = compress('hello world');
console.log(compressed)
const decompressed = decompress(compressed);
console.log(decompressed)
