import styled from "styled-components";

export const Title = styled.h1 `
    color: ${props => props.theme.colors.primary};
`;

export const Section = styled.div `
    height: 80vh;
    width: 100%;
    background-image: url('/assets/background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    padding-top: 1rem;
`;