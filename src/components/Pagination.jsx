import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const generatePagination = () => {
        const pages = [];

        if (totalPages <= 10) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            pages.push(1);
            if (currentPage > 3) pages.push('...');

            const start = Math.max(2, currentPage - 1);
            const end = Math.min(totalPages - 1, currentPage + 1);

            for (let i = start; i <= end; i++) {
                pages.push(i);
            }

            if (currentPage < totalPages - 2) pages.push('...');
            pages.push(totalPages);
        }

        return pages;
    };

    return (
        <div className="flex justify-center mt-10 flex-wrap gap-2">
            {generatePagination().map((page, index) =>
                page === '...' ? (
                    <span key={index} className="btn btn-sm btn-disabled">
                        ...
                    </span>
                ) : (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={`btn btn-sm join-item ${currentPage === page ? 'btn-active' : ''}`}
                    >
                        {page}
                    </button>
                )
            )}
        </div>
    );
};

export default Pagination;
