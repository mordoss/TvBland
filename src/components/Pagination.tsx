import React from 'react';

import { PaginationStyled, Button } from '../styled/shared';

interface PaginationProps {
    totalEpisodes: number;
    episodesPerPage: number;
    currentPage: number;
    setCurrentPage: (number: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    totalEpisodes,
    episodesPerPage,
    currentPage,
    setCurrentPage,
}) => {
    const numberOfPages = Math.ceil(totalEpisodes / episodesPerPage);
    const pageNumbers = [];
    for (let i = 1; i <= numberOfPages; i += 1) {
        pageNumbers.push(i);
    }
    return (
        <PaginationStyled>
            {pageNumbers.map((number) => (
                <Button
                    key={number}
                    isActive={number === currentPage}
                    onClick={() => {
                        /* scrolling back to top for better UX */
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth',
                        });
                        setCurrentPage(number);
                    }}
                >
                    {number}
                </Button>
            ))}
        </PaginationStyled>
    );
};
export default Pagination;
