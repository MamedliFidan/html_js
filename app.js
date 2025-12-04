//task1
let a = prompt("4 reqemli eded");

if (a >= 1000 && a < 10000) {
    let a1 = Math.floor(a / 1000);
    let a2 = Math.floor((a % 1000) / 100);
    let a3 = Math.floor((a % 100) / 10);
    let a4 = a % 10;

    console.log(a1 + a2 + a3 + a4);
} else {
    console.log("eded 4 reqemli deyil");
}
//task2
let name=prompt("adiniz nedir?");
let surname =prompt("soyadiniz nedir?");
console.log(`Salam , ${name}`,`${surname} !`);
