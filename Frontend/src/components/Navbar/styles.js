import styled from "styled-components";

export const MenuSidebar = styled.div `
    width: 100%;
    position: absolute;
    background-color: ${props => props.theme.colors.white};
`;

export const Container = styled.aside `
    max-width: 1200px;
    height: 7.8vh;
    margin: 0 auto;
    padding:0 1rem;
    border-radius: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 899px) {
        border-radius: 0;
    }
`;

export const Logo = styled.h1 `
    display: block;

    @media (max-width: 899px) {
        display: none;
    }
`;

export const Menu = styled.ul `
    display: flex;
    align-items: center;
    gap: 1rem;

    @media (max-width: 899px) {
        display: none;
    }
`;

export const Item = styled.li `
    cursor: pointer;
    padding: 0.8rem;
`;

export const SearchContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    border: 0.1rem solid #949494;
    border-radius: 0.5rem;
    padding: 0.2rem 1rem;
    width: 30%;

    input {
        border: none;
        width: 80%;
    }

    div {
        cursor: pointer;
    }

    @media (max-width: 899px) {
        width: 60%;
    }
`;

export const Functionalities= styled.div `
    display: flex;
    align-items: center;
    gap: 1rem;

    div {
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    @media (max-width: 899px) {
        display: none;
    }
`;

export const IconFunctionalities = styled.div `
    font-size: 2rem;
`;

export const Burguer = styled.div `
    font-size: 2.5rem;
    display: none;
    cursor: pointer;

    @media (max-width: 899px) {
        display: block;
    }
`;