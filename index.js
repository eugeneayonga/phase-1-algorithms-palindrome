function isPalindrome(word) {
  // Write your algorithm here
  const reverseWords = word.split('').reverse().join('');
  return reverseWords === word;
}

console.log(isPalindrome('madam'));
console.log(isPalindrome('abba')); 
console.log(isPalindrome('a')); 
console.log(isPalindrome('robot'));
console.log(isPalindrome('racecar'));
console.log(isPalindrome('ab'));

/* 
  Add your pseudocode here
  Input: a string
  write a function isPalindrome(string)
  returns true if the string is a palindrome
  returns false if the string is not a palindrome
  outputs: Boolean
*/

/*
  Add written explanation of your solution here
  I've descibed the variable reverseWords as a string of the reversed word.
  Invoked the in-built function(s) .split() to be used on word, then .reverse() to change the order from L-R to R-L and then joined
  I returned returnWords and used the strict equality operator to compare with the function arguement word.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));

}

module.exports = isPalindrome;
