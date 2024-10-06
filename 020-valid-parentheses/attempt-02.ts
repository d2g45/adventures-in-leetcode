// saw some hints/solutions. simplified it more.

function isValid(s: string): boolean {
  const charPairs = new Map([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ]);

  const openingChars = new Set(["(", "[", "{"]);
  const closingChars = new Set([")", "]", "}"]);
  const currentChars: string[] = [];

  for (let i = 0; i < s.length; i++) {
    // opening char, just add to current
    if (openingChars.has(s[i])) {
      currentChars.push(s[i]);
    } else if (closingChars.has(s[i])) {
      // immediate fail if a pair fails
      const previous = currentChars.slice(-1)[0];
      if (charPairs.get(previous) !== s[i]) {
        return false;
      }

      currentChars.pop();
    }
  }

  // check the length of leftover characters. 0 means everything was matched
  return !currentChars.length;
}
