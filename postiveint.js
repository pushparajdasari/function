(function(){
    function findPostiveInt(){
        var A;
     for(A=0;A<5;A++){//0//1//2//3
        for(let a=0;a*a<A;a++){//0//1//4//9
            for(let b=0;b*b<A;b++){//0//1//4//9
                if(a*a+b*b==A){
                }
                console.log("pair of integers are : a=" +a , "b= "+b, "A= "+A);
            }

        }

     }   

    }
    findPostiveInt();

})();