module.exports=class Deque{
    constructor(){
        this.count=0;
        this.lowestCount=0;
        this.items={};
    }

    isEmpty(){
        return this.count-this.lowestCount===0
    }

    size(){
        return this.count-this.lowestCount;
    }

    addBack(element){
        this.items[this.count]=element;
        this.count++
    }

    addFront(element){
        if(this.isEmpty()){
            this.addBack(element);
        }else if(this.lowestCount>0){
            this.lowestCount--;
            this.items[this.lowestCount]=element;
        }else {
            for(let i=this.count; i>0; i--){
                this.items[i]=this.items[i-1];
            }
            this.count++;
            this.lowestCount=0;
            this.items[0]=element;
        }
    }

    removeFront(){
        if(this.isEmpty()){
            return undefined;
        }
        const result=this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }

    removeBack(){
        if(this.isEmpty()){
            return ''
        }
        this.count--
        const itemRemoved=this.items[this.count]
        delete this.items[this.count]
        return itemRemoved
    }

    front(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.lowestCount];
    }

    back(){
        if(this.isEmpty()){
            return undefined
        }
        return this.items[this.count-1]
    }
}