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