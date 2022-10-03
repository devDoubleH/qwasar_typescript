const str_maxlenoc = (arr: string[], num: number): string => {
  const str = arr[0];
  let result = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      const sub = str.slice(i, j);
      if (sub.length > result.length && arr.every((str) => str.includes(sub))) {
        result = sub;
      }
    }
  }
  return result;
};
