import {
    Section,
    Catchphrase,
    TextureBg,
    Deals
} from "./styles";

import Navbar from '../../components/Navbar/index';

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
            <Deals>
                <h2>Ofertas do dia</h2>
            </Deals>
        </Section>
    );
};