import { Set } from "./Set.js";

const set = new Set();

set.add(1);
set.add(2);
set.add(3);
set.add('TesteJS');
set.delete('TesteJS');
console.log(set.values());
console.log(set.items);
console.log(set.size());
console.log(set.has(2));
console.log(set.has(9));
const setB = new Set();
setB.add(1);
setB.add(2);
setB.add(3);
setB.add(4);
const setC=set.difference(setB);
console.log(setC);
console.log(setC.size());
console.log(setC.values());
console.log(setC.items);
console.log(setC.size());

console.log(set.isSubsetOf(setB));

