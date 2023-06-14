import {
    Container,
} from './styles';

import { useEffect, useState } from "react";

import Card from '../Card'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

export default function SlideProduct() {
    const [fakeStore, setFakeStore] = useState([]);

    useEffect(() => {
        consultApi();
    },[fakeStore]);

    const consultApi = async () => {
        try{
            const data = await fetch('https://fakestoreapi.com/products');
            const response = await data.json();
            setFakeStore(response);
            return;
        } catch(error) {
            console.error('Error ao tentar solicitar APi:' + error);
            return;
        };
    };
    return (
        <Container>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                clickable: true,
                }}
                breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {fakeStore.length === 0 ? (
                    <p>Carregando...</p>
                ) : (
                    fakeStore.map((product, key) => {
                        return(
                            <SwiperSlide key={key}>
                                <Card
                                    name={product.title}
                                    image={product.image}
                                    price={product.price}
                                />
                            </SwiperSlide>
                        );
                    })
                )}
            </Swiper>
        </Container>
    );
}