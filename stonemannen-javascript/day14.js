var input = 920831

var scoreboard = [3,7]

var elf1 = 0
var elf2 = 1

for(var i = 0; scoreboard.length < input+10; i++){
    var sum = (scoreboard[elf1] + scoreboard[elf2]).toString()
    sum = sum.split("")
    if(sum.length > 1){
        scoreboard.push(parseInt(sum[0]))
        scoreboard.push(parseInt(sum[1]))
    }else{
        scoreboard.push(parseInt(sum[0]))
    }
    var newElf1 = elf1
    var newElf2 = elf2
    for(var j = 0; j < scoreboard[elf1]+1; j++){
        if(newElf1 == scoreboard.length-1){
            newElf1 = 0;
        }else{
            newElf1++
        }
    }
    for(var j = 0; j < scoreboard[elf2]+1; j++){
        if(newElf2 == scoreboard.length-1){
            newElf2 = 0;
        }else{
            newElf2++
        }
    }
    elf2 = newElf2
    elf1 = newElf1
    
}
var next = ""
for(var i = input; i < input+10; i++){
    next+=scoreboard[i]
}
console.log("part1 " + next)
