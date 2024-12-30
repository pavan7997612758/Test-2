//Map to Create HTML List
/*
function mapProductsToHTML(products) {
    return products.map(product => `<li>${product}</li>`);
  }

console.log(mapProductsToHTML(['Shirt', 'Shoes', 'Hat']));
*/

//Calculate Total Cart Value:-By using reduce()

/*function calculateTotal(cart) {
    return cart.reduce((total, item) => total + item.price, 0);
  }

  console.log(calculateTotal([
    { product: 'Shirt', price: 20 },
    { product: 'Shoes', price: 50 }
  ]));
*/


//Find Missing Number (Intermediate):-

/*
function findMissingNumber(arr) {
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;  // Sum of first n natural numbers
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

console.log(findMissingNumber([1, 2, 3, 5]));
*/

//Palindrome Checker:-
/*
function isPalindrome(str) {
    const cleanedStr = str.replace(/\s+/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
  }

  console.log(isPalindrome('A man a plan a canal Panama'));
*/

//Generate Fibonacci Sequence (Intermediate):-
/*
function fibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib.slice(0, n);
  }

  console.log(fibonacci(5));
  */