const fs = require("fs");
var input = fs.readFileSync("input21.txt", "utf8");
input = input.split("\n");

var bound = 5;

var ip = 0;

var numbers = []

/*for(var i = 0;i < 10; i++){
    var buu = numbers[numbers.length-1]*65899
    var bii = buu & 16777215
    numbers.push(bii)
}

console.log(numbers);
*/
//10198211
//6965377
//3526379
//3630905
//13131219
//15731249
var register = [0, 0, 0, 0, 0, 0];
var t = 0;
var ta = 0
while (ip < input.length - 1) {
    t++
  register[bound] = ip;
  var ins = input[ip + 1];
  var instruction = ins.split(" ");
  switch (instruction[0]) {
    case "addr":
      register[parseInt(instruction[3])] =
        register[parseInt(instruction[1])] + register[parseInt(instruction[2])];
      break;
    case "addi":
      register[parseInt(instruction[3])] =
        register[parseInt(instruction[1])] + parseInt(instruction[2]);
      break;
    case "mulr":
      register[parseInt(instruction[3])] =
        register[parseInt(instruction[1])] * register[parseInt(instruction[2])];
      break;
    case "muli":
      register[parseInt(instruction[3])] =
        register[parseInt(instruction[1])] * parseInt(instruction[2]);
      break;
    case "banr":
      register[parseInt(instruction[3])] =
        register[parseInt(instruction[1])] & register[parseInt(instruction[2])];
      break;
    case "bani":
      register[parseInt(instruction[3])] =
        register[parseInt(instruction[1])] & parseInt(instruction[2]);
      break;
    case "borr":
      register[parseInt(instruction[3])] =
        register[parseInt(instruction[1])] | register[parseInt(instruction[2])];
      break;
    case "bori":
      register[parseInt(instruction[3])] =
        register[parseInt(instruction[1])] | parseInt(instruction[2]);
      break;
    case "setr":
      register[parseInt(instruction[3])] = register[parseInt(instruction[1])];
      break;
    case "seti":
      register[parseInt(instruction[3])] = parseInt(instruction[1]);
      break;
    case "gtir":
      register[parseInt(instruction[3])] =
        parseInt(instruction[1]) > register[parseInt(instruction[2])] ? 1 : 0;
      break;

    case "gtri":
      register[parseInt(instruction[3])] =
        register[parseInt(instruction[1])] > parseInt(instruction[2]) ? 1 : 0;
      break;
    case "gtrr":
      register[parseInt(instruction[3])] =
        register[parseInt(instruction[1])] > register[parseInt(instruction[2])]
          ? 1
          : 0;
      break;
    case "eqir":
      register[parseInt(instruction[3])] =
        parseInt(instruction[1]) == register[parseInt(instruction[2])] ? 1 : 0;
      break;
    case "eqri":
      register[parseInt(instruction[3])] =
        register[parseInt(instruction[1])] == parseInt(instruction[2]) ? 1 : 0;
      break;
    case "eqrr":
      register[parseInt(instruction[3])] =
        register[parseInt(instruction[1])] == register[parseInt(instruction[2])]
          ? 1
          : 0;
      break;
  }
  console.log("t")
  console.log(ip, register)
  ip = register[bound];
  ip++
  /*if(t > 1000&&ta==0&&ip==9){
    register[1] = 100
    //register[5] = 10551300
    //register[2] = 1
    ta = 1
    console.log("booooo");
    
  }
  if(t > 10000&&ta==0&&ip==9){
    register[4] = 10551200
    //register[5] = 10551300
    //register[2] = 1
    ta = 1
    console.log("booooo");
    
  }
  if(t > 10000&&ta==1&&ip==7){
    register[0] = register[4]
    //register[5] = 10551300
    //register[2] = 1
    ta = 2
    console.log("booooo");
    
  }
  /*if(t > 10000&&ta==2&&ip==12){
    register[0] = 10551200
    //register[5] = 10551300
    //register[2] = 1
    ta = 1
    console.log("booooo");
    
  }
  if(t > 10000&&ta==2&&ip==14){
    //register[4] = 10551200
    //register[5] = 10551300
    register[2] = 1
    ta = 2
    console.log("biii");
    
  }
  */
 /*if(register[2] > 65536){
     break
 }*/
 if(t > 1850){
    break
 }
    if(ip > 29){
        /*if(numbers.indexOf(register[3]) != -1){
            console.log(numbers[numbers.length-1])
            return 0;
        }*/
        numbers.push(register[3])   
        console.log(numbers.length)   
  }
}
console.log(numbers)
console.log(register, t)
