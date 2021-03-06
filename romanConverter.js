function convertToRoman(num) {
  const I = "I";
  const V = "V";
  const X = "X";
  const L = "L";
  const C = "C";
  const D = "D";
  const M = "M";
  
  const a = "" + num;
  const b = a.split("");
  const c = a.length;
  
  let thousands = b[c-4];
  let hundreds = b[c-3];
  let tens = b[c-2];
  let units = b[c-1];

  if (thousands == 1) {
  thousands = M;
  } else if (thousands == 2) {
  thousands = M + M;
  } else if (thousands == 3) {
  thousands = M + M + M;
  } else {
  thousands = "";
  }
  
  if (hundreds == 1) {
  hundreds = C;
  } else if (hundreds == 2) {
  hundreds = C + C;
  } else if (hundreds == 3) {
  hundreds = C + C + C;
  } else if (hundreds == 4) {
  hundreds = C + D;
  } else if (hundreds == 5) {
  hundreds = D;
  } else if (hundreds == 6) {
  hundreds = D + C;
  } else if (hundreds == 7) {
  hundreds = D + C + C;
  } else if (hundreds == 8) {
  hundreds = D + C + C + C;
  } else if (hundreds == 9) {
  hundreds = C + M;
  } else {
  hundreds = "";
  }
  
  if (tens == 1) {
  tens = X;
  } else if (tens == 2) {
  tens = X + X;
  } else if (tens == 3) {
  tens = X + X + X;
  } else if (tens == 4) {
  tens = X + L;
  } else if (tens == 5) {
  tens = L;
  } else if (tens == 6) {
  tens = L + X;
  } else if (tens == 7) {
  tens = L + X + X;
  } else if (tens == 8) {
  tens = L + X + X + X;
  } else if (tens == 9) {
  tens = X + C;
  } else {
  tens = "";
  }
  
  if (units == 1) {
  units = I;
  } else if (units == 2) {
  units = I + I;
  } else if (units == 3) {
  units = I + I + I;
  } else if (units == 4) {
  units = I + V;
  } else if (units == 5) {
  units = V;
  } else if (units == 6) {
  units = V + I;
  } else if (units == 7) {
  units = V + I + I;
  } else if (units == 8) {
  units = V + I + I + I;
  } else if (units == 9) {
  units = I + X;
  } else {
  units = "";
  }

  
 return thousands + hundreds + tens + units;
}

console.log(convertToRoman(798));
