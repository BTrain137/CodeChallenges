function parseMolecule1(formula) {
    //Loop through string
    //Set starting value
    //If the current index is a number
    //number next to string
    //Take string if cap as key
    //number as value
    let starting = 0;
    let current = 0;
    let inner = 0;
    let multiplier1 = false;
    let multiplier2 = false;
    let molecule = {};

    let multiplierNum1 = formula[formula.indexOf(')') + 1];
    let multiplierNum2 = formula[formula.indexOf(']') + 1];

    for (let i = 0; i < formula.length; i++) {
        if (formula[i] === formula[i].toUpperCase()) {
            if(multiplier2){
                if (multiplier1){
                    let element = formula.slice(starting, i);
                    let curElemValue = molecule[element] ? molecule[element] : 1;
                    formula[i] = curElemValue * multiplier2 * multiplier1;
                    starting = i;
                } else {
                    let element = formula.slice(starting, i);
                    let curElemValue = molecule[element] ? molecule[element] : 1;
                    formula[i] = curElemValue * multiplier2;
                    starting = i;
                }
            }
            else {
                let element = formula.slice(starting, i);
                molecule[element] = 1;
                starting = i; 
            }
        }
        else if(isNaN(formula[i])){
            let element = formula.slice(starting, i);
            molecule[element] = i;
            starting = i; 
        } else if (formula[i] === '[') {
            if(starting + 1 !== i ) {
                let element = formula.slice(starting, i);
                molecule[element] = 1;
                starting = i;
                multiplier2 = true;
            }
        } else if (formula[i] === '(') {
            if(starting + 1 !== i ) {
                let element = formula.slice(starting, i);
                molecule[element] = 1;
                starting = i;
                multiplier1 = true;
            }
        }
    }

    return molecule;
}

function parseMolecule(formula) {
    //Max number of symbols in an element is 2
    var multiplier = false;
    var chemicalFormula = '';
    var molecule = {}
    var number = 0;
    var multiplierArray = [];

    for(var i = 0; i<formula.length; i++) {

        if(typeof formula.charAt(i) === 'string') {
            if (!chemicalFormula) {
                chemicalFormula += formula.charAt(i);
            } else if (formula.charAt(i) === formula.charAt(i).toUpperCase()) {
                molecule[chemicalFormula] = 1;
            }
        }
        else if (typeof formula.charAt(i) === 'number') {
            if(multiplier) {

            } else {
                number = formula.charAt(i);
                molecule[chemicalFormula] = number;
            }
        }
        else if(formula.charAt(i) === '('){
            multiplier = true;
        }
        else if(formula.charAt(i) === ')'){
            multiplier = false;
        }

    }

}

function parseMolecule(formula) {
    var molecule = {};
    var chemicalName = '';
    var multiplier = false;
   
    for(var i = 0; i <formula.length; i++) {
        
        if(typeof parseInt(formula.charAt(i)) === 'number'){
            if(molecule[chemicalName] === 1){
                molecule[chemicalName] = parseInt(formula.charAt(i));
            }
            else {
                molecule[chemicalName] += parseInt(formula.charAt(i))
            }
        }
        else if(formula.charAt(i) === formula.charAt(i).toUpperCase()) {
            if(chemicalName){
                if(molecule[chemicalName]) {
                    molecule[chemicalName] += 1;        
                } 
                else {
                    molecule[chemicalName] = 1;
                }
            }
            else {
                chemicalName = formula.charAt(i);
            }
        } 
        else if (formula.charAt(i) === formula.charAt(i).toLowerCase()) {
            chemicalName += formula.charAt(i);
        } 
        else if (formula.charAt(i) === '(') {
            multiplier = true;
            if(molecule[chemicalName]) {
                molecule[chemicalName] += 1;        
            } 
            else {
                molecule[chemicalName] = 1;
            }
        }
    }

    return molecule;
}
