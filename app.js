//task3
let i=100;
while (i<1000) {
  console.log(i);
  i+=10;
}

//diqər üsulla 

let b = 1;
while (b<1000){
  b+=1;
  if (b%10==0){
    console.log(b);
  }
} 

//task4
let a=10;
let sum=0;
while (a<=100){
  if (a%2!=0){
    sum+=(a%10+a/10);
    console.log(sum);
  }
  a++;
  
}
