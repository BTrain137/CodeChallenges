if (!String.prototype.splice) {
    /**
     * {JSDoc}
     *
     * The splice() method changes the content of a string by removing a range of
     * characters and/or adding new characters.
     *
     * @this {String}
     * @param {number} start Index at which to start changing the string.
     * @param {number} delCount An integer indicating the number of old chars to remove.
     * @param {string} newSubStr The String that is spliced in.
     * @return {string} A new string with the spliced substring.
     */
    String.prototype.splice = function(start, delCount, newSubStr) {
        if(newSubStr === undefined) {
            newSubStr = "";
        }
        return this.slice(0, start) + newSubStr + this.slice(start + Math.abs(delCount));
    };
}

/**
 * Multiply 2 numbers can be negative
 * @param {String} n  String representing number
 * @param {String} o  String representing number
 */
const multiply = function(n, o){

    let string1, string2, 
    negative1 = false, negative2 = false, arr = [];

    if(n[0] === "-") {
        negative1 = true;
        string1 = n.substr(1);
    }
    else {
        string1 = n;
    }
    if(o[0] === "-") {
        negative2 = true;
        string2 = o.substr(1);
    } 
    else {
        string2 = o;
    }

    const decimal1 = string1.indexOf(".");
    const totalDeci1 = string1.length - decimal1 - 1;
    let isDecimal1 = false;

    const decimal2 = string2.indexOf(".");
    const totalDeci2 = string2.length - decimal2 - 1;
    let isDecimal2 = false;

    if(decimal1 > -1) {
        string1 = string1.splice(decimal1, 1);
        isDecimal1 = true;
    }
    if(decimal2 > -1) {
        string2 = string2.splice(decimal2, 1);
        isDecimal2 = true;
    }
    
    string1 = string1.split``.reverse().join("");
    string2 = string2.split``.reverse().join("");

    let i;
    for(i = 0; i < string1.length; i+=1) {
        let j;
        for(j = 0; j < string2.length; j+=1) {
           arr[j+i] = ~~arr[j+i] + +string1[i] * +string2[j] + "";
        }
    }

    let z;
    let tempStr = "";
    for(z = 0; z < arr.length; z+=1) {
        let digit = arr[z] % 10;
        let carry = ~~(arr[z] / 10);

        if(z < arr.length - 1) {
            arr[z+1] = +arr[z+1] + carry + "";
            tempStr = digit + tempStr;
        }
        else {
            tempStr = arr[z] + tempStr;
        }
    }

    // Add in decimals
    let totalDecimal = 0;
    if(isDecimal1) {
        totalDecimal += totalDeci1;
    }
    if (isDecimal2) {
        totalDecimal += totalDeci2;
    }

    if (totalDecimal > 0) {
        tempStr = tempStr.splice(-totalDecimal, 0, ".");
    }

    // Remove begining 0's
    while (tempStr[0] === "0" && tempStr[1] !== ".") {
        tempStr = tempStr.substr(1);
    }

    // Remove ending 0's
    if(isDecimal1 || isDecimal2) {
        while(tempStr[tempStr.length-1] === "0" && tempStr[tempStr.length-2] !== "."){
            tempStr = tempStr.slice(0, -1);
        }
    }

    if(tempStr[tempStr.length - 1] === "0" && tempStr[tempStr.length - 2] === ".") {
        tempStr = tempStr.slice(0, -2);
    }

    if(+tempStr === 0) {
        return "0";
    }

    if(negative1 && !negative2 || !negative1 && negative2) {
        tempStr = "-" + tempStr;
    }

    return tempStr;

}

// console.log(multiply("30", "69")) // "2070"
// console.log(multiply("39", "69")) // "2691" ["351", 2340]
// console.log(multiply("11", "85")) // "935" [5, 80, 50, 800]
// console.log(multiply("-0.00", "0.0000")); // "0"

module.exports = multiply;

/** 
 *  Successful, just refactoring for final submit
    let string1;
    let string2;
    let negative1 = false;
    let negative2 = false;
    let arr = [];

    if(n[0] === "-") {
        negative1 = true;
        string1 = n.substr(1);
    }
    else {
        string1 = n;
    }
    if(o[0] === "-") {
        negative2 = true;
        string2 = o.substr(1);
    } 
    else {
        string2 = o;
    }

    const decimal1 = string1.indexOf(".");
    const totalDeci1 = string1.length - decimal1 - 1;
    let isDecimal1 = false;

    const decimal2 = string2.indexOf(".");
    const totalDeci2 = string2.length - decimal2 - 1;
    let isDecimal2 = false;

    if(decimal1 > -1) {
        string1 = string1.splice(decimal1, 1);
        isDecimal1 = true;
    }
    if(decimal2 > -1) {
        string2 = string2.splice(decimal2, 1);
        isDecimal2 = true;
    }
    
    string1 = string1.split``.reverse().join("");
    string2 = string2.split``.reverse().join("");

    let i;
    for(i = 0; i < string1.length; i+=1) {
        let j;
        for(j = 0; j < string2.length; j+=1) {
           arr[j+i] = ~~arr[j+i] + +string1[i] * +string2[j] + "";
        }
    }

    let z;
    let tempStr = "";
    for(z = 0; z < arr.length; z+=1) {
        let digit = arr[z] % 10;
        let carry = ~~(arr[z] / 10);

        if(z < arr.length - 1) {
            arr[z+1] = +arr[z+1] + carry + "";
            tempStr = digit + tempStr;
        }
        else {
            tempStr = arr[z] + tempStr;
        }
    }

    // Add in decimals
    let totalDecimal = 0;
    if(isDecimal1) {
        totalDecimal += totalDeci1;
    }
    if (isDecimal2) {
        totalDecimal += totalDeci2;
    }

    if (totalDecimal > 0) {
        tempStr = tempStr.splice(-totalDecimal, 0, ".");
    }

    // Remove begining 0's
    while (tempStr[0] === "0" && tempStr[1] !== ".") {
        tempStr = tempStr.substr(1);
    }

    // Remove ending 0's
    if(isDecimal1 || isDecimal2) {
        while(tempStr[tempStr.length-1] === "0" && tempStr[tempStr.length-2] !== "."){
            tempStr = tempStr.slice(0, -1);
        }
    }

    if(tempStr[tempStr.length - 1] === "0" && tempStr[tempStr.length - 2] === ".") {
        tempStr = tempStr.slice(0, -2);
    }

    if(+tempStr === 0) {
        return "0";
    }

    if(negative1 && !negative2 || !negative1 && negative2) {
        tempStr = "-" + tempStr;
    }

    return tempStr;
 */