
    let output=0;
    let number =153;
   let temp =number;

    while(temp>0){
       let rem =  (temp % 10);
       output+=rem*rem*rem;
       
     temp= parseInt(temp/10);
        
    }
    if (output==number){
        console.log(number + " " + "is  armStrongNumber");
    }
    else {
        console.log(number + " "+ " is not armStrongNumber");
    }



