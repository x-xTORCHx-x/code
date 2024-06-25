function quicksort(arr){
    if(arr.length <= 1){
        return arr;
    }
let pivot = arr(Math.floor(arr.length/2));

let left = [];
let middle = [];
let right = [];

for(let element of arr){
    if (element < pivot){
        left.push(element);
}else if (element === pivot){
}else{
    right.push(element);
}
}
return quicksort(left).concat(middle).concat(quicksort(right));
}
function main(){
    let arr = [3,6]
}