function firstNonRepeatedChar(str) {
  // Create a map to store the count of each character in the string
  const charCount = new Map();

  // Iterate through the string to count occurrences of each character
  for (const char of str) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // Iterate through the string again to find the first non-repeated character
  for (const char of str) {
    if (charCount.get(char) === 1) {
      return char; // Return the first non-repeated character
    }
  }

  return null; // Return null if no non-repeated character is found
}

// Prompt user for input and display the result
const input = prompt("Enter a string:");
alert(firstNonRepeatedChar(input));
