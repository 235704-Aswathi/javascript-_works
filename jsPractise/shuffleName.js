function shufflename(str){
   
    let String1=str.split(' ');
    let String2= String1.reverse().join(', ');
    // let String3=String2.join('');
    return String2;

}
console.log(shufflename('Donald Trump'));