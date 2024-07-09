import { mergeSort } from "./mergesort.js";

function ANode(data, leftChildren = null, rightChildren = null) {
    this.data = data
    this.left = leftChildren;
    this.right = rightChildren
}


function Tree(array) {
    
    function sortArray(array) {
        const sortedArray = mergeSort(array)
        let x = 0
        for(let i = 1; i < sortedArray.length; i++) {
            if(sortedArray[i] === sortedArray[x]) {
                sortedArray.splice(x, 1)
                i--
                x--
            }
            x++
        }
        return sortedArray}

    this.root = buildTree(sortArray(array))

    function buildTree(array) { 
        
        if(array.length === 0) return null;
        if(array.length === 1) return new ANode(array[0])
        let mid = Math.floor(array.length / 2) 
        let left = array.slice(0, Math.floor(array.length / 2 ));
        let right = array.slice(mid + 1, array.length);
        return new  ANode(array[mid], buildTree(left), buildTree(right))
    } 

    this.insertValue = (value, node = this.root) => {
        if(value > node.data){
            if (node.right === null) {
                node.right = new ANode(value)
            }
            else {
                this.insertValue(value, node.right)
            }
        }
        else if(value < node.data) {
            if (node.left === null) {
                node.left = new ANode(value)
            }
            else {
                this.insertValue(value, node.left)
            }
        }
        else {
            console.log('error: duplicate value')
        }}

    this.deleteNode = (root, value) => {
        if (root === null)
            return root;

        if (value < root.data)
            root.left = this.deleteNode(root.left, value);

        else if (value > root.data)
            root.right = this.deleteNode(root.right, value);
       
        else {
            if (root.left === null)
                return root.right;
            else if (root.right === null)
                return root.left;

            
            root.data = this.minValue(root.right);

            root.right = this.deleteNode(root.right, root.data);
        }
        return root;
    }

    this.minValue = (node) => {
        let minv = node.data;
        while (node.left !== null) {
            minv = node.left.data;
            node = node.left;
        }
        return minv;
    }

    this.find = (value) => {
        let node = this.root;
        while(value != node.data) {
            if (node == null) {
                return
            }
            if (value > node.data) {
                node = node.right
            }
            else {
                node = node.left
            }
        }
        if (value === node.data) {
            return node
        }
    }


    this.levelOrder = (callback = null) => {
        let q = []
        let array = []
        let current
        q.push(this.root)
        while (q.length > 0) {
            current = q.shift()
            if (current.left != null) {
                q.push(current.left)}
            if (current.right != null) {
                q.push(current.right)}
            if (callback != null) {
                current.data = callback(current.data)
                array.push(current)
            }
            else{
                array.push(current)
            }
        }
        return array

    }

    this.levelOrderRec = (callback = null) => {
        let result = []

        function lot(node, l){
            if(!node) return 

            if (result[l]){
                if (callback != null) {
                    result[l].push(callback(node.data))
                    node.data = callback(node.data)}
                else {
                    result[l].push(node.data)
                    node.data = callback(node.data)
                }
            } else {
                if (callback != null) {
                    result[l] = [callback(node.data)]
                    node.data = callback(node.data)}
                else{
                    result[l] = [node.data]
                    node.data = callback(node.data)
                }
            }

            lot(node.left, l+1)
            lot(node.right, l+1)
        }

     lot(this.root, 0)
     let array = []
     for(let i = 0; i < result.length; i++){
        array =[...array, ...result[i]]
        }
    return array
    }

    this.inOrder = (callback = null) => {
        let array = []
        function traversal(node) {
            if (node.left != null) {
                traversal(node.left)
            }
            if (callback != null) {
            array.push(callback(node.data))
            node.data = callback(node.data)}
            else {
                array.push(node.data)
                node.data = node.data}
            if (node.right != null) {
                traversal(node.right)
            }
        }
        traversal(this.root)
        return array
    }

    this.preOrder = (callback = null) => {
        let array = []
        function traversal(node) {
            if (callback != null) {
                array.push(callback(node.data))
                node.data = callback(node.data)}
            else {
                array.push(node.data)
                node.data = node.data}
            if (node.left != null) {
                traversal(node.left)
            }
            if (node.right != null) {
                traversal(node.right)
            }
        }
        traversal(this.root)
        return array
    }

    this.postOrder = (callback = null) => {
        let array = []
        function traversal(node) {
            if (node.left != null) {
                traversal(node.left)
            }
            if (node.right != null) {
                traversal(node.right)
            }
            if (callback != null) {
                array.push(callback(node.data))
                node.data = callback(node.data)}
            else {
                array.push(node.data)
                node.data = node.data}
        }
        traversal(this.root)
        return array
    }

    this.height = (node) => {
        if (node.left == null && node.right == null) {
            return 0
        }
        else if (node.left == null){
            return this.height(node.right) + 1
        }
        else if (node.right == null){
            return this.height(node.left) + 1
        }
        else {
            if (this.height(node.left) > this.height(node.right)) {
                return this.height(node.left) + 1
            }
            if (this.height(node.right) >= this.height(node.left)) {
                return this.height(node.right) + 1
            }
        }
    }

    this.depth = (node, active = this.root) => {
        if(node == active) {
            return 0
        }
        else if(active == null) {
            return null
        }
        else {
            if(this.depth(node, active.right) != null){
                return this.depth(node, active.right) + 1
            }
            else if (this.depth(node, active.left) != null) {
                return this.depth(node, active.left) + 1
            }
            else {
                return null
            }
        }
    }

    this.isBalanced = () => {
        if(this.root.left == null && this.root.right == null) return true
        if (this.root.left == null) {
            if (this.height(this.root.right > 1)) {
                return false
            }}
        if (this.root.right == null) {  
            if (this.height(this.root.left > 1)) {
                return false
            }}
        let left = this.height(this.root.left)
        let right = this.height(this.root.right)
        console.log('left and right', left, right)
        if (left - right > 1 || right - left > 1) {
            return false
        }
        else return true
    }

    this.rebalance = () => {
        let values = this.inOrder()
        this.root = buildTree(values)

    }

}
    

const prettyPrint = (node, prefix = "", isLeft = true) => {
    
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };




export{prettyPrint, Tree}


