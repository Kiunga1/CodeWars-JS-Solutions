// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
//  You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

//solution
function removeChar(str){
    //use the slice method to remove the first and last character
    return str.slice(1, -1);
}