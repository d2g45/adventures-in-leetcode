// found a post explaining the modulo
function isPalindrome(x: number): boolean {
  const original = x;
  const isPositive: boolean = x > -1;
  const isSingleDigit: boolean = x >= 0 && x < 10;

  if (!isPositive) {
    return false;
  }

  if (isSingleDigit) {
    return true;
  }

  let reverse = 0;
  let lastDigit = 0;
  while (x > 0) {
    lastDigit = x % 10;
    reverse = reverse * 10 + lastDigit;
    x = Math.floor(x / 10);
  }

  return original === reverse;
}
