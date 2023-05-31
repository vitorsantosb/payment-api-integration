import {
    MenuSidebar,
    Container,
    Logo,
    Menu,
    Item,
    SearchContainer,
    Functionalities,
    IconFunctionalities,
    Burguer
} from "./styles";

import { HiUserCircle,
        HiShoppingCart,
        HiOutlineSearch,
        HiOutlineMenuAlt1,
} from 'react-icons/hi';

export default function Sidebar() {
    return(
        <MenuSidebar>
           <Container>
                <Burguer>
                    <HiOutlineMenuAlt1/>
                </Burguer>
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
        </MenuSidebar>
    );
};