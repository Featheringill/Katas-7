//globals


const theArray = ["one","two","three","four","five"]
const theOtherArray = ["six","seven","eight","nine","ten"]
const nestedArray = ["one","two","three","four","five",["six","seven","eight","nine","ten"]]

function theCallback(theCurrentValue){
    return theCurrentValue.toUpperCase()
}

function secondCallback (theCurrentValue){
    return theCurrentValue.length
}

function checkForThree(theCurrentValue){
    if(theCurrentValue === "three"){
        return true
    }
    else return false
}


//begin katas


function newForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        let currentValue = array[i]
        callback(currentValue)
    }  
}
console.log(newForEach(theArray, theCallback))


function newMap(array, someFunction){
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        let currentValue = array[i]
        newArray.push(someFunction(currentValue))
    }
    return newArray
}
console.log(newMap(theArray,theCallback))
console.log(newMap(theArray, secondCallback))


function newSome(array, someFunction){
    let i
    for (let i = 0; i < array.length; i++){
        if(someFunction(array[i]) === true){
            return true
        }  
    }
    if(someFunction(array[i]) === false){
        return false
    }
}
console.log(newSome(theArray,checkForThree))


function newFind(array, someFunction){
    for (let i = 0; i < array.length; i++){
        if (someFunction(array[i]) === true){
            return array[i]
        }
    }
}
console.log(newFind(theArray,checkForThree))


function newfindIndex(array, someFunction){
    let i
    for (let i = 0; i < array.length; i++){
        if (someFunction(array[i]) === true){
            return [i]
        }
    }
    if (someFunction(array[i]) === false){
        return -1
    } 
}
console.log(newfindIndex(theArray,checkForThree))


function newEvery(array, someFunction){
    let testArray = []
    for (let i = 0; i < array.length; i++){
        if (someFunction(array[i]) === false){
            return false
        }
        if (someFunction(array[i]) === true){
            testArray.push(array[i])
        }
    }
    if (testArray === theArray){
        return true
    }
}
console.log(newEvery(theArray,checkForThree))


function newfilter(array, someFunction){
    let testPassers = []
    for (let i = 0; i < array.length; i++){
        if (someFunction(array[i]) === true){
            testPassers.push(array[i])
        }
    }
    return testPassers
}
console.log(newfilter(theArray,checkForThree))


function newConcat(array, array2){
    let newArray = []
    for (let i = 0; i < array.length; i++){
        newArray.push(array[i])
    }
    for (let k = 0; k < array2.length; k++){
        newArray.push(array2[k])
    }
    return newArray
}
console.log(newConcat(theArray,theOtherArray))


function newIncludes(array){
    let i
    let testValue = "three"
    for (i = 0; i < array.length; i++){
        if (array[i] === testValue){
            return true
        }
    }
    if (array [i] !== testValue){
        return false
    }
}
console.log(newIncludes(theArray))
console.log(newIncludes(theOtherArray))


function newIndexOf(array){
    let i
    let testValue = "three"
    for (i = 0; i < array.length; i++){
        if (array[i] === testValue){
            return [i]
        }
    }    
    if (array[i] !== testValue){
        return -1
    }    
}
console.log(newIndexOf(theArray))
console.log(newIndexOf(theOtherArray))


function newJoin(array){
    let i
    let newString = ""
    let separator = "-"
    for (i = 0; i < array.length; i++){
        newString += array[i] + separator
    }
    return newString
}
console.log(newJoin(theArray))


function newSlice(array){
    let newArray = []
    let startIndex = 1
    let endIndex = 3
    for (i = 0; i < array.length; i++){
        if (i >= startIndex & i < endIndex){
            newArray.push(array[i])
        }
    }
    return newArray
}
console.log(newSlice(theArray))


// function newFlat(array){
//     let newArray = []
//     for (i = 0; i < array.length; i++){
//         newArray.push(array[i])
//         console.log(newArray)
//         if (array[i] instanceof Array){
//             newArray.(array[i])
//             console.log(newArray)
//             for (k = 0; k < array[i].length; k++){
//                 newArray.push[k]
//             }
//         }
//     }
//     console.log(newArray)
//     return newArray
// }
// console.log(newFlat(nestedArray))

//Your functions should take an array and a callback function as an argument. Here's an example 
//function declaration:
//function newForEach (arrayToIterate, callback) {
//The assessment description does say that your replacement function should return the same thing 
//as the original array function returns. Make sure your code behaves this way.
//If your replacement functions don't return anything, then you've done something wrong.

