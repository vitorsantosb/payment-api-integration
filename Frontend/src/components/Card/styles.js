import styled from "styled-components";

export const Container = styled.div `
    cursor: pointer;
    position: relative;
    height: 300px;

    div {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgb(0,0,0,0.4);
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        animation: visible 0.8s;

        aside {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: ${props => props.theme.colors.white};
            font-weight: 800;
            font-size: 2.4rem;
        }

        @keyframes visible {
            from {
                opacity:0;
            }
            to {
                opacity: 1;
            }
        }
    }

    p {
        color: rgb(31,31,31);
    }

    h2 {
        font-size: 1.2rem;
    }
`;