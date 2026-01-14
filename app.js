let obj = {
  name: "John",
  age() {
    return Number(prompt("Enter your age:"));
  },
  agePension() {
    return Number(65 - this.age());
  }
}

console.log(obj.agePension());
