import BinarySearchTree from "./BinarySearchTree.js"

const tree=new BinarySearchTree()

tree.insert(11)
tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)
tree.insert(6)

const cons=(data)=> console.log(data)
tree.preOrderTransverse(cons)
console.log(tree.min())
console.log(tree.max())
console.log(tree.find(72) ? 'Key 72 found': 'Key 72 not found')
console.log(tree.find(18) ? 'Key 18 found': 'Key 18 not found')



