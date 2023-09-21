module.exports = class Queue {
    constructor(){ 
        this.count=0;
        this.lowestCount=0;
        this.items={};      //armazena os elementos em um objeto
    }
    //adiciona um elemento a fila e aumenta o contador
    enqueue(element){
        this.items[this.count]=element;
        this.count++
    }
    //remove o primeiro elemento da fila caso a mesma não esteja vazia
    dequeue(){
        if(this.isEmpty()){
            return undefined;
        }
        const result=this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }
    //verifica se a fila está vazia
    isEmpty(){
        return this.count-this.lowestCount===0
    }
    //caso haja elementos na fila, retorna o primeiro elemento da fila
    front(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.lowestCount];
    }
    //retirna o tamanho da fila
    size(){
        return this.count-this.lowestCount;
    }
    //limpa a fila
    clear(){
        this.items={};
        this.count=0;
        this.lowestCount=0;
    }
    //se a fila não esta vazia, concatena e retorna todos os elementos da fila
    toString(){
        if(this.isEmpty()){
            return '';
        }
        let objSting=`${this.items[this.lowestCount]}`;
        for(let i=this.lowestCount+1; i<this.count; i++){
            objSting=`${objSting}, ${this.items[i]}`;
        }
        return objSting;
    }
}