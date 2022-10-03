const number_of_equivalent_domino_pairs = (arr: number[][]) => {
  let res: number = 0;
  let current = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i][0] === arr[j][0] && arr[i][1] === arr[j][1]) {
        current++;
      } else if (arr[i][0] === arr[j][1] && arr[i][1] === arr[j][0]) {
        current++;
      }
    }
    res += current;
    current = 0;
  }

  return res;
};

console.log(
  number_of_equivalent_domino_pairs([
    [1, 2],
    [2, 1],
    [3, 4],
    [5, 6],
  ])
);
