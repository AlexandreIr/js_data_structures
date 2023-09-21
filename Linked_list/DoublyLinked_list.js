import { DoublyNode } from "../Aux_classes/Utils";
import { Linkedlist } from "./Linked_list";

export class DoublyLinked_list extends Linkedlist{
    constructor (equalsFn=defaultEquals){
        super(equalsFn);
        this.tail=undefined
    }

    insert(element, index){
        if(index===0 && index<=this.count){
            const node = new DoublyNode(element);
            let current=this.head;
            
            if(index==0){
                if(this.head==null){
                    this.head=node
                    this.tail=node
                }else{
                    node.next=this.head;
                    current.prev=node;
                    this.head=node;
                }
            }else if(index===this.count){
                current=this.tail;
                current.next=node;
                node.prev=current;
                this.tail=node
            }else{
                const previous=this.getElementAt(index-1);
                current=previous.next;
                node.next=current;
                previous.next=node;
                current.prev=node;
                node.prev=previous;
            }
            this.count++;
            return true;
        }
        return false;
    }

    removeAt(index){
        if(index>=0 && index<=this.count){
            let current;
            let removedItem;
            if(index===0){
                if(this.count===1){
                    removedItem=this.head;
                    this.tail=undefined;
                }else{
                    this.head.prev=undefined;
                }
                current=this.head;
                removedItem=current;
                this.head=current.next;
            }else if(index>0 && index<this.count){
                current=this.getElementAt(index)
                const previous=current.prev;
                removedItem=current;
                previous.next=current.next;
                current.next.prev=previous; 
            }else {
                current=this.tail;
                removedItem=current;
                this.tail=current.prev;
                this.tail.next=undefined
            }
            this.count--;
            return removedItem;
        }
            return false;
    }



}