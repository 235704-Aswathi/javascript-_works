
function readInput(){  
      const num=prompt("enter the no elements");
    this.inputValidator(num);
}

function inputValidator(num){
    const numbers=num.trim().split(",");
    for(let i=0; i<numbers.length; i++){
        if(isNaN(numbers[i])){  
             console.log("Invalid input! Please enter valid numbers separated by comma.");
        }
    }
    const isConsecutive = this.checkForConsecutive(numbers);
    if (isConsecutive) {
      this.outputPrinter("Given numbers are Consecutive");
    } else {
      this.outputPrinter("Given numbers are not Consecutive");
    }
     
}

function checkForConsecutive(numbers){
   const sortedArray=arr.sort((a, b) => a - b);
   for(let i=0; i<sortedArray.length; i++){
       if(sortedArray[i]-sortedArray[i-1]!==1){
           return false;
       }
   }return true;

}
function outputPrinter(output) {
      console.log(output);
}
const app = new CheckingForConsecutiveNumbersApp();
  app.readInput();
  