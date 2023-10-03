function isPalindrome(s: string): boolean {
    const normalizedStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    for (let i = 0, j = normalizedStr.length - 1; i < normalizedStr.length; i++, j--) {
        if ( i <= j) {
            if (normalizedStr[i] !== normalizedStr[j]) {
                return false;
            }
        } else {
            break;
        }
    }
    return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));