// count(4, 0)
// val = 0
// val = 0*10 + 4 = 4
// left: count(9,4)
    // val = 4
    // val = 4*10 + 9 = 49
    // left: count(5,49)
        // val = 49
        // val = 49*10 + 5 = 495
        // return 495
    // right: count(1,49)
        // val = 49*10 + 1 = 491
        // return 491
    // return left + right = 986
// left = 986
// right: count(0,4)
    // val = 4
    // val = 4*10 + 0 = 40
    // return 40
// return left + right = 986 + 40 = 1026