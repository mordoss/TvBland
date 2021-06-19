/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import BeautyStars from 'beauty-stars';

import { CardStyled, CardImage, StarsAndName } from '../styled/homepage';
import { dark } from '../colors';

interface CardProps {
    episode: string;
    name: string;
    image: { original: string; medium: string };
    id: number;
    rating: number;
}

const Card: React.FC<CardProps> = ({ episode, id, name, image, rating }) => {
    return (
        <Link to={{ pathname: `/show/${name}`, state: { id } }}>
            <CardStyled>
                <CardImage url={image?.medium} />
                <StarsAndName>
                    <BeautyStars
                        value={rating}
                        maxStars={10}
                        editable={false}
                        size="12px"
                        gap="2px"
                        activeColor={dark.grayDark}
                        inactiveColor={dark.light}
                    />
                    <p style={{ marginTop: 16, color: dark.light }}>{name}</p>
                </StarsAndName>
            </CardStyled>
        </Link>
    );
};
export default Card;
