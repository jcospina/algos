function dfs(node, needle) {
    // no node, so bottom of the tree
    if (!node) {
        return false;
    }
    // found value
    if (node.value === needle) {
        return true;
    }
    // value is less than node, search left
    if (needle < node.value) {
        return dfs(node.left, needle)
    }
    // otherwise search right
    return dfs(node.right, needle);
}

const binaryTree = {
    value: 5,
    left: {
        value: 2,
        left: {
            value: 1
        },
        right: {
            value: 4
        }
    },
    right: {
        value: 8,
        left: {
            value: 6
        },
        right: {
            value: 7
        }
    }
}

console.log(dfs(binaryTree, 4));