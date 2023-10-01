// Given two crystal balls that will break if dropped 
// from high enough distance, determine the exact spot in which
// it will break in the most optimized way

// Input: an array of booleans
function twoCrystalBalls(breaks) {
    const jump = Math.floor(Math.sqrt(breaks.length));
    let i = jump;
    for (; i < breaks.length; i += jump) {
        if (breaks[i]) {
            break;
        }
    }
    const lastSafeSpot = i - jump;
    for(let j = lastSafeSpot + 1; j < i; j++) {
        if (breaks[j]) {
            return j;
        }
    }
    return -1;
}

const breaks = [
  false, false, false, false, false, false, 
  false, false, false, false, false, false,
  true, true, true, true, true, true, true, 
  true, true, true, true, true, true
];

console.log(twoCrystalBalls(breaks))

