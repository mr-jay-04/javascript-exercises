const sumAll = function(num1,num2) {
    let sum = 0;

    // if (Number.isNaN(num1) || Number.isNaN(num2)) return "ERROR";

    if (num1<0 || num2<0) return "ERROR";

    if (!(Number.isInteger(num1) && Number.isInteger(num2))) return "ERROR";



    let lowerLimit= num1>=num2? num2 : num1;
    let upperLimit= num1>=num2? num1 : num2;
    for (i=lowerLimit; i<=upperLimit; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
