// Task: rewrite this function so that it uses a loop rather than recursion

// function joinElements(array, joinString) {

//   function recurse(index, resultSoFar) {
//     resultSoFar += array[index];

//     if(index === array.length - 1) {
//       return resultSoFar;
//     } else {
//       return recurse(index + 1, resultSoFar + joinString);
//     }
//   }

//   return recurse(0, '');
// }

function joinElements(array, joinString) {
    let result = array[0] + joinString;
    for (let i = 1; i < array.length - 1; i++) {        
        result += array[i] + joinString
    }
    return result + array[array.length - 1];
}

console.log(joinElements(['s','cr','t cod', ' :) :)'], 'e'));