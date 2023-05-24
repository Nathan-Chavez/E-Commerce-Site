import React, { useState } from 'react'
import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from "@mui/icons-material"
import { Container, Arrow, Wrapper, ImageContainer, InfoContainer, Image, Slide, Title, Desc, Button } from './components.Styles/Slider.Styles'
import { sliderItems } from '../data'




const Slider = () => {
    const[slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) =>{

        if(direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
        }
        else{
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
        }
    };

  return (
    <Container>
        <Arrow direction = "left" onClick={()=>handleClick("left")}>
            <KeyboardArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
           {sliderItems.map(item=>(
                 <Slide bg={item.bg} key={item.id}>
                 <ImageContainer>
                     <Image src= {item.img}/>
                 </ImageContainer>
                 <InfoContainer>
                     <Title>{item.title}</Title>
                     <Desc>{item.desc}</Desc>
                     <Button>SHOP NOW</Button>
                 </InfoContainer>
             </Slide>
           ))}
        </Wrapper>
        <Arrow direction = "right" onClick={()=>handleClick("right")}>
            <KeyboardArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider