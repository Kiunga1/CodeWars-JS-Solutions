// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case example
// name === owner	'Hello boss'
// otherwise	'Hello guest'

function greet (name, owner) {
    // Add code here
    if(name === owner) {
      return 'Hello boss'
    }else{
      return 'Hello guest'
    }
  }