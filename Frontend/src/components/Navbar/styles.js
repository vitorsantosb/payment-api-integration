import styled from "styled-components";

export const Container = styled.aside `
    width: 96vw;
    height: 6vh;
    background-color: ${props => props.theme.colors.white};
    border-radius: 1.2rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1.5rem;
`;

export const Logo = styled.h1 `

`;

export const Menu = styled.ul `
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const Item = styled.li `
    cursor: pointer;
    padding: 0.8rem;
`;

export const SearchContainer = styled.div `
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: 0.1rem solid #949494;
    border-radius: 0.5rem;
    padding: 0.2rem 1rem;

    input {
        border: none;
    }

    div {
        cursor: pointer;
    }
`;

export const Functionalities= styled.div `
    display: flex;
    align-items: center;
    gap: 2rem;

    div {
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
`;

export const IconFunctionalities = styled.div `
    font-size: 2rem;
`;