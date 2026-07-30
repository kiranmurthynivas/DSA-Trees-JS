class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


const root = new TreeNode(10);



root.left = new TreeNode(5);
root.right = new TreeNode(15);

root.left.left = new TreeNode(2);
root.left.right = new TreeNode(7);


console.log("--- Tree Proof Check ---");
console.log("Root:", root.value); 
console.log("Right Child:", root.right?.value); 
console.log("Left-Right Grandchild:", root.left?.right?.value); 