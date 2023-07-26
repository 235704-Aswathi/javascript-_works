function sumOfAllNumbers(arr){

    let count=0;
    for(let i=0; i<arr.length; i++){
        count= count+arr[i];
        
    }return count;
}
console.log(sumOfAllNumbers([1,2,3,4]));