let arr=[1,2,3,4,5,7,9];
let sum=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]%2!==0){
        sum+=arr[i];
    }
}
console.log("Sum of odd numbers:",sum);

let arr2=["js","front","arrays","html","css"];
let arr3=[];
for(let i=0;i<arr2.length;i++){
  let word = "";
  for(let j =arr2[i].length-1 ;j>=0;j--){
    word +=arr2[i][j];}
  arr3.push(word);
}
console.log("Reversed strings array:",arr3);