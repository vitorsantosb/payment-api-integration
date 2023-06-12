import {
    Card,
} from "./styles";

import { useEffect, useState } from 'react'

import data from '../../data/products';

export default function CardProducts() {
    const [fakeStore, setFakeStore] = useState([]);

    useEffect(() => {
        const api = async () => {
            try {
                const request = await fetch('https://fakestoreapi.com/products/1');
                const response = await request.json();
                setFakeStore(response);
                console.log(fakeStore);
            } catch(error) {
                return console.error('Erro ao tentar solicitar a APi:' + error);
            };
        };

        api();
    },[]);

    return(
        <div>
            <Card>
                <figure>
                    <img src={fakeStore.image} alt="" />
                </figure>
            </Card>
        </div>
    );
};