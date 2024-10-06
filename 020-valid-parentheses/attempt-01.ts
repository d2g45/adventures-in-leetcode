// maps/sets are awesome.
// changed closingChar from array to set and it increased runtime

function isValid(s: string): boolean {
  const charPairs = new Map([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ]);

  // const openingChars = new Set(["(", "[", "{"]);
  const closingChars = new Set([")", "]", "}"]);

  const currentChars: string[] = [];

  let output: boolean[] = [];

  for (let i = 0; i < s.length; i++) {
    // the previous character is either the last item in currentChars or the previous index
    const previousChar: string =
      closingChars.has(s[i]) && currentChars.length > 0 ? currentChars.slice(-1)[0] : s[i - 1];

    // get the map value if the previous char. it should be the same as the current one.
    if (charPairs.get(previousChar) === s[i]) {
      output.push(true);
      currentChars.pop();
    } else {
      currentChars.push(s[i]);
    }
  }
  // go through all comparisons. make sure they are true and the output is half the length of the string
  return output.length ? output.reduce((a, b) => a && b) && output.length === s.length / 2 : false;
}
