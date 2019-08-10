
// reverse an integer, can be negative

var reverse = function(x) {
    let str = x + "";
    let negative = false;
    if (str[0] === '-') {
        negative = true;
        str = str.split('');
        str.shift();
        str = str.join('')
    }
    let arr = str.split('');
    let reved = arr.reverse()

    reved = reved.join('');
    let newNum = parseInt(reved);
    if (negative) {
        return newNum * -1;
    }
    return newNum;
};

// console.log(reverse(-321));


var isPalindrome = function(x) {
    let str = x + "";
    let arr = str.split('');
    let backward = arr.reverse().join('');
    let forward = arr.reverse().join('')
    if (forward === backward) {
        return true;
    }
    return false;
};

//important node: calling .reverse() will actually reverse the arr not just the new variable


// console.log(isPalindrome(-121));

var lengthOfLastWord = function(s) {
    let words = s.split(' ');
    let ansArr = [];
    words.forEach(word => {
      if (word.length > 0) {
        ansArr.push(word);
      }
    })
    let last = ansArr[ansArr.length - 1];
    let arrOfLast = last.split('');
    return arrOfLast.length;
};

console.log(lengthOfLastWord('a '))

