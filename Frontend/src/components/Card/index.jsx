import {
    Container,

} from './styles';

import { useState } from 'react';

export default function Card({ name, image, price }) {

    const [display, setDisplay] = useState(false);

    const handleMouseEnter = () => {
        setDisplay(true);
      };
    
      const handleMouseLeave = () => {
        setDisplay(false);
      };

    return(
        <div style={{margin: '0 auto'}}>
            <Container
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div
                    style={{display: display ? 'block' : 'none'}}
                >
                    <aside>Detalhes</aside>
                </div>
                <figure>
                    <img src={image} alt="image example" />
                </figure>
                <h2>{name}</h2>
                <p>R${price}</p>
            </Container>
        </div>
    );
}