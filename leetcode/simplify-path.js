/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const stack = [];
    let lastDir = '';
    path = path + '/';
    for (let i = 0; i < path.length; i++) {
        if (path[i] !== '/') {
            lastDir += path[i];
        } else {
            if (lastDir === '..') {
                stack.pop();
            } else if (lastDir !== '.' && lastDir !== '') {
                stack.push(lastDir);
            }
            lastDir = '';
            wordComplete = false;
        }        
    } 
    return `/${stack.join('/')}`
};

// simplifyPath("/home/") // -> /home
// simplifyPath("/../") // -> /
// simplifyPath("/home//foo") // -> /home/foo
// simplifyPath("/home/user/Documents/../Pictures") // -> /home/user/Pictures
// simplifyPath("/../home/user/Documents") // -> /home/user/Documents
simplifyPath("/home/user/../../usr/local/bin") // -> /usr/local/bin
// simplifyPath("/home/user/./Downloads/../Pictures/././") // -> /home/user/Pictures
// simplifyPath("/home/user/Documents/../../usr/local/bin") // -> /home/usr/local/bin
// simplifyPath("/home/user/Documents/../../../usr/local/bin") // -> /usr/local/bin