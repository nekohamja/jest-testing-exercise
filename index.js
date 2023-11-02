export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function reverseString(string) {
  return [...string].reverse().join("");
}

export const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return a / b;
  },
};

export function caesarCipher(text, shift) {
  const uppercase = () =>
    [...Array(26)].map(
      (n, i) => `${String.fromCharCode(i + "A".charCodeAt())}`
    );

  const lowercase = () =>
    [...Array(26)].map(
      (n, i) => `${String.fromCharCode(i + "a".charCodeAt())}`
    );

  const mod = (a, b) => {
    const c = a % b;
    return c < 0 ? c + b : c;
  };

  const cipher = (array, shift) => {
    const cipherValue = {};
    array.forEach((value, index) => {
      cipherValue[value] = array[mod(index + shift, array.length)];
    });
    return cipherValue;
  };

  const caesarCipher = (shift) => {
    return {
      ...cipher(uppercase(), shift),
      ...cipher(lowercase(), shift),
    };
  };

  const processCharacter = (cipher, character) =>
    cipher.hasOwnProperty(character) ? cipher[character] : character;

  const caesar = caesarCipher(shift);
  return [...text].map((c) => processCharacter(caesar, c)).join("");
}

export function analyzeArray(array) {
  const isValidArray = (array) => {
    if (Array.isArray(array)) {
      for (let item of array) {
        if (typeof item !== "number") return false;
      }
    } else return false;
    return true;
  };
  if (!isValidArray(array)) return "not an array";

  const sum = array.reduce((current, previous) => {
    return current + previous;
  });
  const average = sum / array.length;
  const min = array.reduce((current, previous) => {
    return Math.min(current, previous);
  });
  const max = array.reduce((current, previous) => {
    return Math.max(current, previous);
  });
  const length = array.length;
  const analyze = {
    average: average,
    min: min,
    max: max,
    length: length,
  };

  return analyze;
}

// console.log(analyzeArray([1, 2, 4, 5, 67, 3]));
