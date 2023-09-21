import { Dictionary } from "./Dictionary.js";
import { HashTable } from "./HashTable.js";

// const dictionary=new Dictionary();

// dictionary.set('Gandalf', 'gandalfthegray@gmail.com');
// dictionary.set('Gimli', 'gimli@gmail.com');
// dictionary.set('Legolas', 'legolastheeagle@yahoo.com');

// console.log(dictionary.hasKey('Gimli'));
// console.log(dictionary.isEmpty());
// console.log(dictionary.size());
// console.log(dictionary.keys());
// console.log(dictionary.values());
// console.log(dictionary.get('Legolas'));

// dictionary.forEach((k, v)=>{
//     console.log('forEach:', `Key:${k}, value: ${v}`)
// })

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
