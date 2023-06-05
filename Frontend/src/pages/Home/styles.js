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

export const Images = styled.section `
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 2rem 1rem;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  figure {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  img {
    border-radius: 10px;
    margin: 0 auto;
  }
`;

export const Information = styled.section `
  max-width: 1200px;
  margin: 0 auto;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  figure {
    font-size: 3rem;
  }

  section {
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: white;
    border-radius: 10px;
    padding: 0.5rem 2rem;
    width: 250px;
  }

  h2{
      font-size: 3rem;
      color: #262626;
  }

  @media (max-width: 899px) {
    flex-direction: column;
    width: 80%;
  }
`;