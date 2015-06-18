/**
 * Created by rebecavargas on 6/15/2015.
 */



//var countWords = function(paragraph)
//{
//    return paragraph.split(' ').length;
//}
//
//console.log('The paragraph has ', countWords('hello world'), 'words');

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
