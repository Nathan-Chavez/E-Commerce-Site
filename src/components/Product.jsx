import React from 'react'
import { Circle, Container, Icon, Image, Info } from './components.Styles/Product.Styles'
import { FavoriteBorderOutlined, SearchOutlined ,ShoppingCartOutlined } from '@mui/icons-material/';


const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src={item.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <SearchOutlined/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product