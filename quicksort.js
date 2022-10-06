function swap(i,j,temp){
    arr[i]=temp;
    arr[j]=arr[i];
    arr[j]=temp

}
function findPivot(start,end,pivot){
    let pivot=6;
    for(let i=start;i<pivot;i++){
        for(let j=end;j>pivot;j--){
            if(start<pivot&&end>pivot){//both are true
            i++;
            j--;
            }else if(start>piviot&&end<piviot){//both are false
                swap();
                if(start>pivot&&end<piviot){
                    i++;
                }
                if(start<piviot&&end<pivot){
                    j--;
                }


            }

            }
        }
    }
 
    

}

let arr=[8,4,3,6,2,8,1,7];
console.log(findPivot());