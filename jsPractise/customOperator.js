function customOperator(num1, num2, operator){

    let result;
    switch(operator){
        
        case '+': return num1+num2;
        break;
        case '-': return num1-num2;
        break;
        case '*': return num1*num2;
        break
        case '/': return num1/num2;
        break;
        default:
            console.log("invalid")
    }  return result;

}
console.log(customOperator(5, 10, '+'));
console.log(customOperator(10, 10, '-'));
console.log(customOperator(10, 10, '*'));
console.log(customOperator(10, 10, '/'));
