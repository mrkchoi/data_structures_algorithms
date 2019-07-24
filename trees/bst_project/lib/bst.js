class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
    constructor() {
       this.root = null;
    }

    insert(val, root=this.root) {
        let newNode = new TreeNode(val);
        if (!root) {
            this.root = newNode;
            return;
        } else if (val < root.val) {
            if (root.left) {
                return this.insert(val, root.left);
            } else {
                root.left = newNode;
            }
        } else {
            if (root.right) {
                return this.insert(val, root.right);
            } else {
                root.right = newNode;
            }
        }
    }

    searchRecur(val, root=this.root) {
        if (!root) return false;

        if (val < root.val) {
            return this.searchRecur(val, root.left);
        } else if (val > root.val) {
            return this.searchRecur(val, root.right);
        } else {
            return true;
        }
    }

    // bfs w/ queue
    searchIter(val, root=this.root) {
        if (!root) return false;

        let queue = [root];
        while (queue.length) {
            let node = queue.shift();
            if (node.val === val) return true;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return false;
    }

    // dfs w/ stack
    searchIter(val, root=this.root) {
        if (!root) return false;

        let stack = [root];
        while (stack.length) {
            let node = stack.pop();
            if (node.val === val) return true;
            if (node.right) stack.push(node.right);
            if (node.left) stack.push(node.left);
        }
        return false;
    }
}

module.exports = {
    TreeNode,
    BST
};
