# node-red-number-conversions
A JavaScript number utilities library to use i

# Installation
## npm 
```bash
npm install node-red-number-conversions
```

# Usage
```js
import {Num} from "node-red-number-conversions";

console.log(Num.normalize(-4000,-20000,20000)) //output: 0.4

console.log(Num.scale(0.4,-50,50)); // output: -10
```