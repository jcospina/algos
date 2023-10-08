type WeightedAdjancencyMatrix = number[][];

// BFS can be implemented as a Queue
function bfs(graph: WeightedAdjancencyMatrix, source: number, needle: number): number[] | null {
    // contains all visited nodes
    const seen = new Array(graph.length).fill(false);
    // contains references to the parent (or source) for each node
    const prev = new Array(graph.length).fill(-1);

    seen[source] = true;
    // for simplicity use an array as a queue (not the most efficient way but for illustration
    // purposes i'll work)
    const q: number[] = [ source ];

    do {
        // since we are using an array as queue, we pop the first element
        const curr = q.shift() as number;
        // we found the needle
        if (curr === needle) {
            break;
        }
        // if it hasn't been found
        const adjs = graph[curr]; // adjancency array for the current node
        for (let i = 0; i < adjs.length; i++) {
            // no edge
            if (adjs[i] === 0) {
                continue;
            }
            // already seen
            if (seen[i]) {
                continue;
            }
            seen[i] = true;
            prev[i] = curr;
            q.push(i);
        }
        seen[curr] = true;
    } while(q.length);
    // it wasn't found
    if (prev[needle] === -1) {
        return null;
    }
    // build it backwards
    let curr = needle;
    // will contain the path to the needle
    const out: number[] = [];
    while (prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr];
    }
    // add the source to complete the full path
    return [source].concat(out.reverse());
}