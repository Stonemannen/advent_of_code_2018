const fs = require("fs");
var input = fs.readFileSync("input12.txt", "utf8");
input = input.split("\n");

var initState =
  ".......##..#..##....#..#..#..##.#.###.######..#..###.#.#..##.###.#.##..###..#.#..#.##.##..###.#.#...#.##..........................";
var state = initState.split("");
var total = 0;
console.log("done");
for (var i = 1; i <= 200; i++) {
  var prevState = state.slice(0);
  for (var j = 0; j < prevState.length; j++) {
    var found = 0;
    for (var k = 0; k < input.length; k++) {
      var con = input[k].split("");
      if (prevState[j - 2] === con[0]) {
        if (prevState[j - 1] === con[1]) {
          if (prevState[j] === con[2]) {
            if (prevState[j + 1] === con[3]) {
              if (prevState[j + 2] === con[4]) {
                state[j] = con[9];
                found = 1;
              }
            }
          }
        }
      }
    }
    if (found == 0) {
      state[j] = ".";
    }
  }
  state.push(".");
  total = 0;
  for (var j = 0; j < state.length; j++) {
    if (state[j] == "#") {
      total += j - 7;
    }
  }
  console.log("i " + i + " total " + total);
}

var total = 0;
for (var j = 0; j < state.length; j++) {
  if (state[j] == "#") {
    total += j - 7;
  }
}
var test = 86 * (50000000000 - 200)
test += total
console.log(test)
console.log("total " + total);
