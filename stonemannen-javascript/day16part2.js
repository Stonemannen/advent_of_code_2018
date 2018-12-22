const fs = require("fs");
var input = fs.readFileSync("input16.txt", "utf8");
input = input.split("\n");
var count = 0;
var register = [0, 0, 0, 0];

var possi = [];

for (var i = 0; i < 16; i++) {
  possi[i] = [];
  for (var j = 0; j < 16; j++) {
    possi[i].push(j);
  }
}
for (var i = 0; i < input.length; i += 4) {
  var ops = 0;
  input[i] = input[i].split("");
  input[i + 1] = input[i + 1].split(" ");
  input[i + 2] = input[i + 2].split("");
  var before = [];
  for (var j = 9; j < input[i].length - 1; j += 3) {
    before.push(parseInt(input[i][j]));
  }
  var instruction = [];
  for (var j = 0; j < input[i + 1].length; j++) {
    instruction.push(parseInt(input[i + 1][j]));
  }
  var after = [];
  for (var j = 9; j < input[i + 2].length - 1; j += 3) {
    after.push(parseInt(input[i + 2][j]));
  }
  console.log(possi[instruction[0]]);
  register = before.slice(0);
  register[instruction[3]] =
    register[instruction[1]] + register[instruction[2]];
  if (
    register[0] == after[0] &&
    register[1] == after[1] &&
    register[2] == after[2] &&
    register[3] == after[3]
  ) {
    ops++;
  } else {
    if (possi[instruction[0]].indexOf(0) > -1) {
      possi[instruction[0]].splice(possi[instruction[0]].indexOf(0), 1);
    }
  }
  register = before.slice(0);
  register[instruction[3]] = register[instruction[1]] + instruction[2];
  if (
    register[0] == after[0] &&
    register[1] == after[1] &&
    register[2] == after[2] &&
    register[3] == after[3]
  ) {
    ops++;
  } else {
    if (possi[instruction[0]].indexOf(1) > -1) {
      possi[instruction[0]].splice(possi[instruction[0]].indexOf(1), 1);
    }
  }
  register = before.slice(0);
  register[instruction[3]] =
    register[instruction[1]] * register[instruction[2]];
  if (
    register[0] == after[0] &&
    register[1] == after[1] &&
    register[2] == after[2] &&
    register[3] == after[3]
  ) {
    ops++;
  } else {
    if (possi[instruction[0]].indexOf(2) > -1) {
      possi[instruction[0]].splice(possi[instruction[0]].indexOf(2), 1);
    }
  }
  register = before.slice(0);
  register[instruction[3]] = register[instruction[1]] * instruction[2];
  if (
    register[0] == after[0] &&
    register[1] == after[1] &&
    register[2] == after[2] &&
    register[3] == after[3]
  ) {
    ops++;
  } else {
    if (possi[instruction[0]].indexOf(3) > -1) {
      possi[instruction[0]].splice(possi[instruction[0]].indexOf(3), 1);
    }
  }
  register = before.slice(0);
  register[instruction[3]] =
    register[instruction[1]] & register[instruction[2]];
  if (
    register[0] == after[0] &&
    register[1] == after[1] &&
    register[2] == after[2] &&
    register[3] == after[3]
  ) {
    ops++;
  } else {
    if (possi[instruction[0]].indexOf(4) > -1) {
      possi[instruction[0]].splice(possi[instruction[0]].indexOf(4), 1);
    }
  }
  register = before.slice(0);
  register[instruction[3]] = register[instruction[1]] & instruction[2];
  if (
    register[0] == after[0] &&
    register[1] == after[1] &&
    register[2] == after[2] &&
    register[3] == after[3]
  ) {
    ops++;
  } else {
    if (possi[instruction[0]].indexOf(5) > -1) {
      possi[instruction[0]].splice(possi[instruction[0]].indexOf(5), 1);
    }
  }
  register = before.slice(0);
  register[instruction[3]] =
    register[instruction[1]] | register[instruction[2]];
  if (
    register[0] == after[0] &&
    register[1] == after[1] &&
    register[2] == after[2] &&
    register[3] == after[3]
  ) {
    ops++;
  } else {
    if (possi[instruction[0]].indexOf(6) > -1) {
      possi[instruction[0]].splice(possi[instruction[0]].indexOf(6), 1);
    }
  }
  register = before.slice(0);
  register[instruction[3]] = register[instruction[1]] | instruction[2];
  if (
    register[0] == after[0] &&
    register[1] == after[1] &&
    register[2] == after[2] &&
    register[3] == after[3]
  ) {
    ops++;
  } else {
    if (possi[instruction[0]].indexOf(7) > -1) {
      possi[instruction[0]].splice(possi[instruction[0]].indexOf(7), 1);
    }
  }
  register = before.slice(0);
  register[instruction[3]] = register[instruction[1]];
  if (
    register[0] == after[0] &&
    register[1] == after[1] &&
    register[2] == after[2] &&
    register[3] == after[3]
  ) {
    ops++;
  } else {
    if (possi[instruction[0]].indexOf(8) > -1) {
      possi[instruction[0]].splice(possi[instruction[0]].indexOf(8), 1);
    }
  }
  register = before.slice(0);
  register[instruction[3]] = instruction[1];
  if (
    register[0] == after[0] &&
    register[1] == after[1] &&
    register[2] == after[2] &&
    register[3] == after[3]
  ) {
    ops++;
  } else {
    if (possi[instruction[0]].indexOf(9) > -1) {
      possi[instruction[0]].splice(possi[instruction[0]].indexOf(9), 1);
    }
  }
  register = before.slice(0);
  register[instruction[3]] = instruction[1] > register[instruction[2]] ? 1 : 0;
  if (
    register[0] == after[0] &&
    register[1] == after[1] &&
    register[2] == after[2] &&
    register[3] == after[3]
  ) {
    ops++;
  } else {
    if (possi[instruction[0]].indexOf(10) > -1) {
      possi[instruction[0]].splice(possi[instruction[0]].indexOf(10), 1);
    }
  }
  register = before.slice(0);
  register[instruction[3]] = register[instruction[1]] > instruction[2] ? 1 : 0;
  if (
    register[0] == after[0] &&
    register[1] == after[1] &&
    register[2] == after[2] &&
    register[3] == after[3]
  ) {
    ops++;
  } else {
    if (possi[instruction[0]].indexOf(11) > -1) {
      possi[instruction[0]].splice(possi[instruction[0]].indexOf(11), 1);
    }
  }
  register = before.slice(0);
  register[instruction[3]] =
    register[instruction[1]] > register[instruction[2]] ? 1 : 0;
  if (
    register[0] == after[0] &&
    register[1] == after[1] &&
    register[2] == after[2] &&
    register[3] == after[3]
  ) {
    ops++;
  } else {
    if (possi[instruction[0]].indexOf(12) > -1) {
      possi[instruction[0]].splice(possi[instruction[0]].indexOf(12), 1);
    }
  }
  register = before.slice(0);
  register[instruction[3]] = instruction[1] == register[instruction[2]] ? 1 : 0;
  if (
    register[0] == after[0] &&
    register[1] == after[1] &&
    register[2] == after[2] &&
    register[3] == after[3]
  ) {
    ops++;
  } else {
    if (possi[instruction[0]].indexOf(13) > -1) {
      possi[instruction[0]].splice(possi[instruction[0]].indexOf(13), 1);
    }
  }
  register = before.slice(0);
  register[instruction[3]] = register[instruction[1]] == instruction[2] ? 1 : 0;
  if (
    register[0] == after[0] &&
    register[1] == after[1] &&
    register[2] == after[2] &&
    register[3] == after[3]
  ) {
    ops++;
  } else {
    if (possi[instruction[0]].indexOf(14) > -1) {
      possi[instruction[0]].splice(possi[instruction[0]].indexOf(14), 1);
    }
  }
  register = before.slice(0);
  register[instruction[3]] =
    register[instruction[1]] == register[instruction[2]] ? 1 : 0;
  if (
    register[0] == after[0] &&
    register[1] == after[1] &&
    register[2] == after[2] &&
    register[3] == after[3]
  ) {
    ops++;
  } else {
    if (possi[instruction[0]].indexOf(15) > -1) {
      possi[instruction[0]].splice(possi[instruction[0]].indexOf(15), 1);
    }
  }
  if (ops > 2) {
    count++;
  }
}
console.log(count);
console.log(possi);

