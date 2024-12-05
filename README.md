# JavaScript Bug: Stack Overflow in Recursive Fibonacci

This repository demonstrates a common JavaScript bug: a stack overflow error caused by excessive recursive function calls. The `foo()` function calculates a sequence similar to Fibonacci numbers but can easily lead to stack overflow for larger inputs.

## Bug Description

The provided JavaScript code implements a recursive function to compute a sequence of numbers. While it works for small inputs, for larger inputs, the number of recursive calls exceeds the call stack limit, causing a stack overflow error.

## Bug Solution

The solution involves changing the recursive approach to an iterative one.  This eliminates the potential for stack overflow, regardless of the input size. The iterative approach uses a loop to calculate the sequence, avoiding the recursive function calls. This prevents the call stack from exceeding its limit.

## How to Run

1. Clone this repository.
2. Open `bug.js` to see the buggy code and `bugSolution.js` to see the corrected code.
3. Run the JavaScript files in a browser's console or using Node.js.