function hIndex(citations: number[]): number {
    const sorted = citations.sort((a,b) => a-b);    
    let h = sorted.length;
    for (let i = 0; i < sorted.length; i++) {
        const minCitations = sorted[i];
        if (minCitations < h) {
            h--;
        }
    }
    return h;
};

// [3,0,6,1,5]
// sorted = [0,1,3,5,6]
// h = 5
// i = 0
// minCitations = 0
// 0 < 5 ? Si
// h = 4
