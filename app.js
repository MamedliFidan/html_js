let word=prompt("Write the word: ");
let numbers="1234567890";
let value=false;

for(let i=0;i<word.length;i++){
  for(let j=0;j<numbers.length;j++){
    if(word[i]==numbers[j]){
      value=true;
      break;
    }
  }
}
if(value==false){
  console.log("There isn't a number");
  
}else{
  console.log("There is a number");
}