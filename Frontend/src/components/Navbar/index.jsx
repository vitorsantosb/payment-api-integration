import {
    Container,
    Logo,
    Menu,
    Item,
    SearchContainer,
    Functionalities,
    IconFunctionalities,
} from "./styles";

import { HiUserCircle,
        HiShoppingCart,
        HiOutlineSearch,
} from 'react-icons/hi';

export default function Sidebar() {
    return(
        <div>
           <Container>
                <Logo>Logo</Logo>
                <Menu>
                    <Item>Home</Item>
                    <Item>About</Item>
                    <Item>Contact</Item>
                </Menu>
                <SearchContainer>
                    <input type="text" placeholder="Seraching..." />
                    <div><HiOutlineSearch/></div>
                </SearchContainer>
                <Functionalities>
                    <div>
                        <IconFunctionalities>
                            <HiUserCircle/>
                        </IconFunctionalities>
                        Login
                    </div>
                    <div>
                        <IconFunctionalities>
                            <HiShoppingCart/>
                        </IconFunctionalities>
                        Cart
                    </div>
                </Functionalities>
           </Container>
        </div>
    );
};