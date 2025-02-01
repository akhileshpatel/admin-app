import React from 'react';
import './Pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="pagination">
            <button onClick={() => onPageChange(currentPage > 1 ? currentPage - 1 : 1)}>Prev</button>
            <span>{`${(currentPage - 1) * 2 + 1} to ${currentPage * 2} of ${totalPages * 2}`}</span>
            <button onClick={() => onPageChange(currentPage < totalPages ? currentPage + 1 : totalPages)}>Next</button>
        </div>
    );
};

export default Pagination;
