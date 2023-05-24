import React from 'react'
import { Button, Container, Image, Info, Title } from './components.Styles/CategoryItem.Styles'


const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem