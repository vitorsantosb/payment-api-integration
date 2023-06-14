import styled from "styled-components";

export const Container = styled.div `
    cursor: pointer;
    position: relative;
    height: 290px;

    div {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgb(0,0,0,0.5);
        color: antiquewhite;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        transition: 1s;

        aside {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    h2 {
        font-size: 1.2rem;
    }

    div:hover {
        display: flex;
    }
`;