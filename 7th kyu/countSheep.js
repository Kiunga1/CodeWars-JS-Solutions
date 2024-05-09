// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers. in javascript please.
function countSheep (num) {
    // Initialize an empty string to store the murmur
    let murmur = "";
    // Loop from 1 to the given number
    for (let i = 1; i <= num; i++){
        // Append the current number followed by "sheep..." to the murmur string
        murmur +=`${i} sheep...`;
    }
    // Return the final murmur string
    return murmur
}