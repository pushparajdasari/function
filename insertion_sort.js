function insertionSort(arr,N){
    for(let i =1;i<N;i++){
        let perviousIndex =i-1;
        let current =arr[i];
        while(previous>-1&&current<arr[perviousIndex]){
            arr[perviousIndex+1]=arr[perviousIndex];
            previuosIndex--;
        }
        console.log("Pass"+i+arr)

        arr[perviousIndex+1]=curentItem;
    }
    return arr;

}
let arr=[9,5,4,6,7,2,1,4];
console.log(insertionSort(arr,N))