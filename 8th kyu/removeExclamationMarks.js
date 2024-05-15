// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    //Use the replace method with a regular expression to remove all exclamation marks
    return s.replace(/!/g, '');
  }