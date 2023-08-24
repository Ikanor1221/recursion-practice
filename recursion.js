// Implementation of Fibonacci sequence to the given member in the sequence and all members up to the one given are printed in array
// Fibonacci sequence is defined in the form of first two members being 0 and 1, and each consequent member being the sum of two previous
// Thus we can define first two members as base case and recursive case will be every next member calculation from the two previous
// Special condition is to return entire array instead of single value, so all returns must be done with array and manipulations too to achive Fib value required

function fibs(n) {
  if (n == 2) return [0, 1];
  else if (n == 1) return [0];
  else {
    return [].concat(
      fibs(n - 1),
      fibs(n - 2).slice(-1)[0] + fibs(n - 1).slice(-1)[0]
    );
  }
}

console.log(fibs(11));
