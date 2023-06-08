import {
    MenuSidebar,
    Container,
    Logo,
    Menu,
    Item,
    Functionalities,
    IconFunctionalities,
    Burguer,
} from "./styles";

import { HiUserCircle,
        HiShoppingCart,
        HiOutlineSearch,
        HiOutlineMenuAlt1,
        HiOutlineMenu,
} from 'react-icons/hi';

export default function Sidebar() {
    const menuItems = [
        { name: 'Home', link: '#' },
        { name: 'Categorias', link: '#' },
        { name: 'Ofertas', link: '#' },
        { name: 'Contato', link: '#' },
    ];

    return(
        <MenuSidebar>
           <Container>
                <Burguer>
                    <HiOutlineMenuAlt1/>
                </Burguer>
                <Logo>Logo</Logo>
                <Menu>
                    {menuItems.map((item, key) => {
                        return(
                            <Item key={key}>{item.name}</Item>
                        );
                    })}
                </Menu>
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