// Challenge 1
function fibonacci(N) {
  if (N == 0) return 0;
  if (N == 1) return 1;
  var prev = 0;
  var curr = 1;
  for (var i = 1; i < N; i++) {
    var temp = prev;
    prev = curr;
    curr = prev + temp;
  }
  return curr;
}

function closestFibonacci(N) {
  var fibonacciNumber = 0;
  let i = 0;
  while (fibonacciNumber < N) {
    i++;
    fibonacciNumber = fibonacci(i);
  }
  if (fibonacciNumber - N == 0) return "N is fibonacci at index " + i;

  if ((Math.abs(fibonacci(i) - N)) >= (Math.abs(fibonacci(i - 1) - N))) {
    fibonacciNumber = fibonacci(i - 1);
    i = i - 1;
  }

  return "Closest fibonacci is at index " + i;
}

// Challenge 2
function highestChar(string) {
  
  var unique = string.toLowerCase().trim().split('').filter(function (char, index, charArray) {
    return charArray.indexOf(char) == index;
  });

  // console.log(unique)

  var count = new Array(unique.length).fill(0);

  string.toLowerCase().trim().split('').forEach(function (char) {
    count[unique.indexOf(char)]++;
  });

  // console.log(count);
  // console.log(Math.max(...count));

  return unique[count.indexOf(Math.max(...count))];

}

console.log(highestChar('Pneumonoultramicroscopicsilicovolcanoconiosis'));