import styled from "styled-components";

export const Title = styled.h1 `
  color: ${props => props.theme.colors.primary};
`;

export const Section = styled.div `
  width: 100%;
  height: 70vh;
  min-height: 30vh;
  background-image: url('/assets/background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

export const TextureBg = styled.div `
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.4);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Catchphrase = styled.div `
h2 {
  font-family: 'Bodoni Moda', serif;
  font-size: 5rem;
  color: ${props => props.theme.colors.white};
  padding: 2rem 0;
}

button{
  margin: 0 auto;
}

button:hover{cursor: pointer}
button {
  background: ${props => props.theme.colors.secundary};
  position: relative;
  border: none;
  border-radius: 0.5rem;
  padding: 15px 50px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

button:hover:before{opacity: 1; transform: translate(0,0);}
button:before{
  content: attr(data-hover);
  position: absolute;
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

@media (max-width: 1010px) {
  h2 {
    font-size: 4.5rem;
  }
}

@media (max-width: 850px) {
  h2 {
    font-size: 4rem;
  }
}
`;

export const Deals = styled.section `
  h2 {
    text-align: center;
  }
`;