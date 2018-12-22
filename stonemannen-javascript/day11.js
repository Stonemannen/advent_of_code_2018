var serial = 1308

var highestPower = 0;
var cordinates = {x: 0, y: 0, size: 0}
for(var k = 1; k <= 300; k++){
    
    for(var i = 1; i <= 300-2; i++){
        for(var j = 1; j <= 300-2; j++){
            var power = 0;
            for(var l = 0; l < k; l++){
                for(var m = 0; m < k; m++){
                    power+= getPowerLevel(i+l,j+m);
                }
            }
            if(power > highestPower){
                highestPower = power
                cordinates.x = i
                cordinates.y = j
                cordinates.size = k
            }        
        }
    }
    console.log("high" + highestPower)
    console.log(cordinates)
    
}


console.log(cordinates)

function getPowerLevel(x, y){
    var rackID = x+10
    var powerLevel = rackID * y
    powerLevel+= serial
    powerLevel = powerLevel * rackID
    powerLevel = powerLevel.toString()
    powerLevel = powerLevel.split("")
    powerLevel = parseInt(powerLevel[powerLevel.length-3])
    powerLevel-= 5
    return powerLevel
}
