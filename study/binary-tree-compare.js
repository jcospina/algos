function compareBinaryTree(source, target) {
    // base case: 
    const sourceValue = source && source.value;
    const targetValue = target && target.value;
    if (!source || !target) {
        return sourceValue === targetValue;
    }
    if (source && target && sourceValue !== targetValue) {
        return false;
    }
   
    return compareBinaryTree(source.left, target.left) && compareBinaryTree(source.right, target.right);
}

const source = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 4
        },
        right: {
            value: 5
        }
    },
    right: {
        value: 6,
        left: {
            value: 7
        },
        right: {
            value: 8
        }
    }
}

const target = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 4
        },
        right: {
            value: 5
        }
    },
    right: {
        value: 6,
        left: {
            value: 7
        },
        right: {
            value: 8
        }
    }
}

console.log(compareBinaryTree(source, target))