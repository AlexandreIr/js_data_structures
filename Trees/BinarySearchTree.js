import { Compare, TreeNode, defaultCompare } from "../Aux_classes/Utils.js";

export default class BinarySearchTree{
    #root
    constructor(compareFn=defaultCompare){
        this.compareFn=compareFn;
        this.#root=null
    }

    get root(){
        return this.#root
    }

    insert(key){
        if(this.#root==null) this.#root= new TreeNode(key);
        else this.#insertNode(this.#root, key);
    }

    #insertNode(node, key){
        if(this.compareFn(key, node.key)===Compare.LESS_THAN){
            if(node.left==null){
                node.left = new TreeNode(key);
            }else{
                this.#insertNode(node.left, key);
            }
        }else{
            if(node.right==null){
                node.right=new TreeNode(key);
            }else{
                this.#insertNode(node.right, key);
            }
        }
    }

    #inOrderTransverseNode(node, clbFn){
        if(node!= null){
            this.#inOrderTransverseNode(node.left, clbFn);
            clbFn(node.key);
            this.#inOrderTransverseNode(node.right, clbFn);
        }
    }

    inOrderTransverse(clbFn){
        this.#inOrderTransverseNode(this.#root, clbFn);
    }

    #preOderTrasnverseNode(node, clbFn){
        if(node!=null){
            clbFn(node.key)
            this.#preOderTrasnverseNode(node.left, clbFn);
            this.#preOderTrasnverseNode(node.right, clbFn);
        }
    }

    preOrderTransverse(clbFn){
        this.#preOderTrasnverseNode(this.#root, clbFn)
    }
}