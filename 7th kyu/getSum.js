// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.
//solution

function getSum (a, b){
    //check if a is equal to b and return either a or b
    if (a===b){
      return a;
    }else {
      //else calculate the sum of all the intergers between a and b
      //initialise a variable to store sum
      let sum = 0;
      //loop through all integers between the maller of a and b and the largest.
      for (let i = Math.min(a, b); i <= Math.max(a, b); i++){
        //add each integer i to the sum
        sum +=i;
      }
      
      return sum
    }
  }