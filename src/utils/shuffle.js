/*
Below is an implementation of Fisher-Yates shuffle.
Fisher-Yates is a fair and fast way to shuffle an array
Fair because every element has an equal change to be on every position
Fast because we only need one action per element, making is O(n)

Shuffle algorithm added by contributor Tom Nijhof: https://github.com/wagenrace
More details are here: https://medium.com/p/d5e6293c1f0c
*/

export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Generate a random index between 0 and i
    // Swap elements at i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
}
