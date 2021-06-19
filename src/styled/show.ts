import styled from 'styled-components';

import { dark } from '../colors';

interface ImageProps {
    readonly imgURL: string;
}

const ShowContainer = styled.div`
    color: ${dark.light};
    margin: 6em 0;
`;

const TopContainer = styled.div`
    display: flex;
    justify-content: space-around;
    background: ${dark.grayLight};
    width: 100%;
    padding-top: 3em;
    padding-bottom: 5em;
    border-bottom-left-radius: 1em;
    border-bottom-right-radius: 1em;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 1);
    @media (max-width: 700px) {
        flex-direction: column;
        align-items: center;
    }
`;

const ShowImage = styled.div<ImageProps>`
    background-image: url(${(props) => props.imgURL});
    height: 20em;
    width: 15em;
    background-size: cover;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 1);
    @media (max-width: 850px) {
        width: 13em;
    }
`;

const TopContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    max-width: 70%;
    @media (max-width: 1200px) {
        max-width: 50%;
    }
    @media (max-width: 700px) {
        margin-top: 2em;
        max-width: 80%;
    }
`;

const Content = styled.div`
    width: 90%;
    margin: -3em auto 0 auto;
    background: ${dark.grayDark};
    border-radius: 1em;
    padding: 2em;
    display: flex;
    justify-content: space-around;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 1);
    @media (max-width: 880px) {
        width: 98%;
    }
    @media (max-width: 819px) {
        flex-direction: column;
        padding: 1em;
    }
    @media (max-width: 500px) {
        padding: 0.5em;
    }
`;

const ContentColumn = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;
const Item = styled.div`
    font-size: 1.2em;
    margin-bottom: 2em;
    border-bottom: 2px solid ${dark.grayLight};
    padding: 1em;
    display: flex;
    align-items: baseline;
    @media (max-width: 475px) {
        font-size: 1em;
    }
`;
const ItemValue = styled.div`
    font-size: 1.4em;
    margin-left: 1em;
    @media (max-width: 475px) {
        font-size: 1.2em;
    }
`;

export {
    ShowContainer,
    TopContainer,
    ShowImage,
    TopContentContainer,
    Content,
    ContentColumn,
    Item,
    ItemValue,
};