var optable = [];
var kvar = [];
for (var i = 0; i < 16; i++) {
  kvar.push(i);
}
console.log(kvar);
while (kvar.length > 0) {
  for (var i of kvar) {
    if (possi[i].length === 1) {
      optable[i] = possi[i][0];
      console.log("op" + optable[i], i);
      kvar.splice(kvar.indexOf(i), 1);
      for (var j = 0; j < 16; j++) {
        if (possi[j].indexOf(optable[i]) > -1) {
          possi[j].splice(possi[j].indexOf(optable[i]), 1);
        }
      }
      console.log(possi);
    }
  }
}
console.log(kvar);

console.log(optable);

var ins = fs.readFileSync("input16part2.txt", "utf8");
input = ins.split("\n");

for (var i = 0; i < input.length; i++) {
  input[i] = input[i].split(" ");
  var instruction = [];
  for (var j = 0; j < input[i].length; j++) {
    instruction.push(parseInt(input[i][j]));
  }
  switch (optable[instruction[0]]) {
    case 0:
      
      register[instruction[3]] =
        register[instruction[1]] + register[instruction[2]];
      break;
    case 1:
      
      register[instruction[3]] = register[instruction[1]] + instruction[2];
      break;
    case 2:
      
      register[instruction[3]] =
        register[instruction[1]] * register[instruction[2]];
      break;
    case 3:
      
      register[instruction[3]] = register[instruction[1]] * instruction[2];
      break;
    case 4:
      
      register[instruction[3]] =
        register[instruction[1]] & register[instruction[2]];
      break;
    case 5:
      
      register[instruction[3]] = register[instruction[1]] & instruction[2];
      break;
    case 6:
      
      register[instruction[3]] =
        register[instruction[1]] | register[instruction[2]];
      break;
    case 7:
      
      register[instruction[3]] = register[instruction[1]] | instruction[2];
      break;
    case 8:
      
      register[instruction[3]] = register[instruction[1]];
      break;
    case 9:
      
      register[instruction[3]] = instruction[1];
      break;
    case 10:
      
      register[instruction[3]] =
        instruction[1] > register[instruction[2]] ? 1 : 0;
      break;

    case 11:
      
      register[instruction[3]] =
        register[instruction[1]] > instruction[2] ? 1 : 0;
      break;
    case 12:
      
      register[instruction[3]] =
        register[instruction[1]] > register[instruction[2]] ? 1 : 0;
      break;
    case 13:
      
      register[instruction[3]] =
        instruction[1] == register[instruction[2]] ? 1 : 0;
      break;
    case 14:
      
      register[instruction[3]] =
        register[instruction[1]] == instruction[2] ? 1 : 0;
      break;
    case 15:
      
      register[instruction[3]] =
        register[instruction[1]] == register[instruction[2]] ? 1 : 0;
      break;
  }
  console.log(register)
}

