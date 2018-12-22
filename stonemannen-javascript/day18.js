const fs = require("fs");
var input = fs.readFileSync("input18.txt", "utf8");
input = input.split("\n");

var size = 50;

var grid = makeArray(size, size, ".");

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

for (var i = 0; i < size; i++) {
  input[i] = input[i].split("");
  for (var j = 0; j < size; j++) {
    grid[i][j] = input[i][j];
  }
}

var nextGrid = JSON.parse(JSON.stringify(grid));
console.log(nextGrid);

for (var m = 0; m < 10; m++) {
  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      if (grid[i][j] == ".") {
        var trees = 0;
        if (grid[i + 1]) {
          if (grid[i + 1][j]) {
            if (grid[i + 1][j] == "|") {
              trees++;
            }
          }
        }
        if (grid[i - 1]) {
          if (grid[i - 1][j]) {
            if (grid[i - 1][j] == "|") {
              trees++;
            }
          }
        }
        if (grid[i + 1]) {
          if (grid[i + 1][j + 1]) {
            if (grid[i + 1][j + 1] == "|") {
              trees++;
            }
          }
        }
        if (grid[i + 1]) {
          if (grid[i + 1][j - 1]) {
            if (grid[i + 1][j - 1] == "|") {
              trees++;
            }
          }
        }
        if (grid[i - 1]) {
          if (grid[i - 1][j + 1]) {
            if (grid[i - 1][j + 1] == "|") {
              trees++;
            }
          }
        }
        if (grid[i - 1]) {
          if (grid[i - 1][j - 1]) {
            if (grid[i - 1][j - 1] == "|") {
              trees++;
            }
          }
        }
        if (grid[i]) {
          if (grid[i][j - 1]) {
            if (grid[i][j - 1] == "|") {
              trees++;
            }
          }
        }
        if (grid[i]) {
          if (grid[i][j + 1]) {
            if (grid[i][j + 1] == "|") {
              trees++;
            }
          }
        }
        if (trees >= 3) {
          nextGrid[i][j] = "|";
        }
      }
      if (grid[i][j] == "|") {
        var trees = 0;
        if (grid[i + 1]) {
          if (grid[i + 1][j]) {
            if (grid[i + 1][j] == "#") {
              trees++;
            }
          }
        }
        if (grid[i - 1]) {
          if (grid[i - 1][j]) {
            if (grid[i - 1][j] == "#") {
              trees++;
            }
          }
        }
        if (grid[i + 1]) {
          if (grid[i + 1][j + 1]) {
            if (grid[i + 1][j + 1] == "#") {
              trees++;
            }
          }
        }
        if (grid[i + 1]) {
          if (grid[i + 1][j - 1]) {
            if (grid[i + 1][j - 1] == "#") {
              trees++;
            }
          }
        }
        if (grid[i - 1]) {
          if (grid[i - 1][j + 1]) {
            if (grid[i - 1][j + 1] == "#") {
              trees++;
            }
          }
        }
        if (grid[i - 1]) {
          if (grid[i - 1][j - 1]) {
            if (grid[i - 1][j - 1] == "#") {
              trees++;
            }
          }
        }
        if (grid[i]) {
          if (grid[i][j - 1]) {
            if (grid[i][j - 1] == "#") {
              trees++;
            }
          }
        }
        if (grid[i]) {
          if (grid[i][j + 1]) {
            if (grid[i][j + 1] == "#") {
              trees++;
            }
          }
        }
        if (trees >= 3) {
          nextGrid[i][j] = "#";
        }
      }
      if (grid[i][j] == "#") {
        var trees = 0;
        var lumber = 0;
        if (grid[i + 1]) {
          if (grid[i + 1][j]) {
            if (grid[i + 1][j] == "|") {
              trees++;
            }
          }
        }
        if (grid[i - 1]) {
          if (grid[i - 1][j]) {
            if (grid[i - 1][j] == "|") {
              trees++;
            }
          }
        }
        if (grid[i + 1]) {
          if (grid[i + 1][j + 1]) {
            if (grid[i + 1][j + 1] == "|") {
              trees++;
            }
          }
        }
        if (grid[i + 1]) {
          if (grid[i + 1][j - 1]) {
            if (grid[i + 1][j - 1] == "|") {
              trees++;
            }
          }
        }
        if (grid[i - 1]) {
          if (grid[i - 1][j + 1]) {
            if (grid[i - 1][j + 1] == "|") {
              trees++;
            }
          }
        }
        if (grid[i - 1]) {
          if (grid[i - 1][j - 1]) {
            if (grid[i - 1][j - 1] == "|") {
              trees++;
            }
          }
        }
        if (grid[i]) {
          if (grid[i][j - 1]) {
            if (grid[i][j - 1] == "|") {
              trees++;
            }
          }
        }
        if (grid[i]) {
          if (grid[i][j + 1]) {
            if (grid[i][j + 1] == "|") {
              trees++;
            }
          }
        }
        if (grid[i + 1]) {
          if (grid[i + 1][j]) {
            if (grid[i + 1][j] == "#") {
              lumber++;
            }
          }
        }
        if (grid[i - 1]) {
          if (grid[i - 1][j]) {
            if (grid[i - 1][j] == "#") {
              lumber++;
            }
          }
        }
        if (grid[i + 1]) {
          if (grid[i + 1][j + 1]) {
            if (grid[i + 1][j + 1] == "#") {
              lumber++;
            }
          }
        }
        if (grid[i + 1]) {
          if (grid[i + 1][j - 1]) {
            if (grid[i + 1][j - 1] == "#") {
              lumber++;
            }
          }
        }
        if (grid[i - 1]) {
          if (grid[i - 1][j + 1]) {
            if (grid[i - 1][j + 1] == "#") {
              lumber++;
            }
          }
        }
        if (grid[i - 1]) {
          if (grid[i - 1][j - 1]) {
            if (grid[i - 1][j - 1] == "#") {
              lumber++;
            }
          }
        }
        if (grid[i]) {
          if (grid[i][j - 1]) {
            if (grid[i][j - 1] == "#") {
              lumber++;
            }
          }
        }
        if (grid[i]) {
          if (grid[i][j + 1]) {
            if (grid[i][j + 1] == "#") {
              lumber++;
            }
          }
        }
        if (trees > 0 && lumber > 0) {
          nextGrid[i][j] = "#";
        } else {
          nextGrid[i][j] = ".";
        }
      }
    }
  }
  grid = JSON.parse(JSON.stringify(nextGrid));
  nextGrid = JSON.parse(JSON.stringify(grid));
  //console.log(999990000%28)
  //console.log(grid);
  if(m % 28 == 0){
    var count = 0;

  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == "#") {
        count++;
      }
    }
  }
  var counti = 0;

  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == "|") {
        counti++;
      }
    }
  }
  console.log(m, count * counti);
  }
  
}

var count = 0;

for (var i = 0; i < grid.length; i++) {
  for (var j = 0; j < grid[i].length; j++) {
    if (grid[i][j] == "#") {
      count++;
    }
  }
}
var counti = 0;

for (var i = 0; i < grid.length; i++) {
  for (var j = 0; j < grid[i].length; j++) {
    if (grid[i][j] == "|") {
      counti++;
    }
  }
}
console.log(count * counti);
