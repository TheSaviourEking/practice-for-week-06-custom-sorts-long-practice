function ageSort(users) {
  // Your code here
  const custom = (a, b) => {
    if (a.age > b.age) return 1;
    if (b.age > a.age) return -1;
    return 0;
  }

  return users.sort(custom);
}

function oddEvenSort(arr) {
  // Your code here
  return arr.sort((a, b) => {
    if (a % 2 === 1 && b % 2 === 0) return -1;
    if (a % 2 === 0 && b % 2 === 1) return 1;
    return a - b;
  })
}

function validAnagrams(s, t) {
  if (s.length !== t.length) return false;
  // Your code here
  s = s.split('').sort().join('');
  t = t.split('').sort().join('');

  // for (let i = 0; i < s.length; i++) {
  //   if (s[i] !== t[i]) return false;
  // }

  // return true;
  return s === t;
}

function reverseBaseSort(arr) {
  // Your code here
  const compareFn = (a, b) => {
    if (a.toString().length > b.toString().length) return -1;
    if (a.toString().length < b.toString().length) return 1;
    return a - b;
  }
  return arr.sort(compareFn)
}

function frequencySort(arr) {
  // Step 1: Create a frequency map to count the occurrences of each element
  const frequencyMap = new Map();
  for (const num of arr) {
    if (frequencyMap.has(num)) {
      frequencyMap.set(num, frequencyMap.get(num) + 1);
    } else {
      frequencyMap.set(num, 1);
    }
  }

  // Step 2: Sort the array based on frequency and value
  arr.sort((a, b) => {
    // Compare by frequency (ascending order)
    const freqComparison = frequencyMap.get(a) - frequencyMap.get(b);

    // If frequencies are the same, compare by value (descending order)
    if (freqComparison === 0) {
      return b - a;
    }

    return freqComparison;
  });

  // Step 3: Return the sorted array
  return arr;
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
