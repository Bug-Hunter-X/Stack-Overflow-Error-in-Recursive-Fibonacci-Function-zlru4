function foo(x){
  if (x == 1) {
    return 1;
  }
  else if (x == 2){
    return 2;
  }
  else {
    return foo(x-2) + foo(x-1);
  }
}
console.log(foo(5)); // Output: 8
console.log(foo(10)); // Output: 89