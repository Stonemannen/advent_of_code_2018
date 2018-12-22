const fs = require("fs");
var input = fs.readFileSync("input17.txt", "utf8");
input = input.split("\n");

var coords = []

var lowX = 10000
var lowY = 10000
var maxX = 0
var maxY = 0;

for(var i = 0; i < input.length; i++){
    input[i] = input[i].replace(",", "")
    if(input[i][0] == "x"){
        input[i] = input[i].split(" ")
        input[i][0] = input[i][0].split("=")
        var x = parseInt(input[i][0][1])
        if(x < lowX){
            lowX = x
        } 
        if (x > maxX){
            maxX = x
        }
        input[i][1] = input[i][1].split("=")
        input[i][1][1] = input[i][1][1].split("..")
        var fy = parseInt(input[i][1][1][0])
        if(fy < lowY){
            lowY = fy
        }
        if(fy > maxY){
            maxY = fy
        }
        var sy = parseInt(input[i][1][1][1])
        for(var j = fy; j <= sy; j++){
            coords.push({x: x, y: j})
        }
    }else{
        input[i] = input[i].split(" ")
        input[i][0] = input[i][0].split("=")
        var y = parseInt(input[i][0][1])
        if(y < lowY){
            lowY = y
        }
        if(y > maxY){
            maxY = y
        }
        input[i][1] = input[i][1].split("=")
        input[i][1][1] = input[i][1][1].split("..")
        var fx = parseInt(input[i][1][1][0])
        if(fx < lowX){
            lowX = fx
        }
        if(fx > maxX){
            maxX = fx
        }
        var sx = parseInt(input[i][1][1][1])
        for(var j = fx; j <= sx; j++){
            coords.push({x: j, y: y})
        }
    }

}
console.log(lowX, lowY)
lowX -= 2
console.log(lowY)
maxX += 2
maxY += 2

console.log(maxX-lowX);
console.log(maxY);


var grid = makeArray(maxY, maxX-lowX, ".");

console.log("done");


function makeArray(w, h, val) {
    var arr = [];
    for(i = 0; i < h; i++) {
        arr[i] = [];
        for(j = 0; j < w; j++) {
            arr[i][j] = val;
        }
    }
    return arr;
}


for(var i = 0; i < coords.length; i++){  
    grid[coords[i].x-lowX-1][coords[i].y] = "#"
}
grid[500-lowX-1][0] = "+"

for(var i = 0; i < 10000; i++){
    for(var j = grid.length-1; j >= 0; j--){
        for(var k = grid[j].length-3; k >= 0; k--){
            if(grid[j][k] == "|"){
                if(grid[j][k+1] == "."||grid[j][k+1] == "|"){
                    grid[j][k+1] = "|"
                }else{
                    var hit = false
                    var l = 0
                    while(!hit){
                        l++
                        if(grid[j+l][k] == "#"){
                            hit = true
                        }
                        if(j+l == maxX){
                            break;
                        }
                        if(grid[j+l][k+1] == "."){
                            break
                        }
                    }
                    var hito = false
                    var m = 0
                    while(!hito){
                        m++
                        if(grid[j-m][k] == "#"){
                            hito = true
                        }
                        if(j-m == 0){
                            break;
                        }
                        if(grid[j-m][k+1] == "."){
                            break
                        }
                    }
                    m--
                    
                    if(hito&&hit){
                        for(var n = j-m; n < j+l; n++){
                            grid[n][k] = "~"
                        }
                    }else{
                        if(grid[j-1][k] == "."){
                            grid[j-1][k] = "|"
                        }else if(grid[j+1][k] == "."){
                            grid[j+1][k] = "|"
                        }
                    }
                }
            }else if(grid[j][k] == "+"){
                grid[j][k+1] = "|"
            }
        }
    }
}

console.log(grid);

var count = 0

for(var i = 0; i < grid.length; i++){
    for(var j = lowY; j < grid[i].length; j++){
        if(grid[i][j] == "~"||grid[i][j] == "|"){
            count++
        }
    }
}
console.log(count);
var count = 0

for(var i = 0; i < grid.length; i++){
    for(var j = lowY; j < grid[i].length; j++){
        if(grid[i][j] == "~"){
            count++
        }
    }
}
console.log(count);
/*console.log(grid.length);

for(var i = 0; i < grid.length; i++){
    console.log(grid[i].join(""));
    
}*/
