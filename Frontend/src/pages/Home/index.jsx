import { Title } from "./styles";

import Navbar from '../../components/Navbar/index';
import CardProducts from "../../components/CardProducts";

export default function Home() {
    return(
        <div>
            <Title>Home Page</Title>
            <Navbar/>
            <CardProducts/>
        </div>
    );
};