import { defaultCompare } from "../Aux_classes/Utils";

export default class BinarySearchTree{
    constructor(compareFn=defaultCompare){
        this.compareFn=compareFn;
        this.root=null
    }
}