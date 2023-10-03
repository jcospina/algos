function isSubsequence(s: string, t: string): boolean {
    if (s === t) {
        return true;
    }
    if (s.length > t.length) {
        return false;
    }
    let sIdx = 0;
    let tIdx = 0;
    let coincidences = 0;
    while(sIdx < s.length && tIdx < t.length) {
        if (s[sIdx] === t[tIdx]) {
            coincidences++;
            sIdx++;
        }
        tIdx++;
    }
    return coincidences === s.length;
};

const s1 = 'abc';
const t1 = 'ahbgdc';
const s2 = 'axc';
const t2 = 'ahbdgc';
console.log(isSubsequence(s2, t1));