class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);

        if(this.root === null) {
            this.root =  newNode;
            return;
        }

        let currentRoot = this.root;

        while(true) {
            if(value < currentRoot.value) {
                if(currentRoot.left !== null ) {
                    currentRoot = currentRoot.left;
                } else {
                    currentRoot.left = newNode;
                    break;
                }
            } else if( value > currentRoot.value) {
                 if(currentRoot.right !== null ) {
                    currentRoot = currentRoot.right;
                 } else {
                    currentRoot.right = newNode;
                    break;
                 }
            }
        }
    }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);  
bst.insert(15); 
bst.insert(2);  
bst.insert(7);  

console.log("--- BST Insertion Check ---");
console.log("Root:", bst.root.value);
console.log("Root's Right:", bst.root.right?.value); 
console.log("Root's Left -> Right:", bst.root.left?.right?.value);