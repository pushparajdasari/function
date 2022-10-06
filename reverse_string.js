function reversestring(str){
    updatedstr="";
    for(let i=str.length;i>=0;i--){
        updatedstr = updatedstr+str[i];    
    }
    return updatedstr;


}
console.log(reversestring("elena grace is 5"));
