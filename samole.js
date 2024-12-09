function isPalindrome(str) {
  str = str.toLowerCase();
  const n = str.length
  for (let i = 0; i < Math.ceil(n / 2); i += 1) {
    if (str.charAt(i) !== str.charAt(n - i - 1)) return false;
  }
  return true;
}

const str = 'A man, a plan, a canal, Panama!'
console.log(str.charAt(-1))

