let isPalindrome=function(number){
    let rem, temp, output=0;

    temp = number;

    while(number > 0){

        rem = number%10;

        number = parseInt(number/10);

        output=output*10+rem;  
    }
    if(output==temp){

        return true;
    }
    else{
        return false;
    }
};
console.log(isPalindrome(23));