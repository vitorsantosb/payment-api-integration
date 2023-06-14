import styled from "styled-components";

export const Container = styled.div `
    max-width: 1200px;
    margin: 0 auto;

    .mySwiper {
        width: 100%;
        height: 60vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .mySwiper img {
        display: block;
        width: 80%;
        height: 200px;
        margin: 0 auto;
    }

    @media (max-width: 767px) {
        .mySwiper img {
            width: 70%;
            height: 250px;
        }
    }
`;