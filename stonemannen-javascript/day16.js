const fs = require("fs");
var input = fs.readFileSync("input16.txt", "utf8");
input = input.split("\n");
var count = 0;
var register = [3,2,1,1]

function addi(valueA, valueB, valueC){
    register[2] = register[0] + valueB
}
function addr(valueA, valueB, valueC){
    register[2] = register[0] + register[1]
}
function mulr(valueA, valueB, valueC){
    register[2] = register[0] * register[1]
}
function mulr(valueA, valueB, valueC){
    register[2] = register[0] * valueB
}
function banr(valueA, valueB, valueC){
    register[2] = register[0] & register[1]
}
function bani(valueA, valueB, valueC){
    register[2] = register[0] & valueB
}
function borr(valueA, valueB, valueC){
    register[2] = register[0] | register[1]
}
function bori(valueA, valueB, valueC){
    register[2] = register[0] | valueB
}


for(var i = 0;  i < input.length; i+=4){
    var ops  = 0
    input[i] = input[i].split("")
    input[i+1] = input[i+1].split(" ")
    input[i+2] = input[i+2].split("")
    var before = []
    for(var j  = 9; j < input[i].length-1; j+=3){
        before.push(parseInt(input[i][j]))
    }
    console.log(before)
    var instruction = []
    for(var j = 0; j < input[i+1].length; j++){
        instruction.push(parseInt(input[i+1][j]))
    }
    console.log(instruction)
    var after = []
    for(var j  = 9; j < input[i+2].length-1; j+=3){
        after.push(parseInt(input[i+2][j]))
    }

    register = before.slice(0)
    register[instruction[3]] = register[instruction[1]] + register[instruction[2]]
    if(register[0] == after[0]&&register[1] == after[1]&&register[2] == after[2]&&register[3] == after[3]){
        ops++
    }
    register = before.slice(0)
    register[instruction[3]] = register[instruction[1]] + instruction[2]
    if(register[0] == after[0]&&register[1] == after[1]&&register[2] == after[2]&&register[3] == after[3]){
        ops++
    }
    register = before.slice(0)
    register[instruction[3]] = register[instruction[1]] * register[instruction[2]]
    if(register[0] == after[0]&&register[1] == after[1]&&register[2] == after[2]&&register[3] == after[3]){
        ops++
    }
    register = before.slice(0)
    register[instruction[3]] = register[instruction[1]] * instruction[2]
    if(register[0] == after[0]&&register[1] == after[1]&&register[2] == after[2]&&register[3] == after[3]){
        ops++
    }
    register = before.slice(0)
    register[instruction[3]] = register[instruction[1]] & register[instruction[2]]
    if(register[0] == after[0]&&register[1] == after[1]&&register[2] == after[2]&&register[3] == after[3]){
        ops++
    }
    register = before.slice(0)
    register[instruction[3]] = register[instruction[1]] & instruction[2]
    if(register[0] == after[0]&&register[1] == after[1]&&register[2] == after[2]&&register[3] == after[3]){
        ops++
    }
    register = before.slice(0)
    register[instruction[3]] = register[instruction[1]] | register[instruction[2]]
    if(register[0] == after[0]&&register[1] == after[1]&&register[2] == after[2]&&register[3] == after[3]){
        ops++
    }
    register = before.slice(0)
    register[instruction[3]] = register[instruction[1]] | instruction[2]
    if(register[0] == after[0]&&register[1] == after[1]&&register[2] == after[2]&&register[3] == after[3]){
        ops++
    }
    register = before.slice(0)
    register[instruction[3]] = register[instruction[1]]
    if(register[0] == after[0]&&register[1] == after[1]&&register[2] == after[2]&&register[3] == after[3]){
        ops++
    }
    register = before.slice(0)
    register[instruction[3]] = instruction[1]
    if(register[0] == after[0]&&register[1] == after[1]&&register[2] == after[2]&&register[3] == after[3]){
        ops++
        console.log("seti")
    }
    register = before.slice(0)
    register[instruction[3]] = ((instruction[1]>register[instruction[2]]) ? 1 : 0)
    if(register[0] == after[0]&&register[1] == after[1]&&register[2] == after[2]&&register[3] == after[3]){
        ops++
        console.log("gtir")
    }
    register = before.slice(0)
    console.log(register[instruction[1]],instruction[2])
    register[instruction[3]] = ((register[instruction[1]]>instruction[2]) ? 1 : 0)
    if(register[0] == after[0]&&register[1] == after[1]&&register[2] == after[2]&&register[3] == after[3]){
        ops++
        console.log("gtri")
    }
    register = before.slice(0)
    register[instruction[3]] = ((register[instruction[1]]>register[instruction[2]]) ? 1 : 0)
    if(register[0] == after[0]&&register[1] == after[1]&&register[2] == after[2]&&register[3] == after[3]){
        ops++
        console.log("gtrr")
    }
    register = before.slice(0)
    register[instruction[3]] = ((instruction[1]==register[instruction[2]]) ? 1 : 0)
    if(register[0] == after[0]&&register[1] == after[1]&&register[2] == after[2]&&register[3] == after[3]){
        ops++
    }
    register = before.slice(0)
    register[instruction[3]] = ((register[instruction[1]]==instruction[2]) ? 1 : 0)
    if(register[0] == after[0]&&register[1] == after[1]&&register[2] == after[2]&&register[3] == after[3]){
        ops++
    }
    register = before.slice(0)
    register[instruction[3]] = ((register[instruction[1]]==register[instruction[2]]) ? 1 : 0)
    if(register[0] == after[0]&&register[1] == after[1]&&register[2] == after[2]&&register[3] == after[3]){
        ops++
    }
    if(ops > 2){
        count++
    }
    console.log(ops)
}
console.log(count)