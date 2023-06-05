import {
    Section,
    Catchphrase,
    TextureBg,
    Images,
    Information,
} from "./styles";

import Navbar from '../../components/Navbar/index';

import { MdOutlineLocalShipping } from 'react-icons/md';
import { RiSecurePaymentFill } from 'react-icons/ri'
import { TbTruckReturn } from 'react-icons/tb'

export default function Home() {

    const fakePictureOne = 'https://fakeimg.pl/300x200/?retina=1&text=Picture main';
    const fakePictureTwo = 'https://fakeimg.pl/280x150';
    const fakePictureThree = 'https://fakeimg.pl/280x150';
    const fakePictureFour = 'https://fakeimg.pl/580x240';

    return(
        <Section>
            <Navbar/>
            <TextureBg>
                <Catchphrase>
                    <h2>Estar na moda é se vestir de você mesmo</h2>
                    <button data-hover="Agora"><div>Comprar</div></button>
                </Catchphrase>
            </TextureBg>
            <Images>
                <div>
                    <img src={fakePictureOne} alt="" />
                </div>
                <div>
                    <figure>
                        <img src={fakePictureTwo} alt="" />
                        <img src={fakePictureThree} alt="" />
                    </figure>
                    <div>
                        <img src={fakePictureFour} alt="" />
                    </div>
                </div>
            </Images>
            <Information>
                <section>
                    <figure>
                        <MdOutlineLocalShipping/>
                    </figure>
                    <div>
                        <h4>Frete gratuito</h4>
                        <p>Frete gratuito em comprars acima de R$100</p>
                    </div>
                </section>

                <section>
                    <figure>
                        <RiSecurePaymentFill/>
                    </figure>
                    <div>
                        <h4>Segurança</h4>
                        <p>Pagamentos seguros</p>
                    </div>
                </section>
                <section>
                    <figure>
                        <TbTruckReturn/>
                    </figure>
                    <div>
                        <h4>Devolução</h4>
                        <p>Prazo de 30 dias para devoluções</p>
                    </div>
                </section>
            </Information>
        </Section>
    );
};