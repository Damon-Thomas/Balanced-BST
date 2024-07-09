import { HashMap } from "./hash.js";
import { fib, fibsRec } from "./fib.js";
import { mergeSort } from "./mergesort.js";
import {prettyPrint, Tree} from "./balancedBST.js"


console.log(fib(9))
console.log(fibsRec(10))

let arr1 = [3, 2, 1, 13, 8, 5, 0, 1]
let arr2 = [105, 79, 100, 110]

console.log(mergeSort(arr1))
console.log(mergeSort(arr2))

const test = new HashMap() 

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
test.set('moon', 'silver')
console.log(test.entries())
console.log(test.buckets.toString())


//Balanced BST Tests
let aTree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])
prettyPrint(aTree.root)
aTree.insertValue(2)
aTree.insertValue(543)
aTree.insertValue(10)
prettyPrint(aTree.root)
aTree.deleteNode(aTree.root, 543)
prettyPrint(aTree.root)
aTree.deleteNode(aTree.root, 8)
prettyPrint(aTree.root)
console.log(aTree.find(7))
console.log(aTree.find(324))

function addOne(num) {
    return num + 1
}
aTree.levelOrder(addOne)
prettyPrint(aTree.root)

console.log(aTree.levelOrderRec(addOne))
prettyPrint(aTree.root)

console.log('in order', aTree.inOrder(addOne))
prettyPrint(aTree.root)

console.log('pre order', aTree.preOrder(addOne))
prettyPrint(aTree.root)

console.log('post order', aTree.postOrder(addOne))
prettyPrint(aTree.root)

console.log('height', aTree.height(aTree.root))
aTree.insertValue(6360)
aTree.insertValue(6370)
aTree.insertValue(6380)
aTree.insertValue(6390)
aTree.insertValue(6400)
prettyPrint(aTree.root)
console.log('height', aTree.height(aTree.root))
console.log('depth', aTree.depth(aTree.root.left.left.left.right))
console.log(aTree.isBalanced())
aTree.rebalance()
prettyPrint(aTree.root)
console.log(aTree.isBalanced())

//Balanced BST Assignment Tests
function randArray(max, min = 0) {
    let array = []
    for(let i = 0; i < 100; i++) {
        array.push(Math.floor(Math.random()*max) + min)
    }
    return array
}
let testArray = randArray(100)
console.log('test array', testArray)
let testTree = new Tree(testArray)
prettyPrint(testTree.root)
console.log(testTree.isBalanced())
console.log('level', testTree.levelOrder())
console.log('pre', testTree.preOrder())
console.log('in', testTree.inOrder())
console.log('post', testTree.postOrder())
let additionArray = randArray(10000, 100)
for(let i = 0; i < 25; i++) {
    testTree.insertValue(additionArray[i])
}
prettyPrint(testTree.root)
console.log(testTree.isBalanced())
testTree.rebalance()
prettyPrint(testTree.root)
console.log(testTree.isBalanced())
console.log('level', testTree.levelOrder())
console.log('pre', testTree.preOrder())
console.log('in', testTree.inOrder())
console.log('post', testTree.postOrder())

