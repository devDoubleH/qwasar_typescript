const print_duplicates = (
  arr1: number[],
  num1: number,
  arr2: number[],
  num2: number
): number[] => {
  let i = 0;
  let j = 0;
  let duplicates: number[] = [];

  while (i < num1 && j < num2) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr2[j] < arr1[i]) {
      j++;
    } else {
      duplicates.push(arr2[j]);
      i++;
      j++;
    }
  }

  return duplicates;
};
