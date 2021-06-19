import React from 'react';

import { Button } from '../styled/shared';

interface SortingSwitcherProps {
    active: string;
    setActive: (active: string) => void;
    setCurrentPage: (number: number) => void;
}

// setCurrentPage is in props to reset current page to 1 after change in sorting
const SortingSwitcher: React.FC<SortingSwitcherProps> = ({ active, setActive, setCurrentPage }) => {
    return (
        <div style={{ display: 'flex' }}>
            <Button isActive={false}>Sort by: </Button>
            <Button
                isActive={active === 'rating'}
                onClick={() => {
                    setActive('rating');
                    setCurrentPage(1);
                }}
            >
                Rating
            </Button>
            <Button
                isActive={active === 'date'}
                onClick={() => {
                    setActive('date');
                    setCurrentPage(1);
                }}
            >
                Date
            </Button>
        </div>
    );
};
export default SortingSwitcher;
