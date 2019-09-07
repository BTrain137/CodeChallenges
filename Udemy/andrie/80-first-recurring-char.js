//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

function firstRecurringCharacter(input) {
  let obj = {}
  for(let key of input) {
    if(!obj[key]) {
      obj[key] = true;
    }
    else {
      return key;
    }
  }

  return undefined;
}

function firstRecurringCharacter2(input) {
    const set = new Set();
    for(let i = 0; i < input.length; i+=1) {
        if(!set.has(input[i])) {
            set.add(input[i]);
        }
        else {
            return input[i];
        }
    }

    return undefined;

}

var array = [2,5,1,2,3,5,1,2,4];  // 2
var array2 = [2,1,1,2,3,5,1,2,4]; // 1
var array3 = [2,3,4,5];           // undefined
var bonus = [2,5,5,2,3,5,1,2,4];  // 5
console.log(firstRecurringCharacter2(bonus));

