// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(arrayOfSheep) {
    // Check if arrayOfSheep is not null or undefined
    if (arrayOfSheep) {
        // Use filter to create a new array containing only the true values (sheep)
        const sheepArray = arrayOfSheep.filter(sheep => sheep === true);
        // Return the length of the filtered array, which represents the count of sheep
        return sheepArray.length;
    } else {
        // Return 0 if arrayOfSheep is null or undefined
        return 0;
    }
}
