function mergesort(arr) {
  if (arr.length <= 1) return arr;
  else {
    const middleIndex = Math.ceil(arr.length / 2);
    const leftSorted = mergesort(arr.splice(0, middleIndex));
    const righSorted = mergesort(arr.splice(-middleIndex));

    while (true) {
      if (leftSorted[0] < righSorted[0]) {
        arr.push(leftSorted.shift());
      } else {
        arr.push(righSorted.shift());
      }
      if (leftSorted.length == 0) {
        for (let n in righSorted) {
          arr.push(righSorted[n]);
        }
        return arr;
      }
      if (righSorted.length == 0) {
        for (let n in leftSorted) {
          arr.push(leftSorted[n]);
        }
        return arr;
      }
    }
  }
}

console.log(mergesort([33, 11, 22, 88, 12, 6]));
