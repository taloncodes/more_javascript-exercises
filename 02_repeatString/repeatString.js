const repeatString = function(string, num) {

    let answer = string;

    if(!num){
        answer = '';
        return answer
    }

    else if(num < 0){
        answer = 'ERROR';
        return answer;
    }

    while (num > 1) {
        answer = answer + string
        num--;
    }

    return answer
};

// Do not edit below this line
module.exports = repeatString;
