/**
 * Created by rebecavargas on 6/12/2015.
 */
//Make al these functions to be part of a class

//var calculate = function (n1, n2){
    //console.log('SUM:', sum(..));


//};

var Calculate = function ()
{
    this.sum = function()
    {
        var arg = Array.prototype.slice.call(arguments);
        //document.write(arg);
        //console.log(arg);
        var result = this.recursiveSum(arg, arg.length-1);

        document.write(result + '<br/>');
        console.log(result);
    };

    this.recursiveSum = function (myArray,position)
    {
        if (position < 0)
        {
            return 0;
        }
        else
        {
            return myArray[position] + this.recursiveSum(myArray, position -1);
        }
    };

    this.average =  function()
    {
        var arg = Array.prototype.slice.call(arguments);

        var result = this.recursiveSum(arg,arg.length-1) / arg.length;

        document.write(result + '<br/>');
        console.log(result);
    };

    this.max = function()
    {
        var arg = Array.prototype.slice.call(arguments);

        var result = arg.sort(function(a, b){
            return a-b;
        });

        document.write(result[arg.length-1] + '<br/>');
        console.log(result[arg.length-1]);
    };

    this.min = function()
    {
        var arg = Array.prototype.slice.call(arguments);

        var result = arg.sort(function(a, b){
            return a-b;
        });

        document.write(result[0] + '<br/>');
        console.log(result[0]);
    };

    //this.allOperations = function()
    //{
    //    this.sum(arguments.pop());
    //    this.average(arguments);
    //    this.max(arguments);
    //    this.min(arguments);
    //};
};



