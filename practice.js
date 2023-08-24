function sumRange(n) {
  if (n == 1) return n;
  else return n + sumRange(n - 1);
}

// console.log(sumRange(3));

function power(n, x) {
  if (x == 1) return n;
  else return n * power(n, x - 1);
}

// console.log(power(3, 3));

function factorial(n) {
  if (n == 1) return n;
  else return n * factorial(n - 1);
}

// console.log(factorial(4));

function all(n, func, i = 0) {
  if (!func(n[i])) return false;
  else if (n.length - 1 == i) return true;
  else return all(n, func, i + 1);
}

var allAreLessThanSeven = all([1, 2, 5], function (num) {
  return num < 7;
});

// console.log(allAreLessThanSeven);

function productOfArray(arr, i = 0) {
  if (i == arr.length) return 1;
  else return arr[i] * productOfArray(arr, i + 1);
}

// console.log(productOfArray([1, 2, 3, 100]));

function contains(obj, val) {
  const values = Object.values(obj);
  for (let i in values) {
    if (typeof values[i] == "object") {
      if (contains(values[i], val)) return true;
    } else if (values[i] == val) return true;
  }
}

var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 42,
            something: "foo2",
          },
          moreStuff2: {
            magicNumber: 41,
            something: "foo2",
          },
        },
        thing2: {
          moreStuff: {
            magicNumber: 42,
            something: "foo2",
          },
          moreStuff2: {
            magicNumber: 44,
            something: "foo",
          },
        },
      },
    },
  },
};

console.log(contains(nestedObject, "foo2"));

function totalIntegers(input) {
  // Base case 1: if integer return 1
  if (Number.isInteger(input)) return 1;
  //   Base case 2: if not integer or array return 0
  else if (!Array.isArray(input)) {
    return 0;
  }
  // Recursive case: apply itself to all elements in array, collect results to sum and return it
  else {
    {
      let sum = 0;
      for (let element in input) {
        sum += totalIntegers(input[element]);
      }
      return sum;
    }
  }
}

// console.log(totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]));

function sumSquares(input) {
  if (Number.isInteger(input)) return input * input;
  else {
    let sum = 0;
    for (let n in input) {
      sum += sumSquares(input[n]);
    }
    return sum;
  }
}

// console.log(sumSquares([10, [[10], 10], [10]]));

function replicate(n, value) {
  if (n <= 0) return [];
  else return [value].concat(replicate(n - 1, value));
}

// console.log([1].concat([2].concat([3])));

function fibs(n) {
  if (n == 1) return [0];
  else if (n == 2) return [0, 1];
  else {
    const result = [0, 1];
    let counter = 1;
    while (counter < n - 1) {
      result.push(result[counter] + result[counter - 1]);
      counter++;
    }
    return result;
  }
}

// console.log(fibs(10));

function fibsRec(n) {
  // Base case
  if (n == 1) return 0;
  else if (n == 2) return 1;
  // Recursive case
  return fibsRec(n - 1) + fibsRec(n - 2);
}

// console.log(fibsRec(8));
