const aNumber = 123.45
console.log('the type of', aNumber, 'is', typeof aNumber)

const anInteger = 123
console.log('the type of', anInteger, 'is', typeof anInteger)

const aString = 'some text'
console.log('The type of', aString, 'is', typeof aString)


const otherValue = [true, undefined, null]

for(let value of otherValue){
    console.log('the type of', value, 'is', typeof value)
}