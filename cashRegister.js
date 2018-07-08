function checkCashRegister(price, cash, cid) {
    let changex = {status: "",change:[]};

    let penny = cid[0][1]*100;
    let nickel = cid[1][1]*100;
    let dime = cid[2][1]*100;
    let quarter = cid[3][1]*100;
    let one = cid[4][1]*100;
    let five = cid[5][1]*100;
    let ten = cid[6][1]*100;
    let twenty = cid[7][1]*100;
    let oneHundred = cid[8][1]*100;

    let changeAmount = (cash - price) * 100;
    const cidAmount = penny + nickel + dime + quarter + one + five + ten + twenty + oneHundred;
    const currency = [["PENNY",penny,1],["NICKEL",nickel,5],["DIME",dime,10],["QUARTER",quarter,25],["ONE",one,100],["FIVE",five,500],["TEN",ten,1000],["TWENTY",twenty,2000],["ONE HUNDRED",oneHundred,10000]];

    if (changeAmount < cidAmount) {
      changex.status = "OPEN";
      let z = 8;
      let remainder;
      do {
        if (z == -1) {
      changex.status = "INSUFFICIENT_FUNDS";
      changex.change = [];
    return changex;
      }

      let quotient = Math.floor(changeAmount/currency[z][2]);
      remainder = changeAmount % currency[z][2];
      let number = quotient * currency[z][2];
      changeAmount = remainder;
      

      if (quotient > 0) {
        if (currency[z][1] >= number) {
          let a = number/100;
          let b = currency[z][0];
      changex.change.push([b, a]);
      } else if (currency[z][1] < number) {
        let a = currency[z][1]/100;
        let b = currency[z][0];
      changex.change.push([b, a]);
        changeAmount += number - currency[z][1];
        remainder ++;
      }
      }
        //return changeAmount;
      z--;


    } while (remainder > 0);

      return changex;

  } else if (changeAmount == cidAmount) {
  changex.status = "CLOSED";
    changex.change = cid;
    return changex;
  } else if (changeAmount > cidAmount) {
  changex.status = "INSUFFICIENT_FUNDS";
  return changex;
  }
    
  }

let a = checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 0.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  console.log(a);