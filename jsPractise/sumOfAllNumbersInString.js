function sumOfAllNumbersInString(str){

    let String1=str.split(' ');
    let res=0;
    for(let i=0;i<str.length;i++){
        if(String1[i])
        {
           res=res+String1[i];
        }
    }return res;

}
console.log(sumOfAllNumbersInString('hello 8 world 2'));

