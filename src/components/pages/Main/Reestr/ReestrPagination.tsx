import React, { useState } from 'react';
import { reestrLength } from '../../../../constants/mocks/reest-data-mock';

const pageNumsInitial = [0, 1, 2, 3, 4, 5, reestrLength - 1, reestrLength];

export const ReestrPagination = () => {
  const [pageNums, setPagenums] = useState<number[]>(pageNumsInitial);

  const incrementPage = () => {
    setPagenums(
      pageNums.map((pageNum, i) => {
        if (i < 6) {
          return pageNum + 1;
        } else {
          return pageNum;
        }
      })
    );
  };
  const decrementPage = () => {
    if (pageNums[0] > 0) {
      setPagenums(
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

  return (
    <div className="pagination">
      <button className="button-32 left" onClick={decrementPage}></button>
      <button className="button-32 left-double"></button>
      <div className="pages-num-wrapper">
        {pageNums.map((pageNum, index) => {
          if (!index) {
            return (
              <button className="pagination-num-button current-num" key={pageNum} disabled={true}>
                {pageNum + 1}
              </button>
            );
          }
          if (index !== 5) {
            return (
              <button className="pagination-num-button" key={pageNum}>
                {pageNum + 1}
              </button>
            );
          } else {
            return (
              <button className="pagination-num-button empty-button" key={pageNum} disabled={true}>
                ...
              </button>
            );
          }
        })}
      </div>

      <button className="button-32 right-double"></button>
      <button className="button-32 right" onClick={incrementPage}></button>
    </div>
  );
};
