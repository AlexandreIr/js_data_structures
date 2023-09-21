import { defaultEquals } from "../Aux_classes/Utils.js";
import {Node} from  "../Aux_classes/Utils.js";

export class Linkedlist{
    constructor(equalsFn=defaultEquals){
        this.count=0;
        this.head=undefined;
        this.equalsFn=equalsFn;
    }

    push(element){
        const node = new Node(element);
        let current;
        if(this.head==null){
            this.head=node;
        }else{
            current=this.head;
            while(current.next!=null){
                current=current.next;
            }
            current.next=node;
        }
        this.count++;
    }

    removeByIndex(index){
        if(index>=0 && index<this.count){
            let current=this.head;
            if(index===0){
                this.head=current.next;
            }else{
                let previous;
                for(let i=0; i<index; i++){
                    previous=current;
                    current=current.next;
                }
                previous.next=current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }

    getElementAt(index){
        if(index>=0 && index<=this.count){
            let node=this.head;
            for(let i=0;i<index && node!=null;i++){
                node=node.next;
            }
            return node
        }
        return undefined
    }

    insert(element,index){
        if(index>=0 && index<=this.count){
            const node=new Node(element);
            if(index===0){
                const current=this.head;
                node.next=current
                this.head=node
            }else{
                const previous=this.getElementAt(index-1);
                const current=previous.next;
                node.next=current;
                previous.next=node;
            }
            this.count++;
            return true
        }
        return false;
    }

    indexOf(element){
        let current=this.head;
        for(let i=0; i<this.count && current!=null; i++){
            if(this.equalsFn(element, current.element)){
                return i;
            }
            current=current.next;
        }
        return -1;
    }

    removeByElement(element){
        const index=this.indexOf(element);
        return removeByIndex(index);
    }

    size(){
        return this.count;
    }

    isEmpty(){
        return this.size()==0;
    }

    toString(){
        if(this.isEmpty()){
            return '';
        }
        let objString=`${this.head}`;
        let current=this.head.next;
        for(let i=0;i<this.size() && current !=null; i++){
            objString= `${objString}, ${current.element}`;
            current=current.next;
        }
        return objString;
    }
}