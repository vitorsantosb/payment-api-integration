import styled from "styled-components";
import theme from "../../styles/theme";

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
  background: ${props => props.theme.colors.primaryGreen};
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
  color: ${props => props.theme.colors.white};
}

button:hover div{opacity: 0; transform: translate(100%,0)}
button div{
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 800;
  font-size: .8em;
  transition: all .3s ease-in-out;
  color: ${props => props.theme.colors.white};
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

export const Information = styled.section `
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2rem 1rem;
  height: 15vh;

  aside {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }

  figure {
    font-size: 4rem;
    padding-top: 0.6rem;
    color: ${props => props.theme.colors.primaryGreen};
  }

  h4 {
    font-weight: 800;
  }

  p {
    color: gray;
  }

  section {
    display: flex;
    align-items: center;
    gap: 1rem;
    border-radius: 5px;
    padding: 0.5rem 2rem;
    min-width: 150px;
  }

  h2{
      font-size: 3rem;
      color: #262626;
  }

  @media (max-width: 1059px) {
    height: auto;
    aside {
      flex-direction: column;
      gap: 3rem;
    }
  }
`;

export const Images = styled.section `
  width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 1rem;
  padding-bottom: 4rem;

  div {
    display: flex;
    gap: 1rem;
  }

  aside {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const ImageMain = styled.div `
  width: 500px;
  height: 400px;
  background-color: ${props => props,theme.colors.primaryBlue};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.4rem;
  border-radius: 8px;
`;

export const ImageTop = styled.div `
  width: 300px;
  height: 200px;
  background-color: ${props => props.theme.colors.primaryYellow};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.4rem;
  border-radius: 8px;
`;

export const ImageDown = styled.div `
  width: 610px;
  height: 190px;
  background-color: #d1d1d1;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.4rem;
  border-radius: 8px;
`;