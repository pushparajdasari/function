let a=1;
let b=5;
let c=1;
let i=b*b-4*a*c;
let j=-b/(2*a);
let k= j + (Math.sqrt(i) / (2*a)) ;
let l= j - (Math.sqrt(i) / (2*a)) ;
if(i==0){
    console.log(j);
}else if(i>0){
    console.log(k,l);
}else{
    console.log("no roots found");
}
