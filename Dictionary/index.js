import { Dictionary } from "./Dictionary.js";
import { HashTable } from "./HashTable.js";

const hash = new HashTable();

hash.put('Ygritte', 'ygritte@yahoo.com');
hash.put('Jonathan', 'jonathan@gmail.com');
hash.put('Jamie', 'jamie@hotmail.com');
hash.put('Jack', 'Jack@outlook.com');
hash.put('Jasmine', 'jasmine@hotmail.com');
hash.put('Jake', 'jake@live.com');
hash.put('Leonard', 'leonard@live.com');
hash.put('Clovis', 'clovis@live.com');

console.log(hash.get('Jake'))
console.log(hash.get('Ygritte'))

console.log(hash.table[5].head.next.element.value)
console.log(hash.table)
console.log(hash.turnToString())
