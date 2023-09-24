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