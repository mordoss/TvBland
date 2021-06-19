import styled from 'styled-components';

import { dark } from '../colors';

interface ButtonProps {
    readonly isActive: boolean;
}
interface SpanProps {
    readonly lightToDark: boolean;
}
const Container = styled.div`
    background-color: ${dark.gray};
    width: 100%;
    min-height: 100vh;
    padding: 0 12em;
    overflow: hidden;
    @media (max-width: 1500px) {
        padding: 0 6em;
    }
    @media (max-width: 550px) {
        padding: 0 1em;
    }
`;

const Button = styled.div<ButtonProps>`
    color: ${dark.light};
    padding: 1em;
    border: 1px solid ${dark.grayDark};
    background-color: ${(props) => (props.isActive ? dark.grayDark : 'inherit')};
    border-radius: 0.8em;
    width: fit-content;
    cursor: pointer;
    margin-right: 1em;
    &:hover {
        background: linear-gradient(${dark.primary}, ${dark.grayDark});
    }
`;

const PaginationStyled = styled.div`
    display: flex;
    margin: 3em 0;
`;

const HeaderStyled = styled.div`
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    padding: 1em;
    background: ${dark.grayDark};
    color: ${dark.light};
    width: 100vw;
    font-size: 2em;
    font-weight: 600;
    line-height: 20%;
`;

const ChangeableSpan = styled.span<SpanProps>`
    color: ${(props) => (props.lightToDark ? dark.primaryLight : 'inherit')};
    transition: color 0.4s ease-in-out;
    &:hover {
        color: ${(props) => (props.lightToDark ? 'white' : dark.primaryLight)};
    }
`;

export { Container, Button, PaginationStyled, HeaderStyled, ChangeableSpan };
