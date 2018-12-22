const fs = require("fs");
var input = fs.readFileSync("input22.txt", "utf8");
input = input.split("\n");

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

var depth = 5913
var target = {x: 8, y: 701}
/*
var depth = 510
var target = {x: 10, y: 10}
*/
set(0, 0, { x: 0, y: 0, type: 0, erosion: depth, index: 0});
set(target.x, target.y, { x: target.x, y: target.y, type: 0, erosion: depth, index: 0});

var risk = 0;

for(var i = 0; i <= 150+(target.y*2); i++){
    for(var j = 0; j <= 150+(target.y*2); j++){
        if(!(j == 0&&i == 0||(j == target.x&&i== target.y))){
            if(i == 0){
                var index = j*16807
                var ero = (index + depth) % 20183
                set(j, i, { x: j, y: i, type: ero % 3, erosion: ero, index: index})
                if(i <= target.y&&j <= target.x){
                    risk += ero % 3
                }
                //console.log(risk, ero % 3, ero, index, i, j)
            }else if(j == 0){
                var index = i*48271
                var ero = (index + depth) % 20183
                set(j, i, { x: j, y: i, type: ero % 3, erosion: ero, index: index})
                if(i <= target.y&&j <= target.x){
                    risk += ero % 3
                }
                //console.log(risk, ero % 3, ero, index, i, j)
            }else{
                var fi = get(j-1, i).erosion
                var fo = get(j, i-1).erosion
                var index = fi * fo
                var ero = (index + depth) % 20183
                set(j, i, { x: j, y: i, type: ero % 3, erosion: ero, index: index})
                if(i <= target.y&&j <= target.x){
                    risk += ero % 3
                }
                //console.log(risk, ero % 3, ero, index, i, j, fi, fo)
            }
        }
    }
}

console.log("part1", risk)
var times = []
for(var i = 0; i < 150+(target.x*2); i++){
    times.push([])
    for(var j = 0; j < 150+(target.y*2); j++){
        times[i].push([Number.MAX_VALUE/2, Number.MAX_VALUE/2, Number.MAX_VALUE/2])
    }
}
times[0][0][0] = 0

console.log("14 ", get(15,15))

console.log(times[0][0])
var i = 0;
/*while(true){
    i++*/
for(var i = 0; i < 1000; i++){
    var flag = false;
    for(var j = 0; j < 50+(target.x*2); j++){
        for(var k= 0; k < 50+(target.y*2); k++){
            for(var l = 0; l < 3; l++){
                var min = times[j][k][l]
                min = Math.min(min, mini(j-1,k,l,times))
                min = Math.min(min, mini(j,k+1,l,times))
                min = Math.min(min, mini(j+1,k,l,times))
                min = Math.min(min, mini(j,k-1,l,times))
                var lo = get(j, k)
                //console.log("mino", min);
                for(var m = 0; m < 3; m++){
                    //console.log("mini", times[j][k][l]);
                    //console.log(m != l, (times[j][k][m] + 3 < min), m != (lo.type+2)%3)
                    if(m != l && (times[j][k][m] + 7 < min) && m != (lo.type+2)%3){
                        min = times[j][k][m] + 7
                        //console.log("min", min);
                        
                    }
                }
                if(times[j][k][l] != min) {
                    flag = true;
                }
                times[j][k][l] = min;
            }
        }
    }
    if(!flag){
        break
    }

}
console.log("part2:", times[target.x][target.y][0])

function mini(j, k, l, times){
    if(j < 0 || j >= times.length || k < 0 || k >= times[0].length){
        return Number.MAX_VALUE;
    }
    var lo = get(j, k)
    //console.log(j,k,l)
    var min = (l == (lo.type+2)%3)?100000:times[j][k][l]
    //var min = (lo.type+2)%3?100000:times[j][k][l]
    for(var m = 0; m < 3; m++){
        if(m != l && (times[j][k][m] + 7 < min) && m != (lo.type+2)%3){
            min = times[j][k][m] + 7
        }
    }
    //console.log((l == (lo.type+2)%3)?100000:min + 1)
    return (l == (lo.type+2)%3)?100000:min + 1
    //return (lo.type+2)%3?100000:min + 1
}

/*
var openSet = []
var closedSet = []

openSet.push({x: 0, y: 0})

while(openSet.length){
    var current = openSet.shift()
    var currentNode = get(current.x, current.y)
    if(current.x == target.x&&current.y == target.y){
        console.log("found")
        break
    }
    if(current.x > 0){
        if(get(current.x-1,current.y).closed == false){
            if(get(current.x-1,current.y).open == false){
                openSet.push({x: current.x-1, y: current.y})
                var ne = get(current.x-1,current.y)
                ne.open = true
                set(current.x-1,current.y, ne)
            }
        }
        if(current.y > 0){
            if(get(current.x-1,current.y-1).closed == false){
                if(get(current.x-1,current.y-1).open == false){
                    openSet.push({x: current.x-1, y: current.y-1})
                    var ne = get(current.x-1,current.y-1)
                    ne.open = true
                    set(current.x-1,current.y-1, ne)
                }
            }
        }
    }
    if(current.y > 0){
        if(closedSet.indexOf({x: current.x, y: current.y-1}) == -1){
            if(openSet.indexOf({x: current.x, y: current.y-1}) == -1){
                openSet.push({x: current.x, y: current.y-1})
            }
        }
    }
    openSet.push({x: current.x+1, y: current.y})
    openSet.push({x: current.x, y: current.y+1})
    closedSet.push(current)
}*/