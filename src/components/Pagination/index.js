import React from 'react';
import PropTypes from 'prop-types';

function Pagination({ postsPerPage, totalPosts, paginate, activepage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="pagination-container">
        {pageNumbers.map((number ) => (
          <>
					<li key={number} className='page-item'>
						<a onClick={() => paginate(number)} className={activepage === number ? 'page-link page-active' : 'page-link'}>
							{number}
						</a>
					</li>
          </>
        ))}
      </div>
    </>
  );
}

export default Pagination;

Pagination.propTypes = {
  postsPerPage: PropTypes.number,
  totalPosts: PropTypes.number,
	paginate:PropTypes.func,
	activepage:PropTypes.number,
};
