function sumOfAllNumbers(arr){

    let count=0;
     for(let i=0; i<arr.length;i++){
         if(arr[i]%2==0){
             count =count+arr[i];
            
         }
     } return count;

}

console.log(sumOfAllNumbers([1,2,3,4,5,6]));