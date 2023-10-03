import { BalanceFactor, defaultCompare } from "../Aux_classes/Utils.js";
import BinarySearchTree from "./BinarySearchTree.js";

export default class AVLTree extends BinarySearchTree{
    constructor(compareFn=defaultCompare){
        super(compareFn);
        this.compareFn=compareFn;
        this.root=null;
    }

    #getNodeHeight(node){
        if(node==null){
            return -1;
        }
        return Math.max(this.#getNodeHeight(node.left), 
        this.#getNodeHeight(node.right))+1;
    }

    getBalanceFactor(node){
        const heightDifference=this.#getNodeHeight(node.left)-this.#getNodeHeight(node.right);
        switch(heightDifference){
            case -2:
                return BalanceFactor.UNBALANCED_RIGHT;
            case -1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
            case 1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
            case 2:
                return BalanceFactor.UNBALANCED_LEFT;
            default:
                return BalanceFactor.BALANCED;
        }
    }

    #rotationLL(node){
        const tmp=node.left;
        node.left=tmp.right;
        tmp.right=node;
        return tmp;
    }

    #rotationRR(node){
        const tmp=node.right;
        node.right=tmp.left;
        tmp.left=node;
        return tmp;
    }

    #rotationLR(node){
        node.left=this.#rotationRR(node.left);
        return this.#rotationLL(node);
    }

    #rotationRL(node){
        node.right=this.#rotationLL(node.right);
        return this.#rotationRR(node);
    }
}