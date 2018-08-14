function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  var value = [];
  var penny = false;
  var nickel = false;
  var dime = false;
  var quarter = false;
  var dollar = false;
  var five = false;
  var ten = false;
  var twenty = false;
  var hundred = false;
  var empty = false;
  // Here is your change, ma'am.

  // $100
  while (change - 100 >= 0 && cid[8][1] > 0) {
    change -= 100;
    cid[8][1] -= 100;
    if (hundred == false) {
      value.push(["ONE HUNDRED", 100]);
    } else {
      for (var i = 0; i < value.length; i++) {
        if (value[i][0] == "ONE HUNDRED") {
          value[i][1] += 100;
        }
      }
    }
    hundred = true;
  }

  // $20
  while (change - 20 >= 0 && cid[7][1] > 0) {
    change -= 20;
    cid[7][1] -= 20;
    if (twenty == false) {
      value.push(["TWENTY", 20]);
    } else {
      for (var i = 0; i < value.length; i++) {
        if (value[i][0] == "TWENTY") {
          value[i][1] += 20;
        }
      }
    }
    twenty = true;
  }

  // $10
  while (change - 10 >= 0 && cid[6][1] > 0) {
    change -= 10;
    cid[6][1] -= 10;
    if (ten == false) {
      value.push(["TEN", 10]);
    } else {
      for (var i = 0; i < value.length; i++) {
        if (value[i][0] == "TEN") {
          value[i][1] += 10;
        }
      }
    }
    ten = true;
  }

  // $5
  while (change - 5 >= 0 && cid[5][1] > 0) {
    change -= 5;
    cid[5][1] -= 5;
    if (five == false) {
      value.push(["FIVE", 5]);
    } else {
      for (var i = 0; i < value.length; i++) {
        if (value[i][0] == "FIVE") {
          value[i][1] += 5;
        }
      }
    }
    five = true;
  }

  // $1
  while (change - 1 >= 0 && cid[4][1] > 0) {
    change -= 1;
    cid[4][1] -= 1;
    if (dollar == false) {
      value.push(["ONE", 1]);
    } else {
      for (var i = 0; i < value.length; i++) {
        if (value[i][0] == "ONE") {
          value[i][1] += 1;
        }
      }
    }
    dollar = true;
  }

  // $0.25
  while (change - .25 >= 0 && cid[3][1] > 0) {
    change -= .25;
    cid[3][1] -= .25;
    if (quarter == false) {
      value.push(["QUARTER", .25]);
    } else {
      for (var i = 0; i < value.length; i++) {
        if (value[i][0] == "QUARTER") {
          value[i][1] += .25;
        }
      }
    }
    quarter = true;
  }

  // $0.10
  while (change - .1 >= 0 && cid[2][1] > 0) {
    change -= .1;
    cid[2][1] -= .1;
    if (dime == false) {
      value.push(["DIME", .1]);
    } else {
      for (var i = 0; i < value.length; i++) {
        if (value[i][0] == "DIME") {
          value[i][1] += .1;
        }
      }
    }
    dime = true;
  }

  // $0.05
  while (change - .05 >= 0 && cid[1][1] > 0) {
    change -= .05;
    cid[1][1] -= .05;
    if (nickel == false) {
      value.push(["NICKEL", .05]);
    } else {
      for (var i = 0; i < value.length; i++) {
        if (value[i][0] == "NICKEL") {
          value[i][1] += .05;
        }
      }
    }
    nickel = true;
  }

  // $0.01
  while (change - .01 >= 0 && cid[0][1] > 0) {
    change -= .01;
    change *= 100;
    change = Math.round(change);
    change = Math.trunc(change);
    change /= 100;

    cid[0][1] -= .01;
    if (penny == false) {
      value.push(["PENNY", .01]);
    } else {
      for (var i = 0; i < value.length; i++) {
        if (value[i][0] == "PENNY") {
          value[i][1] += .01;
        }
      }
    }
    penny = true;
  }

  console.log(value, change);

  if (change > 0) {
    return {
      status: "INSUFFICIENT_FUNDS",
      change: []
    };
  }

  if (change == 0) {
    for (var i = 0; i < cid.length; i++) {
      if (cid[i][1] <= 0) {
        empty = true;
      }
      else {
        empty = false;
        break;
      }
    }
    if (empty == true) {
      for (var i = 0; i < cid.length; i++) {
        if (value[i] == undefined) {
          value.push(cid[i]);
        }
      }
      value[0][1] = Math.trunc(value[0][1]*100)/100;
      return {
        status: "CLOSED",
        change: value
      };
    } else {

      return {
        status: "OPEN",
        change: value
      };
    }
  }

}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]
