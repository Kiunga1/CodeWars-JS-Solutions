// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function toInitials(name) {
    // Split the name into an array of words
    let words = name.split(' ');

    // Extract the first letter of each word, capitalize it, and join them with a dot
    let initials = words.map(word => word[0].toUpperCase()).join('.');

    return initials;
}

console.log(toInitials("patrick feeney")); // Output: P.F
