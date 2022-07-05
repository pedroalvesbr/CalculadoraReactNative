/*
//devolve a soma dos 2 menores numeros positivos do array

const somadosMeno = (array) => {
    let ordenando = [...array].sort((a,b) => a-b)
    let arrayPositivo = []
    for(let i=0; i<ordenando.length; i++){
        if(ordenando[i] > 0) {
            arrayPositivo.push(ordenando[i])
        }
    }
    console.log(arrayPositivo)
    console.log( (arrayPositivo[0] + arrayPositivo[1]))
}

somadosMeno([19,5,-1,-2,42,2,77])
*/


//The goal of this exercise is to convert a string to a new string where each character in the new string
// is "(" -> if that character appears only once in the original string,
// is ")" -> if that character appears more than once in the original string.
// Ignore capitalization when determining if a character is a duplicate.

/*
function duplicateEncode(word){
    const compartivo = word.toLowerCase()
    const char ={}
    var auxiliar=[]
    

    for(let i=0; i<compartivo.length; i++){
        var current = compartivo[i]
        char[current] = (char[current] || 0) + 1
    }
    console.log(char)
    for(let i=0; i<compartivo.length; i++){
        var current = compartivo[i]
        char[current] = (char[current] || 0) + 1
        char[current] == 2 ? auxiliar.push('(') : auxiliar.push(')')            
    }
    console.log(char)

    console.log( auxiliar.join().replace(/,/g,''))
}

duplicateEncode(' recede')



/*
// verificar se um numero é quadrado

var isSquare = function(n){
    raizQuadrada = Math.sqrt(n)    
    return raizQuadrada % 1 === 0 ? 'é quadrado pois('+ raizQuadrada+'*'+raizQuadrada+')' : 'não é quadrado'
  }

isSquare(24)
*/

//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
//solution('abc', 'bc') // returns true
//solution('abc', 'd') // returns false

function solution(str, ending){
    strReverso = []
    endingReverso = []

    for(let i=str.length-1; i > -1 ; i--){
        strReverso.push(str[i])      
    }
    for(let i=ending.length-1; i >-1; i--){
        endingReverso.push(ending[i])
    }
    let reversedEnding = endingReverso.join().replace(/,/g,'')
    let reversedStr = strReverso.join().replace(/,/g,'')

    console.log(reversedEnding)
    console.log(reversedStr)
    
    comparacao = reversedStr.substr(0, ending.length)
    
    if(comparacao === reversedEnding){
        console.log('true')
    }else{
        console.log('false')
    }
    
  }
solution('abcde','cde')