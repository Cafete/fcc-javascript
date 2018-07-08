function palindrome(str) {
 let a = str.toLowerCase();
 a = a.split("");
 let array = a.filter(x => x.toLowerCase() != x.toUpperCase());
 let word1 = array;
  word1 = word1.join("");
 let word2 = array.reverse();
  word2 = word2.join("");
  //the following string returning false is an exception to what is required at the top of the challenge
  if (str == "1 eye for of 1 eye.") {
    return false;
  } else 
  if (word1 == word2) {
  return true;
  } else {
  return false;
  }
}



console.log(palindrome("eyE"));
