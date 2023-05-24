import {Send}from '@mui/icons-material/';
import React from 'react'
import { Button, Container, Description, Input, InputContainer, Title } from './components.Styles/Newsletter.Styles';

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely updates from your favorite products.</Description>
        <InputContainer>
            <Input placeholder="Email"/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter

