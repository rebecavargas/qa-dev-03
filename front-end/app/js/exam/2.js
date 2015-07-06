/**
 * Created by rebecavargas on 6/29/2015.
 */

var Hanging = function ()
{
    var matriz = [8,6];
    var word =null;
    var attempts = 10;
    var win = 0;
    var play = true;
    var letter = "";
    var letterchar ='';
    var count = 0;
    while(play == true)
    {
        word = getWord(word);

       var  vectorword = word;
        var blankspace = [word.length];

        for(var i = 0; i < word.length; i++)
        {
            blankspace[i] ='_';
        }
        while(attempts <= 10)
        {
            var letterMoreOne = true;
            var table = table(matriz, attempts);
            showMatriz(matriz);
            showBlankSpace(blankspace);
            while (letterMoreOne == true)
            {
                Console.log('Enter the letter');
                letter =   Console.ReadLine();
                if (letter.length == 1)
                {
                    letterchar = Convert.ToChar(letter);
                    letterMoreOne = false ;
                }
            }

            for (var i = 0; i < blankspace.Length; i++)
            {
                if (letterchar == blankspace[i])
                {
                    console.log('The letter already exists')
                    count++;
                }
                else
                {
                    if (letterchar== vectorword[i])
                    {
                        blankspace[i] = letterchar;
                        count++;
                        win++;
                    }
                }
            }
            if (count == 0)
            {
                attempts++;
            }
            if (win == word.Length) break;
            else count = 0;
        }

    }
    var getWord = function(word)
    {
        var words = ["Program", "JavaScript","Monitoring","CUIT"];
        //return word(Math.Random());
        word = Math.random(words);
        return word;
    }

}













