module.exports= class Stack{
    #count
    #items
    constructor(){
        this.#count=0
        this.#items={}
    }

    push(item){
        this.#items[this.#count]=item
        this.#count++
    }

    pop(){
        if(this.isEmpty()){
            return ''
        }
        this.#count--
        const itemRemoved=this.#items[this.#count]
        delete this.#items[this.#count]
        return itemRemoved
    }

    get items(){
        return this.#items
    }
    
    isEmpty(){
        return this.#count==0
    }

    peek(){
        if(this.isEmpty()){
            return undefined
        }
        return this.#items[this.#count-1]
    }

    clear(){
        this.#count=0
        this.#items={}
    }

    toString(){
        if(this.isEmpty()){
            return ''
        }
        let objToString=`${this.#items[0]}`
        for(let i=1;i<this.#count;i++){
            objToString=`${objToString}, ${this.#items[i]}`
        }
        return objToString
    }
}