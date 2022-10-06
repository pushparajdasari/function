(function printAllNumbers(){
    let numbers=[1,4,56,87,9,23];//number.length =6 is no of items in the array
    for(let counter =0;counter<numbers.length;counter++){ //loop with itearates the no of times condition that ie numbers.length =6
       
        if(numbers[counter]==87){
          // break;//is the condtion where after the 87 item it will not print the next number
           continue;// is the condition which skips the 87 and print  the next numbers

        }
        console.log(numbers[counter]);
    }


 
})();
