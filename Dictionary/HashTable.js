import { defaultToString } from "../Aux_classes/Utils.js";
import { Linkedlist } from "../Linked_list/Linked_list.js";
import { ValuePair } from "./Dictionary.js";

export class HashTable{
    constructor(toStrFn=defaultToString){
        this.toStrFn=toStrFn;
        this.table={};
    }

    loseloseHashCode(key){
        if(typeof key==='number'){
            return key;
        }
        const tableKey=this.toStrFn(key);
        let hash=0;
        for(let i=0;i<tableKey.length;i++){
            hash+=tableKey.charCodeAt(i);
        }
        return hash % 37;
    }

    hashCode(key){
        return this.loseloseHashCode(key);
    }

    put(key, value){
        if(key!=null && value!=null){
            const position=this.hashCode(key);
            if(this.table[position]==null){
                this.table[position]=new Linkedlist();
            }
            this.table[position].push(new ValuePair(key, value))
            return true;
        }
        return false;
    }

    get(key){
        const position=this.hashCode(key);
        const LinkedList=this.table[position];
        if(LinkedList!=null && !LinkedList.isEmpty()){
            let current=LinkedList.head;
            while(current!=null){
                if(current.element.key===key){
                    return current.element.value;
                }
                current=current.next;
            }
        }
        return undefined;
    }

    remove(key){
        const hash=this.hasCode(key);
        const valuePair=this.table[hash];
        if(valuePair!=null){
            delete this.table[hash];
            return true;
        }
        return false;
    }

    size(){
        return Object.keys(this.table).length;
    }

    isEmpty(){
        return this.size()==0
    }

    turnToString(){
        if(this.isEmpty()){
            return '';
        }
        const values=Object.values(this.table);
        let objString='';
        values.forEach((v)=>{
            let current=v.head;
            for(let i=0; i<v.size();i++){
                objString+=`
                ${current.element.key}=>${current.element.value}
                `;
                current=current.next;
            }
        })
        return objString;
    }


}