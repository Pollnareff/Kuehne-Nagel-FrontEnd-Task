import React from 'react'

const Pagination = ({ shipmentsPerPage, totalShipments, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalShipments / shipmentsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
      <div className='pagination inline-flex justify-end mr-9 my-2'>
        {pageNumbers.map(number => (
          <div key={number} className='page-item contents'>
            <button onClick={() => paginate(number)} className='border-2 font-650 text-lg page-link mx-1 w-9 h-10 focus:bg-blue-500 select-none'>
              {number}
            </button>
          </div>
        ))}
      </div>
  );
};

export default Pagination;