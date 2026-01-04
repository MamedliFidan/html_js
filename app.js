//Task1
let a = ["Red", "Green", "Blue","Yellow"];
let b= a.filter(Element=>{
  return Element.length ==3;
})
console.log(b); 

//Task2
let c = [3, 4, 5, 6, 7, 8, 9, 10, 11];
let count1=0;
let count2=0;
c.forEach(Element=>{
  if(Element%2==0){
    count1++;}
  else{
    count2++;
  }})
console.log("Cün ədədlərin sayı: "+count1);
console.log("Tək ədədlərin sayı: "+count2);