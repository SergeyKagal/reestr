import React, { useState } from 'react';
import { reestrLength } from '../../../../constants/mocks/reest-data-mock';

const pageNumsInitial = [1, 2, 3, 4, 5, 6, reestrLength - 1, reestrLength];

export const ReestrPagination = () => {
  const [currentPageNum, setCurrentPageNum] = useState(0);

  const [pageNums, setPagenums] = useState<number[]>(pageNumsInitial);

  return (
    <div className="pagination">
      <button className="button-32 left"></button>
      <button className="button-32 left-double"></button>
      <div className="pages-num-wrapper">
        {pageNums.map((pageNum, index) => {
          if (!index) {
            return (
              <button className="pagination-num-button current-num" key={pageNum} disabled={true}>
                {pageNum}
              </button>
            );
          }
          if (index !== 5) {
            return (
              <button className="pagination-num-button" key={pageNum}>
                {pageNum}
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
      <button className="button-32 right"></button>
    </div>
  );
};
