import React from 'react'
import { Container, Wrapper, Left, Language, SearchContainer, Center, Right, Input, Logo, MenuItem } from './components.Styles/Navbar.Styles';
import { Badge } from '@mui/material';
import { Search, ShoppingCartOutlined } from '@mui/icons-material/';

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder='Search'/>
                    <Search style={{color: "gray", fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center><Logo>TGDK</Logo></Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>LOGIN</MenuItem>
                <MenuItem>
                    <Badge badgeContent={5} color="primary">
                        <ShoppingCartOutlined/>
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
        
    </Container>
  )
}

export default Navbar