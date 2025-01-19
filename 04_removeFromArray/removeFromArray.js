const removeFromArray = function(array, ...numbers) {

    const fixedArray = [];
    //set match variable to false
    //move through the array from 0 till < length
    //each time check that it matches none of the arguments in [numbers]
    //if a match is found set match variable to true
    //if match, break
    //else
    //push

    for(let arrayIndex = 0; arrayIndex < array.length; arrayIndex++){

        let matchedValue = false;

        for (let argIndex = 0; argIndex < numbers.length; argIndex++){

            if (array[arrayIndex] === numbers[argIndex]){
                matchedValue = true;
                break;
            }
        }   

        if (!matchedValue) {

            fixedArray.push(array[arrayIndex]);
        }   
    }

    return fixedArray;

};



// Do not edit below this line
module.exports = removeFromArray;
