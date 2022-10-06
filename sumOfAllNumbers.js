function findSumOfNumbers(number){
    let sum=0;
    while(number>=1){
        sum=sum+(number % 10);
        number= parseInt(number/10);
    }
    return sum;
}
console.log(findSumOfNumbers(120));
console.log(findSumOfNumbers(13456));
console.log(findSumOfNumbers(5678));
console.log(findSumOfNumbers(143));
console.log(findSumOfNumbers(120345678));