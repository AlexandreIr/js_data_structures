const Deque = require("./Deque");

function palindromoChecker(palavra){
    if(palavra===undefined||palavra===null||
        (palavra!==null && palavra.length<2)
        ||palavra.includes(/d\W/g)){
            return false;
    }

    const deque= new Deque();
    const lowerString=palavra.toLocaleLowerCase().split(' ').join('');
    let isEqual=true;
    let firstChar, lastChar;
    for(let i=0; i<lowerString.length; i++){
        deque.addBack(lowerString.charAt(i))
    }
    while(deque.size()>1 && isEqual){
        firstChar=deque.removeFront();
        lastChar=deque.removeBack();
        if(firstChar!==lastChar){
            isEqual=false;
        }
    }
    return isEqual;
}

function simplePalindromo(palavra){
    if(palavra.length>2 && 
    !palavra.includes("/[0-9]/")){
        const palavraMin=palavra.toLocaleLowerCase().split(/\W/gm).join('')
        let palavraContrario=''
        for(let i=palavraMin.length; i>=0; i--){
            palavraContrario+=palavraMin.charAt(i)
        }
        if(palavraMin==palavraContrario){
            return true
        }else {
            return false
        }
    }else {
    return undefined
    }
}
