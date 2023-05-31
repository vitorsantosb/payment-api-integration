import {
    Section,
    Catchphrase,
    TextureBg
} from "./styles";

import Navbar from '../../components/Navbar/index';
import CardProducts from "../../components/CardProducts";

export default function Home() {
    return(
        <Section>
            <Navbar/>
            <TextureBg>
                <Catchphrase>
                    <h2>Estar na moda é se vestir de você mesmo</h2>
                    <button data-hover="Agora"><div>Comprar</div></button>
                </Catchphrase>
            </TextureBg>
        </Section>
    );
};