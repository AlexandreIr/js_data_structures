const Stack = require("./Stack")


function decimalToBinary(decimalNumb){
    const binaryStack=new Stack()
    let numb=decimalNumb
    let rem
    let binaryString=''

    while(numb>0){
        rem=Math.floor(numb%2)
        binaryStack.push(rem)
        numb=Math.floor(numb/2)
    }

    while(!binaryStack.isEmpty()){
        binaryString+=binaryStack.pop().toString()
    }

    return binaryString
}

function baseConverter(decNumb, base){
    const baseStock= new Stack()
    const digits='0123456789ABCDEFGHAIJKLMNOPQRSTUVWXYZ'
    let numb=decNumb
    let rem
    let baseString=''
    if(!(base>=2 && base<=36)){
        return undefined
    }
    while(numb>0){
        rem=Math.floor(numb%base)
        baseStock.push(rem)
        numb=Math.floor(numb/base)
    }

    while(!baseStock.isEmpty()){
        baseString+=digits[baseStock.pop()]
    }
    return baseString
}

console.log(decimalToBinary(323))
console.log(decimalToBinary(10))
console.log(decimalToBinary(1000))
console.log(baseConverter(100345, 35))
console.log(baseConverter(100345, 16))
console.log(baseConverter(100345, 99))