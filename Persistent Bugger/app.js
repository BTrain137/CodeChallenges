const persistence = function(num) {
    var string = num.toString();
    if(string.length > 1){
        while(string.length > 1) {
            var splitUp = string.split("");
            var newNum = 1;
            for(var i = 0; i < splitUp.length; i+=1){
                newNum = newNum * parseInt(splitUp[i]);
            }
            string = newNum.toString();
        }
    } 
    else {
        
    }
    return parseInt(string);
}

module.exports = persistence;