import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from '../hooks/usePagination';

const TablePagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (/*currentPage === 0 ||*/ paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <div className="paginationmaincontainer">
      <ul
        className={classnames('paginationcontainer', {
          [className]: className,
        })}
      >
        <li
          className={classnames('paginationitem', {
            disabled: currentPage === 0 /*1*/,
          })}
          onClick={onPrevious}
        >
          <div className="arrow left" />
        </li>
        {paginationRange.map((pageNumber,i) => {
          if (pageNumber === DOTS) {
            return <li key={i} className="paginationitem dots">&#8230;</li>;
          }
          return (
            <li
              key={i}
              className={classnames('paginationitem', {
                selected: pageNumber === currentPage + 1,
              })}
              onClick={() => onPageChange(pageNumber - 1)}
            >
              {pageNumber}
            </li>
          );
        })}
        <li
          className={classnames('paginationitem', {
            disabled: currentPage === lastPage - 1,
          })}
          onClick={onNext}
        >
          <div className="arrow right" />
        </li>
      </ul>
    </div>
  );
};

export default TablePagination;
