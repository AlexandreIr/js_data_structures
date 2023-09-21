const Queue = require("./QUEUE");

const queue=new Queue();
console.log(queue.isEmpty());

queue.enqueue('João');
queue.enqueue('André');
console.log(queue.toString());

queue.enqueue('Camila');

console.log(queue.toString());
console.log(queue.size());
console.log(queue.isEmpty());
queue.dequeue();
queue.dequeue();
console.log(queue.toString());
