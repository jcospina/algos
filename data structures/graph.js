class Graph {
    constructor(node) {
        if (node) {
            this.adjList = new Map([[node.value, {node, edges: new Set()}]])
        } else {
            this.adjList = new Map();
        }        
    }

    /**
     * Adds a new node
     * @param {*} value the value of the node to add 
     */
    addNode(node) {
        if (!this.adjList.get(node.value)) {
            this.adjList.set(node.value, {node, edges: new Set()});
        }        
    }

    /**
     * Adds an edge between nodeA and nodeB
     * @param {*} nodeA source node
     * @param {*} nodeB target node
     */
    addEdge(nodeA, nodeB) {
        if (nodeA && nodeB && this.adjList.get(nodeA.value) && this.adjList.get(nodeB.value)) {
            this.adjList.get(nodeA.value).edges.add(nodeB);
            this.adjList.get(nodeB.value).edges.add(nodeA);
        }
    }

    /**
     * Removes a node
     * @param {*} node to remove 
     */
    removeNode(node) {
        if (this.adjList.get(node.value)) {
            const connectedNodes = this.adjList.get(node.value).edges;
            connectedNodes.forEach(element => {
                this.adjList.get(element.value).edges.delete(node);                                
            });
            this.adjList.delete(node.value);
        }
    }

    /**
     * Returns a reference to a node inside the graph
     * @param {*} node 
     */
    get(node) {
        return this.adjList.get(node.value);
    }
}
const node1 = {
    value: 1
}
const node2 = {
    value: 2
}
const node3 = {
    value: 3
}
const node4 = {
    value: 4
}
const node5 = {
    value: 5
}
const graph = new Graph(node1);
graph.addNode(node2);
graph.addNode(node3);
graph.addNode(node4);
graph.addNode(node5);
graph.addEdge(node1,node2);
graph.addEdge(node1,node5);
graph.addEdge(node2,node4);
graph.addEdge(node2,node5);
graph.addEdge(node2,node3);
graph.addEdge(node3,node4);
graph.addEdge(node4,node5);

const DFS = (graph, startNode) => {
    const seen = new Map([[startNode, true]]);
    const stack = [startNode];
    while(stack.length) {
        const currNode = stack.pop();
        const connectedNodes = graph.get(currNode).edges;
        for (let node of connectedNodes) {
            if (!seen.get(node)) {
                stack.push(node);
                seen.set(node, true);
            }
        }               
    }
}

DFS(graph, node1);

const BFS = (graph, startNode) => {
    const seen = new Map([[startNode, true]]);
    const queue = [startNode];
    while(queue.length) {
        const currNode = queue.shift();
        const connectedNodes = graph.get(currNode).edges;
        for (let node of connectedNodes) {
            if (!seen.get(node)) {
                queue.push(node);
                seen.set(node, true);
            }
        }        
    }
}

BFS(graph, node1);