console.log(register)

/*var optable = [];
for (var i = 0; i < 16; i++) {
  for (var j = 0; j < 16; j++) {
    var possible = true;
    var tested = false
    for (var k = 0; k < input.length; k += 4) {
      var ops = 0;
      var inpu = []
      inpu[k] = input[k].split("");
      inpu[k + 1] = input[k + 1].split(" ");
      inpu[k + 2] = input[k + 2].split("");
      var before = [];
      for (var l = 9; l < inpu[k].length - 1; l += 3) {
        before.push(parseInt(inpu[k][l]));
      }
      var instruction = [];
      for (var l = 0; l < inpu[k + 1].length; l++) {
        instruction.push(parseInt(inpu[k + 1][l]));
      }
      var after = [];
      for (var l = 9; l < inpu[k + 2].length - 1; l += 3) {
        after.push(parseInt(inpu[k + 2][l]));
      }
      if (instruction[0] == i) {
        switch (j) {
          case 0:
            register = before.slice(0);
            register[instruction[3]] =
              register[instruction[1]] + register[instruction[2]];
            if (
              !(
                register[0] == after[0] &&
                register[1] == after[1] &&
                register[2] == after[2] &&
                register[3] == after[3]
              )
            ) {
              possible = false
              tested = true
            }
            break;
          case 1:
            register = before.slice(0);
            register[instruction[3]] =
              register[instruction[1]] + instruction[2];
            if (
              !(
                register[0] == after[0] &&
                register[1] == after[1] &&
                register[2] == after[2] &&
                register[3] == after[3]
              )
            ) {
              possible = false;
              tested = true
            }
            break;
          case 2:
            register = before.slice(0);
            register[instruction[3]] =
              register[instruction[1]] * register[instruction[2]];
            if (
              !(
                register[0] == after[0] &&
                register[1] == after[1] &&
                register[2] == after[2] &&
                register[3] == after[3]
              )
            ) {
              possible = false;
              tested = true
            }
            break;
          case 3:
            register = before.slice(0);
            register[instruction[3]] =
              register[instruction[1]] * instruction[2];
            if (
              !(
                register[0] == after[0] &&
                register[1] == after[1] &&
                register[2] == after[2] &&
                register[3] == after[3]
              )
            ) {
              possible = false;
              tested = true
            }
            break;
          case 4:
            register = before.slice(0);
            register[instruction[3]] =
              register[instruction[1]] & register[instruction[2]];
            if (
              !(
                register[0] == after[0] &&
                register[1] == after[1] &&
                register[2] == after[2] &&
                register[3] == after[3]
              )
            ) {
              possible = false;
              tested = true
            }
            break;
          case 5:
            register = before.slice(0);
            register[instruction[3]] =
              register[instruction[1]] & instruction[2];
            if (
              !(
                register[0] == after[0] &&
                register[1] == after[1] &&
                register[2] == after[2] &&
                register[3] == after[3]
              )
            ) {
              possible = false;
              tested = true
            }
            break;
          case 6:
            register = before.slice(0);
            register[instruction[3]] =
              register[instruction[1]] | register[instruction[2]];
            if (
              !(
                register[0] == after[0] &&
                register[1] == after[1] &&
                register[2] == after[2] &&
                register[3] == after[3]
              )
            ) {
              possible = false;
              tested = true
            }
            break;
          case 7:
            register = before.slice(0);
            register[instruction[3]] =
              register[instruction[1]] | instruction[2];
            if (
              !(
                register[0] == after[0] &&
                register[1] == after[1] &&
                register[2] == after[2] &&
                register[3] == after[3]
              )
            ) {
              possible = false;
              tested = true
            }
            break;
          case 8:
            register = before.slice(0);
            register[instruction[3]] = register[instruction[1]];
            if (
              !(
                register[0] == after[0] &&
                register[1] == after[1] &&
                register[2] == after[2] &&
                register[3] == after[3]
              )
            ) {
              possible = false;
              tested = true
            }
            break;
          case 9:
            register = before.slice(0);
            register[instruction[3]] = instruction[1];
            if (
              !(
                register[0] == after[0] &&
                register[1] == after[1] &&
                register[2] == after[2] &&
                register[3] == after[3]
              )
            ) {
              possible = false;
              tested = true
            }
            break;
          case 10:
            register = before.slice(0);
            register[instruction[3]] =
              instruction[1] > register[instruction[2]] ? 1 : 0;
            if (
              !(
                register[0] == after[0] &&
                register[1] == after[1] &&
                register[2] == after[2] &&
                register[3] == after[3]
              )
            ) {
              possible = false;
              tested = true
            }
            break;

          case 11:
            register = before.slice(0);
            register[instruction[3]] =
              register[instruction[1]] > instruction[2] ? 1 : 0;
            if (
              !(
                register[0] == after[0] &&
                register[1] == after[1] &&
                register[2] == after[2] &&
                register[3] == after[3]
              )
            ) {
              possible = false;
              tested = true
            }
            break;
          case 12:
            register = before.slice(0);
            register[instruction[3]] =
              register[instruction[1]] > register[instruction[2]] ? 1 : 0;
            if (
              !(
                register[0] == after[0] &&
                register[1] == after[1] &&
                register[2] == after[2] &&
                register[3] == after[3]
              )
            ) {
              possible = false;
              tested = true
            }
            break;
          case 13:
            register = before.slice(0);
            register[instruction[3]] =
              instruction[1] == register[instruction[2]] ? 1 : 0;
            if (
              !(
                register[0] == after[0] &&
                register[1] == after[1] &&
                register[2] == after[2] &&
                register[3] == after[3]
              )
            ) {
              possible = false;
              tested = true
            }
            break;
          case 14:
            register = before.slice(0);
            register[instruction[3]] =
              register[instruction[1]] == instruction[2] ? 1 : 0;
            if (
              !(
                register[0] == after[0] &&
                register[1] == after[1] &&
                register[2] == after[2] &&
                register[3] == after[3]
              )
            ) {
              possible = false;
              tested = true
            }
            break;
          case 15:
            register = before.slice(0);
            register[instruction[3]] =
              register[instruction[1]] == register[instruction[2]] ? 1 : 0;
            if (
              !(
                register[0] == after[0] &&
                register[1] == after[1] &&
                register[2] == after[2] &&
                register[3] == after[3]
              )
            ) {
              possible = false;
              tested = true
            }
            break;
        }
      }
    }
    if (possible == true) {
      optable.push([i, j]);
    }
  }
}
//console.log(optable);


for (var k = 0; k < input.length; k += 4) {
    var ops = 0;
    var inpu = []
    inpu[k] = input[k].split("");
    inpu[k + 1] = input[k + 1].split(" ");
    inpu[k + 2] = input[k + 2].split("");
    var before = [];
    for (var l = 9; l < inpu[k].length - 1; l += 3) {
      before.push(parseInt(inpu[k][l]));
    }
    var instruction = [];
    for (var l = 0; l < inpu[k + 1].length; l++) {
      instruction.push(parseInt(inpu[k + 1][l]));
    }
    var after = [];
    for (var l = 9; l < inpu[k + 2].length - 1; l += 3) {
      after.push(parseInt(inpu[k + 2][l]));
    }
    if (instruction[0] == 9) {
        register = before.slice(0)
    register[instruction[3]] = register[instruction[1]] | instruction[2]
    if(!(register[0] == after[0]&&register[1] == after[1]&&register[2] == after[2]&&register[3] == after[3])){
        console.log("false");
        
    }
    }

}*/
