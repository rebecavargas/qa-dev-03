/**
 * Created by rebecavargas on 6/15/2015.
 */



//var countWords = function(paragraph)
//{
//    return paragraph.split(' ').length;
//}
//
//console.log('The paragraph has ', countWords('hello world'), 'words');
/*
var printNowsDateInfo = function()
{
    var now = new Date();
    var days = ['Sunday', 'Monday'];

    var hour = now.getHours() > 12 ? (now.getHours() - 12) + 'PM' : (now.getHours()) + 'AM';

    console.log('Today is', days[now.getDay()]);
    console.log('Current time is', hour, now.getMinutes(),now.getSeconds());
    //var date = new Date;
    //return date.getDay();
    //return date.getTimezoneOffset();
}
console.log(printNowsDateInfo());
//console.log('Today is ' date());

*/
var initRange = 20;
var endRange = 50;

var getFirstCapicua = function(offset, limit)
{
    for (var i = offset; i <= limit; i++) {
        if (isCapicua(i)) {
            break;
        }
    };
    return i;

};
var isCapicua = function (n)
{
    return n == Number.parseInt(n.toString().split('').reverse().join(''));

};

console.log('First Capicua between', initRange, 'and'. endRange, 'is',getFirstCapicua(initRange,endRange));

/*
function Palindrome(candidateNumber, maxNumberOfIterations) {
    'use strict';

    var number = candidateNumber,
        maxIterations = maxNumberOfIterations,
        currentIteration = 0;

    function reverse(n) {
        return parseInt(n.toString().split('').reverse().join(''), 10);
    }

    function isPalindrome(n) {
        return n.toString() === reverse(n).toString();
    }

    this.sumIsPalindrome = function () {
        currentIteration += 1;
        if (currentIteration > maxIterations) {
            return false;
        }

        number += reverse(number);
        if (isPalindrome(number)) {
            return true;
        }
        return this.sumIsPalindrome(number);
    };

};

var Calculator = function(){};

Calculator.prototype.sum = function(){

    var _sum = function(numbers, pos){

        if (!pos)
            pos = 0;

        if (pos == numbers.length - 1)
            return numbers[pos];

        return numbers[pos] + _sum(numbers, pos + 1);
    };

    console.log('ARGS[0]', arguments[0]);
    if (typeof arguments[0] == 'object')
        return _sum(arguments[0]);

    return _sum(arguments);
};

Calculator.prototype.eval = function () {
    console.log('SUM:', this.sum(arguments));
    //console.log('AVG:', this.agerage(...));
    //console.log('MAX:', this.max(....));
    //console.log('MIN:', this.min(....));
};

*/
/*
var isEvenNumber = function(n)
{
     return n%2 == 0 ;
}
var getOddNumbers = function(n)
{
    var evenNumbers = [];
    for(var i = 1; i < n * 2; i + 2)
    {
        if(isEvenNumber(i))
        {
            continue;
        }
        evenNumbers.push((i))
    };
    return evenNumbers;
};

/*
var getEvenNumbers = function(n)
{
    for(var i; n.length; i++)
    {
        if(n%2 == 0)
            return n;
    }
}
*/
//var n = 5;
//console.log('First', n, 'even number are', getOddNumbers(n));
//console.log('First', n ,' even number are', getEvenNumbers(n));
var n = 5;

var factorial = function(n)
{
    var res = 1;

    if(n == 0)
        return 1;

    for (var i = 1; i <= n; i++)
    {
        res = res * i;
    }

    return res;
};

console.log('Factorial of', n, 'is',  factorial(n));



/*var sayHello function(name){
    console.log('hello' + name + '!');
};
sayHello('pepe');

//funcion anonima
(function(name){
    console.log('hello' + name + '!');
})
('pepe');


var getSayHello = function(){

    console.log('executing getsayhello');

    return function(name){

        console.log('Hello' +name+ '!');
    };
};

var SayHello = getSayHello();
*/


(function(){

    console.log('executing getsayhello');

    return function(name){

        console.log('Hello' +name+ '!');
    };
})();

var SayHello= (function(){

    console.log('executing getsayhello');

    return function(name){

        console.log('Hello' +name+ '!');
    };
}) ();



