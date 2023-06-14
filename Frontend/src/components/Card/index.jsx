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
        <Container
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                style={{display: display ? 'block' : 'none'}}
            >
                <aside>Conferir</aside>
            </div>
            <figure>
                <img src={image} alt="image example" />
            </figure>
             <h2>{name}</h2>
             <p>{price}</p>
        </Container>
    );
}