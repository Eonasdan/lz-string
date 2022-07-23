# String Compression

I forked [matschik version](https://github.com/matschik/lz-string) which is a port of the original [lz-string](https://github.com/pieroxy/lz-string).

I reduced the redundant code and used rollup to produce both an ES6+ and UMD scripts

## Install

```bash
$ npm install @eonasdan/lz-string
```

## Example

```js
import { compress, decompress } from '@eonasdan/lz-string'

const compressed = compress('hello world');
const decompressed = decompress(compressed);
```

## API

### compressToBase64(input: string): string;

### decompressFromBase64(input: string): string | null;

### compressToURL(input: string): string;

### decompressFromURL(input: string): string | null;

### compress(uncompressed: string): string;

### decompress(compressed: null | string): string | null;
