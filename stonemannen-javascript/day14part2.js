var input = "920831";

var scoreboard = [3, 7];

var elf1 = 0;
var elf2 = 1;
var i = 0;
while (true) {
  i++;
  var sum = (scoreboard[elf1] + scoreboard[elf2]).toString();
  sum = sum.split("");
  if (sum.length > 1) {
    scoreboard.push(parseInt(sum[0]));
    scoreboard.push(parseInt(sum[1]));
  } else {
    scoreboard.push(parseInt(sum[0]));
  }
  var newElf1 = elf1;
  var newElf2 = elf2;
  for (var j = 0; j < scoreboard[elf1] + 1; j++) {
    if (newElf1 == scoreboard.length - 1) {
      newElf1 = 0;
    } else {
      newElf1++;
    }
  }
  for (var j = 0; j < scoreboard[elf2] + 1; j++) {
    if (newElf2 == scoreboard.length - 1) {
      newElf2 = 0;
    } else {
      newElf2++;
    }
  }
  elf2 = newElf2;
  elf1 = newElf1;
  if (
    scoreboard[scoreboard.length-6] == input[0] &&
    scoreboard[scoreboard.length-5] == input[1] &&
    scoreboard[scoreboard.length-4] == input[2] &&
    scoreboard[scoreboard.length-3] == input[3] &&
    scoreboard[scoreboard.length-2] == input[4] &&
    scoreboard[scoreboard.length-1] == input[5]
  ) {
    console.log(scoreboard.length-6);
    break;
  }
  if (
    scoreboard[scoreboard.length-7] == input[0] &&
    scoreboard[scoreboard.length-6] == input[1] &&
    scoreboard[scoreboard.length-5] == input[2] &&
    scoreboard[scoreboard.length-4] == input[3] &&
    scoreboard[scoreboard.length-3] == input[4] &&
    scoreboard[scoreboard.length-2] == input[5]
  ) {
    console.log(scoreboard.length-7);
    break;
  }
  if (i % 50000 == 0) {
    console.log(i)
  }
}
