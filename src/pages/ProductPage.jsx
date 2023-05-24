import React from 'react'
import Announcements from '../components/Announcements'
import Navbar from '../components/Navbar'
//import { Add, Remove } from "@material-ui/icons";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { AddContainer, Amount, AmountContainer, Button, Container, Desc, Filter, FilterColor, FilterContainer, FilterSize, FilterSizeOption, FilterTitle, Image, ImgContainer, InfoContainer, Price, Title, Wrapper } from './pages.Styles/ProductPage.styles'
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const ProductPage = () => {
  return (
    <Container>
        <Announcements/>
        <Navbar/>
        <Wrapper>
            <ImgContainer>
                <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
            </ImgContainer>
            <InfoContainer>
                <Title>Denim Jumpsuit</Title>
                <Desc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                tristique tortor pretium ut. Curabitur elit justo, consequat id
                condimentum ac, volutpat ornare.
                </Desc>
                <Price>$ 20</Price>
                <FilterContainer>
                    
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color="black" />
                    <FilterColor color="darkblue" />
                    <FilterColor color="gray" />
                </Filter>
                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                    <FilterSizeOption>XS</FilterSizeOption>
                    <FilterSizeOption>S</FilterSizeOption>
                    <FilterSizeOption>M</FilterSizeOption>
                    <FilterSizeOption>L</FilterSizeOption>
                    <FilterSizeOption>XL</FilterSizeOption>
                    </FilterSize>
                </Filter>
                </FilterContainer>
                <AddContainer>
                <AmountContainer>
                    <RemoveIcon/>
                    <Amount>1</Amount>
                    <AddIcon/>
                </AmountContainer>
                <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
  </Container>
  )
}

export default ProductPage