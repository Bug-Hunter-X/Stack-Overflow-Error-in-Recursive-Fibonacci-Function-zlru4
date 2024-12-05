function foo(x) {
  if (x <= 1) {
    return x;
  }
  let a = 0;
  let b = 1;
  let temp;
  for (let i = 2; i <= x; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}
console.log(foo(5)); // Output: 5
console.log(foo(10)); // Output: 55