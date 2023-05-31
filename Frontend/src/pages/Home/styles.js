import styled from "styled-components";

export const Title = styled.h1 `
    color: ${props => props.theme.colors.primary};
`;

export const Section = styled.div `
    height: 70vh;
    width: 100%;
    background-image: url('/assets/background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
`;

export const Catchphrase = styled.div `
    text-align: center;
    width: 100%;
    padding-top: 10rem;

    h2 {
        font-family: 'Bodoni Moda', serif;
        font-size: 6rem;
        color: ${props => props.theme.colors.white};
        padding-bottom: 3rem;
    }

    button:hover{cursor: pointer}
    button {
      background: ${props => props.theme.colors.secundary};
      position: relative;
      border: none;
      border-radius: 0.5rem;
      padding: 15px 50px;
      overflow: hidden;
    }

    button:hover:before{opacity: 1; transform: translate(0,0);}
    button:before{
      content: attr(data-hover);
      position: absolute;
      top: 1.4em; left: 0;
      width: 100%;
      text-transform: uppercase;
      letter-spacing: 3px;
      font-weight: 800;
      font-size: .8em;
      opacity: 0;
      transform: translate(-100%,0);
      transition: all .3s ease-in-out;
      color: ${props => props.theme.colors.black};
    }
    
      button:hover div{opacity: 0; transform: translate(100%,0)}
      button div{
        text-transform: uppercase;
        letter-spacing: 3px;
        font-weight: 800;
        font-size: .8em;
        transition: all .3s ease-in-out;
        color: ${props => props.theme.colors.black};
      }
`;