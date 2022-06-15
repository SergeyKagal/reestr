export const decrementPage = (pageNums: number[], setNums: (nums: number[]) => void) => {
  if (pageNums[0] > 0) {
    setNums(
      pageNums.map((pageNum, i) => {
        if (i < 6) {
          return pageNum - 1;
        } else {
          return pageNum;
        }
      })
    );
  }
};

export const incrementPage = (pageNums: number[], setNums: (nums: number[]) => void) => {
  setNums(
    pageNums.map((pageNum, i) => {
      if (i < 6) {
        return pageNum + 1;
      } else {
        return pageNum;
      }
    })
  );
};
