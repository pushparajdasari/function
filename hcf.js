function hcf(firstNumber,secondNumber){
   
    var hcf=1;

    for(num = 1 ; num <= firstNumber && num <= secondNumber; num ++ ){

        if(firstNumber % num == 0 && secondNumber  % num == 0 ){
            hcf = num;
            
        }

    }
    return hcf;

}
console.log(hcf(10,30));
console.log(hcf(8,16));
console.log(hcf(6,12));
