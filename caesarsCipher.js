function rot13(str) { // LBH QVQ VG!
  const alphabet = ["A", "B", "C", "D" ,"E" ,"F" ,"G", "H", "I", "J", "K", "L" ,"M" , "N" , "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  let values = {A: 0, B: 1, C: 2, D: 3 , E: 4 ,F: 5 ,G: 6, H: 7, I: 8, J: 9, K :10, L: 11, M: 12, N: 13, O:14, P:15, Q:16, R:17,S:18,T:19,U:20,V:21,W:22,X:23,Y:24,Z:25}
  let encoded = str.split("");
  let x = 0;
  
  while (x < encoded.length){
    if (encoded[x] != encoded[x].toLowerCase()) {
  let code = encoded[x];
      let number = values[code];
     
    if (number <= 12) {
    encoded[x] = alphabet[number + 13];
    }
    if (number >=13) {
    encoded[x] = alphabet[number - 13];
    }
  }
    x++;
  }
  
  const result = encoded.join("");
  
  
  return result;
  
  }

// Change the inputs below to test
//rot13("SERR PBQR PNZC");
console.log(rot13("ABCD N"));
