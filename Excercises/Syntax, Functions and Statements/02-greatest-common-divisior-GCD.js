function solve(num1, num2) {
  const smallestNum = Math.min(num1, num2);
  let gcd = 1;

  for (let i = 0; i <= smallestNum; i++) {

    if (num1 % i == 0 && num2 % i == 0) {
      gcd = i;
    }

  }

  console.log(gcd);
}