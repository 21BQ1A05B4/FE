// <================== JOSEPH KORIVI ===================>
function insert(num){
    document.joe.result.value += num;
}

function insertOP(){
    document.joe.result.value +='(';
}

function insertCP(){
    document.joe.result.value +=')';
}

function equal(){
    var exp = document.joe.result.value;
    if(exp){
        document.joe.result.value = eval(exp);
    }
}

const getOperatorFromRight = (s) => {
    let i = s.length - 1;
    while (i >= 0) {
        if (s[i] === '+' || s[i] === '-' || s[i] === '*' || s[i] === '/' || s[i] === ')' || s[i] === '(') {
        return s[i+1];
        }
        i--;
    }
    return '';
};

function clearEntry(){
    var exp = document.joe.result.value;
    let op = getOperatorFromRight(exp);
    if(op ===''){
        exp='';
    }
    
    else{
        exp = exp.substring(0, exp.indexOf(op));
    }
    document.joe.result.value = exp;
}