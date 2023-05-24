import React from 'react'
import { Container, Filter, FilterContainer, FilterText, Option, Select } from './pages.Styles/ProductList.Styles'
import Navbar from '../components/Navbar'
import Announcements from '../components/Announcements'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const ProductList = () => {
  return (
    <Container>
        <Announcements/>
        <Navbar/>
        <FilterContainer>
            <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select>
                <Option disabled selected>
                Color
                </Option>
                <Option>White</Option>
                <Option>Black</Option>
                <Option>Red</Option>
                <Option>Blue</Option>
                <Option>Yellow</Option>
                <Option>Green</Option>
            </Select>
            <Select>
                <Option disabled selected>
                Size
                </Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
            </Select>
            </Filter>
            <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select style={{height: '35px', width: '90px'}}>
                <Option selected>Newest</Option>
                <Option>Price (asc)</Option>
                <Option>Price (desc)</Option>
            </Select>
            </Filter>
      </FilterContainer>
      <Products/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default ProductList