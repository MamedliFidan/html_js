let a = [33, 4, 6, 5, 24];
let len = a.length;

for (let i = 0; i < len; i++) {
  if (a[i] > 5) {
    a.push(a[i]);
  } else if (a[i] < 5) {
    a.unshift(a[i]);
  }
}

console.log(a);