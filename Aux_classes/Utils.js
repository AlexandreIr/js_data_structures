export class Node{
    constructor (element){
        this.element=element;
        this.next=undefined;
    }
}

export class DoublyNode extends Node{
    constructor(element, next, prev){
        super(element, next);
        this.prev=prev;
    }
}

export class TreeNode{
    constructor(key){
        this.key=key;
        this.left= null;
        this.right = null;
    }
}

export function defaultEquals(a,b){
    return a===b;
}

export const Compare={
    LESS_THAN:-1,
    BIGGER_THAN:1
}

export function defaultCompare(a,b){
    if(a===b){
        return 0;
    }
    return a<b?Compare.LESS_THAN:Compare.BIGGER_THAN;
}

export function defaultToString(item){
    if(item===null){
        return 'NULL';
    }else if(item===undefined){
        return 'UNDEFINED';
    }else if(typeof(item==='string'||item instanceof String)){
        return `${item}`;
    }
    return item.toString();
}

export const BalanceFactor={
    UNBALANCED_RIGHT:1,
    SLIGHTLY_UNBALANCED_RIGHT:2,
    BALANCED:3,
    SLIGHTLY_UNBALANCED_LEFT:4,
    UNBALANCED_LEFT:5,
}
