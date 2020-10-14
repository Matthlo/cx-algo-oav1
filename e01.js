
//With the exception of the first word, in all of the subsequent words, the first letter of each word is capitalized.
//So we just have to count the capitalized letters and add the 1 for the first word
var word = 1 ;
charStart = 60;
charEnd = 90;

function capitalized(char) {
    return (char >= charStart && char <= charEnd)
}

function howManyCamelCase(str = '') 
{
    for (i = 0; i < str.length; i++)
    {

        if (capitalized(str.charCodeAt(i)))
        {
            word += 1
        }
        else word == word
    }
    return word;
}



//test zone
console.log(howManyCamelCase('testMattPoIUbadj')) 
