// convert to string, reverse order, put it back together, convert, and compare
function isPalindrome(x: number): boolean {
  // all negatives fail
  if (x < 0) {
    return false;
  }

  // 0-9 should succeed
  if (x >= 0 && x < 10) {
    return true;
  }

  // for everything else
  return x === Number(x.toString().split("").reverse().join(""));
}
