import {
    Section,
    Catchphrase,
    TextureBg,
    Images,
    Information,
    ImageMain,
    ImageTop,
    ImageDown,
} from "./styles";

import Navbar from '../../components/Navbar/index';

import { MdOutlineLocalShipping } from 'react-icons/md';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { TbTruckReturn } from 'react-icons/tb';

import data from '../../data/products';

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
            <Information>
              <aside>
                <section>
                    <figure>
                        <MdOutlineLocalShipping/>
                    </figure>
                    <div>
                        <h4>Free Shipping</h4>
                        <p>Orders over $100</p>
                    </div>
                </section>

                <section>
                    <figure>
                        <RiSecurePaymentFill/>
                    </figure>
                    <div>
                        <h4>Smart Gift Card</h4>
                        <p>Buy $1000 to get card</p>
                    </div>
                </section>

                <section>
                    <figure>
                        <RiSecurePaymentFill/>
                    </figure>
                    <div>
                        <h4>Quick Payment</h4>
                        <p>Buy $1000 to get card</p>
                    </div>
                </section>

                <section>
                    <figure>
                        <TbTruckReturn/>
                    </figure>
                    <div>
                        <h4>24/7 Suport</h4>
                        <p>Quick support</p>
                    </div>
                  </section>
                </aside>
            </Information>
            <Images>
                <div style={{margin: '0 auto'}}>
                    <ImageMain>
                        <h2>500x300</h2>
                    </ImageMain>
                    <aside> 
                        <div>
                            <ImageTop>
                                <h2>300x200</h2>
                            </ImageTop>
                            <ImageTop>
                                <h2>300x200</h2>
                            </ImageTop>
                        </div>
                        <ImageDown>
                            <h2>610x190</h2>
                        </ImageDown>
                    </aside>
                </div>
            </Images>
        </Section>
    );
};
