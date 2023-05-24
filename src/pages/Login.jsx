import React from 'react'
import { Button, Container, Form, Input, Link, Title, Wrapper } from './pages.Styles/Login.Styles'

const Login = () => {
  return (
    <Container>
        <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
            <Input placeholder="username" />
            <Input placeholder="password" />
            <Button>LOGIN</Button>
            <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
        </Wrapper>
    </Container>
  )
}

export default Login