const fs = require("fs");
var input = fs.readFileSync("input13.txt", "utf8");
input = input.split("\n");

for (var i = 0; i < input.length; i++) {
  input[i] = input[i].split("");
}

var carts = [];

for (var i = 0; i < input.length; i++) {
  for (var j = 0; j < input[i].length; j++) {
    if (input[i][j] == "^") {
      carts.push({ x: j, y: i, z:"^", state: 0});
      input[i][j] = "|";
    } else if (input[i][j] == "v") {
      carts.push({ x: j, y: i, z: "v", state: 0});
      input[i][j] = "|";
    } else if (input[i][j] == "<") {
      carts.push({ x: j, y: i, z: "<", state: 0});
      input[i][j] = "-";
    } else if (input[i][j] == ">") {
      carts.push({ x: j, y: i, z: ">", state: 0});
      input[i][j] = "-";
    }
  }
}

carts.sort(compare);
console.log(carts);
function compare(a, b) {
  if (a.y < b.y) return -1;
  if (a.y > b.y) return 1;
  if (a.y == b.y) if (a.x < b.x) return -1;
  return 0;
}
var crash = false
for(var tick = 0; tick < 2000; tick++){
    if(crash){
        break;
    }
    console.log(tick)
    for(var i = 0; i < carts.length; i++){
        console.log(carts[i])
        if(carts[i].z == "^"){ 
            if((input[carts[i].y-1][carts[i].x] == "|")){
                carts[i].y -= 1
            }else if(input[carts[i].y-1][carts[i].x] == "+"){
                if(carts[i].state == 0){
                    carts[i].y -= 1
                    carts[i].z = "<"
                    carts[i].state++
                }else if(carts[i].state == 1){
                    carts[i].y -= 1
                    carts[i].state++
                }else if(carts[i].state == 2){
                    carts[i].y -= 1
                    carts[i].z = ">"
                    carts[i].state=0
                }
            }else if(input[carts[i].y-1][carts[i].x] == "/"){
                carts[i].y -= 1
                carts[i].z = ">"
            }
            else if(input[carts[i].y-1][carts[i].x] == "\\"){
                carts[i].y -= 1
                carts[i].z = "<"
            }
        }else if(carts[i].z == ">"){ 
            if((input[carts[i].y][carts[i].x+1] == "-")){
                carts[i].x += 1
            }else if(input[carts[i].y][carts[i].x+1] == "+"){
                if(carts[i].state == 0){
                    carts[i].x += 1
                    carts[i].z = "^"
                    carts[i].state++
                }else if(carts[i].state == 1){
                    carts[i].x += 1
                    carts[i].state++
                }else if(carts[i].state == 2){
                    carts[i].x += 1
                    carts[i].z = "v"
                    carts[i].state=0
                }
            }else if(input[carts[i].y][carts[i].x+1] == "/"){
                carts[i].x += 1
                carts[i].z = "^"
            }
            else if(input[carts[i].y][carts[i].x+1] == "\\"){
                carts[i].x += 1
                carts[i].z = "v"
            }
        }else if(carts[i].z == "v"){ 
            if((input[carts[i].y+1][carts[i].x] == "|")){
                carts[i].y += 1
            }else if(input[carts[i].y+1][carts[i].x] == "+"){
                if(carts[i].state == 0){
                    carts[i].y += 1
                    carts[i].z = ">"
                    carts[i].state++
                }else if(carts[i].state == 1){
                    carts[i].y += 1
                    carts[i].state++
                }else if(carts[i].state == 2){
                    carts[i].y += 1
                    carts[i].z = "<"
                    carts[i].state=0
                }
            }else if(input[carts[i].y+1][carts[i].x] == "/"){
                carts[i].y += 1
                carts[i].z = "<"
            }
            else if(input[carts[i].y+1][carts[i].x] == "\\"){
                carts[i].y += 1
                carts[i].z = ">"
            }
        }else if(carts[i].z == "<"){ 
            if((input[carts[i].y][carts[i].x-1] == "-")){
                carts[i].x -= 1
            }else if(input[carts[i].y][carts[i].x-1] == "+"){
                if(carts[i].state == 0){
                    carts[i].x -= 1
                    carts[i].z = "v"
                    carts[i].state++
                }else if(carts[i].state == 1){
                    carts[i].x -= 1
                    carts[i].state++
                }else if(carts[i].state == 2){
                    carts[i].x -= 1
                    carts[i].z = "^"
                    carts[i].state=0
                }
            }else if(input[carts[i].y][carts[i].x-1] == "/"){
                carts[i].x -= 1
                carts[i].z = "v"
            }
            else if(input[carts[i].y][carts[i].x-1] == "\\"){
                carts[i].x -= 1
                carts[i].z = "^"
            }
        }
        for(var j = 0; j < carts.length; j++){
            if(j != i){
                if(carts[i].x == carts[j].x&&carts[i].y == carts[j].y){
                    console.log(i + " " + carts[i])
                    console.log(j + " " + carts[j])
                    console.log("crash " + carts[i].x + " " + carts[i].y)
                    crash = true
                    break
                }
            }
        }
    }
    
carts.sort(compare);
}