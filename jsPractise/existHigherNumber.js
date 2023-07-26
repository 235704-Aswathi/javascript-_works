function existHigherNumber(arr, n){
 
   
   for(let i=0; i<arr.length; i++){
       if(arr[i]>=n){
           return true;
       }
       
   }return false;

}
console.log(existHigherNumber([1,2,3,4,5],3));