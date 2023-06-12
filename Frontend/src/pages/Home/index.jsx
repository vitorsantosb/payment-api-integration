import {
    Section,
    Catchphrase,
    TextureBg,
    Images,
    Information,
    ImageOne,
    ImageTwo,
    ImageDown,
    Arrivals,
    Title,
    NewProducts,
} from "./styles";

import Navbar from '../../components/Navbar/index';
import CardProducts from "../../components/CardProducts";

import { MdOutlineLocalShipping, MdPayments } from 'react-icons/md';
import { SlPresent } from 'react-icons/sl';
import { BsHeadset } from 'react-icons/bs'

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
                        <SlPresent/>
                    </figure>
                    <div>
                        <h4>Smart Gift Card</h4>
                        <p>Buy $1000 to get card</p>
                    </div>
                </section>

                <section>
                    <figure>
                        <MdPayments/>
                    </figure>
                    <div>
                        <h4>Quick Payment</h4>
                        <p>Buy $1000 to get card</p>
                    </div>
                </section>

                <section>
                    <figure>
                        <BsHeadset/>
                    </figure>
                    <div>
                        <h4>24/7 Suport</h4>
                        <p>Quick support</p>
                    </div>
                  </section>
                </aside>
            </Information>
            <Images>
                <div>
                    <aside> 
                        <div>
                            <ImageOne>
                                <h2>500x200</h2>
                            </ImageOne>
                            <ImageTwo>
                                <h2>500x200</h2>
                            </ImageTwo>
                        </div>
                        <ImageDown>
                            <h2>610x190</h2>
                        </ImageDown>
                    </aside>
                </div>
            </Images>
            <Arrivals>
                <Title>
                    <h2>O que há de novo?</h2>
                    <p>Confira os produtos mais promissores comprados por nossos compradores</p>
                </Title>

                <NewProducts>
                    <CardProducts/>
                </NewProducts>
            </Arrivals>
        </Section>
    );
};
