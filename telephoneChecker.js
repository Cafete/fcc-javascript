function telephoneCheck(str) {
  const a = str.split("");
  const b = a.filter(x => x >= 0 && x <= 9  && x != " ");
  const c = a.filter(x => x != 0 && x != 1 && x != 2 && x != 3 && x != 4 && x != 5 
                    && x != 6 && x != 7 && x != 8 && x != 9 );
  const d = c.filter(x => x != "(" && x != ")" && x != "-");
  const e = a.filter(x => x == ")");
  //return e.length;
  
  //return d;
  
  if (d.length > 0){
  return false;
  } else {
  if (b.length == 11){
   if (a[0] == "1") {
     if (a[1] == "(") {
       if (a[5] == ")") {
       return true;
       }
     } else if (a[2] == "(") {
     if (a[6] == ")") {
     return true;
     }
     } else if (e.length > 0) {
     return false;
     } else {
     return true;
     }
   } else {
   return false;
   }
  } else {
  if (b.length == 10) {
  if (a[0] == "(") {
  if (a[4] == ")") {
  return true;
  } else {
  return false;
  }
  } else if (e.length > 0) {
  return false;
  } else {
  return true;
  }
  } else {
  return false;
  }
  }
  }
}

console.log(telephoneCheck("1 (555) 555-5555"));
