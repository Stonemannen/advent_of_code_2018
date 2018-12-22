const fs = require("fs");
var input = fs.readFileSync("input10.txt", "utf8");
input = input.split("\n");
var time = 10942;

var points = [];

var highestX = 0;
var highestY = 0;
var lowestX = 0;
var lowestY = 0;

for (var i = 0; i < input.length; i++) {
  input[i] = input[i].replace(",", "");
  input[i] = input[i].replace(",", "");
  input[i] = input[i].replace(">", "");
  input[i] = input[i].replace(">", "");
  input[i] = input[i].replace("<", " ");
  input[i] = input[i].replace("<", " ");
  input[i] = input[i].replace("-", " -");
  input[i] = input[i].replace("-", " -");
  input[i] = input[i].replace("   ", " ");
  input[i] = input[i].replace("  ", " ");
  input[i] = input[i].replace("  ", " ");
  input[i] = input[i].replace("  ", " ");
  input[i] = input[i].replace("  ", " ");
  input[i] = input[i].replace("\r", "");
  var inn = input[i].split(" ");
  var x = parseInt(inn[1]);
  var y = parseInt(inn[2]);
  var velX = parseInt(inn[4]);
  var velY = parseInt(inn[5]);
  x += velX * time;
  y += velY * time;
  if (x > highestX) {
    highestX = x;
  }
  if (highestY < y) {
    highestY = y;
  }
  if (x < lowestX) {
    lowestX = x;
  }
  if (lowestY > y) {
    lowestY = y;
  }
  points.push({ x: x, y: y });
}
console.log(points);
console.log(highestX);
console.log(highestY);
console.log(lowestX);
console.log(lowestY);
if (highestX < 229 && highestY < 229) {
  console.log("helo");
  console.log(time);
}

var grid = makeArray(highestX-128, highestY-70, ".");
console.log(grid)

for (var i = 0; i < points.length; i++) {
  console.log(points[i]);
  grid[points[i].x-160][points[i].y-100] = "#";
}
for(var i = 7; i <75; i++){
    console.log(grid[i].join(""))
}
console.log(grid.length)

function makeArray(w, h, val) {
  var arr = [];
  for (i = 0; i < h; i++) {
    arr[i] = [];
    for (j = 0; j < w; j++) {
      arr[i][j] = val;
    }
  }
  return arr;
}
