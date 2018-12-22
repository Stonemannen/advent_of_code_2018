const fs = require("fs");
var inpu = fs.readFileSync("input20.txt", "utf8");

var rows = {};

function getRow(y) {
  return rows[y] || (rows[y] = {});
}

function get(x, y) {
  return getRow(y)[x];
}

function set(x, y, tile) {
  getRow(y)[x] = tile;
}

var pasX = 300;
var pasY = 300;

set(pasX, pasY, { x: pasX, y: pasY, tile: "X", distance: 0 });

bla(inpu, pasX, pasY, 0);

console.log("done");

const dists = [];
for (let r in rows) {
  for (let k in rows[r]) {
    if (rows[r][k].tile == ".") {
      dists.push(rows[r][k].distance);
    }
  }
}

console.log("part1", Math.max.apply(undefined, dists)/2);
var count = 0;
for(var i = 0; i < dists.length; i++){
    if(dists[i]/2 >= 1000){
        count++
    }
}

console.log("part2", count)


function bla(input, posX, posY, dist) {
  //var tosa = 0;
  var distanc = dist;
  for (var i = 0; i < input.length; i++) {
    if (input[i] == "N") {
      if (get(posX, posY - 1)) {
        var node = get(posX, posY - 1);
        set(posX, posY - 1, {
          x: posX,
          y: posY - 1,
          tile: "-",
          distance: Math.min(node.distance, distanc + 1)
        });
        var node = get(posX, posY - 2);
        set(posX, posY - 2, {
          x: posX,
          y: posY - 2,
          tile: ".",
          distance: Math.min(node.distance, distanc + 1)
        });
        posY -= 2;
        distanc += 2;
      } else {
        set(posX, posY - 1, {
          x: posX,
          y: posY - 1,
          tile: "-",
          distance: distanc + 1
        });
        set(posX, posY - 2, {
          x: posX,
          y: posY - 2,
          tile: ".",
          distance: distanc + 2
        });
        posY -= 2;
        distanc += 2;
      }
    } else if (input[i] == "E") {
      if (get(posX + 1, posY)) {
        var node = get(posX + 1, posY);
        set(posX + 1, posY, {
          x: posX + 1,
          y: posY,
          tile: "|",
          distance: Math.min(node.distance, distanc + 1)
        });
        var node = get(posX + 2, posY);
        set(posX + 2, posY, {
          x: posX + 2,
          y: posY,
          tile: ".",
          distance: Math.min(node.distance, distanc + 2)
        });
        posX += 2;
        distanc += 2;
      } else {
        set(posX + 1, posY, {
          x: posX + 1,
          y: posY,
          tile: "|",
          distance: distanc + 1
        });
        set(posX + 2, posY, {
          x: posX + 2,
          y: posY,
          tile: ".",
          distance: distanc + 2
        });
        posX += 2;
        distanc += 2;
      }
    } else if (input[i] == "S") {
      if (get(posX, posY + 1)) {
        var node = get(posX, posY + 1);
        set(posX, posY + 1, {
          x: posX,
          y: posY + 1,
          tile: "-",
          distance: Math.min(node.distance, distanc + 1)
        });
        var node = get(posX, posY + 2);
        set(posX, posY + 2, {
          x: posX,
          y: posY + 2,
          tile: ".",
          distance: Math.min(node.distance, distanc + 1)
        });
        posY += 2;
        distanc += 2;
      } else {
        set(posX, posY + 1, {
          x: posX,
          y: posY + 1,
          tile: "-",
          distance: distanc + 1
        });
        set(posX, posY + 2, {
          x: posX,
          y: posY + 2,
          tile: ".",
          distance: distanc + 2
        });
        posY += 2;
        distanc += 2;
      }
    } else if (input[i] == "W") {
      if (get(posX - 1, posY)) {
        var node = get(posX - 1, posY);
        set(posX - 1, posY, {
          x: posX - 1,
          y: posY,
          tile: "|",
          distance: Math.min(node.distance, distanc + 1)
        });
        var node = get(posX - 2, posY);
        set(posX - 2, posY, {
          x: posX - 2,
          y: posY,
          tile: ".",
          distance: Math.min(node.distance, distanc + 1)
        });
        posX -= 2;
        distanc += 2;
      } else {
        set(posX - 1, posY, {
          x: posX - 1,
          y: posY,
          tile: "|",
          distance: distanc + 1
        });
        set(posX - 2, posY, {
          x: posX - 2,
          y: posY,
          tile: ".",
          distance: distanc + 2
        });
        posX -= 2;
        distanc += 2;
      }
    } else if (input[i] == "(") {
      var hit = false;
      var posiX = posX;
      var posiY = posY;
      var j = 0;
      var open = 0;
      while (!hit) {
        j++;
        if (input[i + j] == "(") {
          open++;
        } else if (input[i + j] == ")") {
          //tosa++;
          //console.log("tosa", tosa);
          open--;
          if (open == -1) {
            hit = true;
          }
        }
      }
      var branch = input.slice(i + 1, i + j);
      var braEnd = i + j;
      branch = branch.split("");
      var open = 0;
      var splits = [];
      for (j = 0; j < branch.length; j++) {
        if (branch[j] == "(") {
          open++;
        } else if (branch[j] == ")") {
          open--;
        }
        if (open == 0) {
          if (branch[j] == "|") {
            splits.push(j);
          }
        }
      }
      var branches = [];
      var k = 0;
      for (k = 0; k < splits.length; k++) {
        if (splits[k] - 1) {
          branches.push(branch.slice(splits[k - 1] + 1, splits[k]));
        } else {
          branches.push(branch.slice(0, splits[k]));
        }
      }
      branches.push(branch.slice(splits[splits.length - 1] + 1));
      for (var j = 0; j < branches.length; j++) {
        bla(branches[j].join(""), posiX, posiY, distanc);
      }
      i = braEnd;
    }
  }
}
