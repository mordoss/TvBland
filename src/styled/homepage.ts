import styled from 'styled-components';

import { dark } from '../colors';

interface ImageProps {
    readonly url: string;
}

const Container = styled.div`
    margin-top: 8em;
    @media (max-width: 537px) {
        margin-top: 10em;
    }
`;

const CardContainer = styled.div`
    margin-top: 2em;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 2em;
    @media (max-width: 1350px) {
        grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 950px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 750px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 450px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const CardStyled = styled.div`
    width: auto;
    background: ${dark.grayLight};
    border-radius: 0.5em;
    padding: 0.5em;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
    transition: all 0.4s ease-in-out;
    &:hover {
        background: ${dark.primary};
        box-shadow: 4px 4px 1em rgba(0, 0, 0, 1);
    }
`;

const CardImage = styled.div<ImageProps>`
    background-image: url(${(props) => props.url});
    background-size: cover;
    border-radius: 0.5em;
    height: 14em;
    width: 100%;
`;

const StarsAndName = styled.div`
    min-height: 4em;
    color: black;
    font-size: 1.2em;
    font-weight: 500;
    padding: 1em;
    padding-right: 0;
`;

export { CardStyled, CardContainer, CardImage, StarsAndName, Container };
