function printStars(noofStars){
    for(let i=1;i<=noofStars;i++){
        for(let j=0;j<i;j++){

            document.write("*");
        }
        document.write("</br>");
    


    }
   
}
printStars(5);
