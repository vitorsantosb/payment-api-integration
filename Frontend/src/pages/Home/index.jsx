import {
    Title,
    Section,
    Catchphrase
} from "./styles";

import Navbar from '../../components/Navbar/index';
import CardProducts from "../../components/CardProducts";

export default function Home() {
    return(
        <Section>
            <div style={{ backgroundColor: 'rgb(0, 0, 0, 0.2)', height: '100%'}}>
                <Navbar/>
                <Catchphrase>
                    <h2>Estar na moda é se vestir de você mesmo</h2>
                    <button data-hover="Agora"><div>Comprar</div></button>
                </Catchphrase>
            </div>
        </Section>
    );
};