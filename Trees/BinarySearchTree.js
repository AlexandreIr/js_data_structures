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
        this.#preOderTrasnverseNode(this.#root, clbFn);
    }

    #posOrderTransverseNode(node, clbnFn){
        if(node!=null){
            this.#posOrderTransverseNode(node.left, clbnFn);
            this.#posOrderTransverseNode(node.right, clbnFn);
            clbnFn(node.key);
        }
    }

    postOrderTransverse(clbFn){
        this.#posOrderTransverseNode(this.#root, clbFn);
    }

    #minNode(node){
        let current=node;
        while(current!=null && current.left!=null){
            current=current.left;
        }
        return current;
    }

    min(){
        return this.#minNode(this.#root)
    }

    #maxNode(node){
        let current=node;
        while(current!=null && current.left!=null){
            current=current.right;
        }
        return current
    }

    max(){
        return this.#maxNode(this.root)
    }

    #findNode(node,key){
        if(node===null){
            return false;
        }
        if(this.compareFn(key, node.key)=== Compare.LESS_THAN){
            return this.#findNode(node.left, key);
        }else if(this.compareFn(key, node.key)===Compare.BIGGER_THAN){
            return this.#findNode(node.right, key);
        }else{
            return true;
        }
    }

    find(key){
        return this.#findNode(this.#root, key);
    }

    #removeNode(node,key){
        if(node==null){
            return null;
        }
        if(this.compareFn(key, node.key)===Compare.LESS_THAN){
            node.left=this.#removeNode(node.left, key);
            return node;
        }else if(this.compareFn(key, node)===Compare.BIGGER_THAN){
            node.right=this.#removeNode(node.right, key);
            return node;
        } else{
            if(node.left==null && node.right == null){
                node=null;
                return node;
            }
            if(node.left==null){
                node=node.right;
                return node;
            }else if(node.right==null){
                node=node.left;
                return node;
            }

            const aux=this.#minNode(node.right);
            node.key=aux.key;
            node.right=this.#removeNode(node.right, aux.key);
            return node;
        }
    }

    remove(key){
        this.#root=this.#removeNode(this.#root, key);
    }
}