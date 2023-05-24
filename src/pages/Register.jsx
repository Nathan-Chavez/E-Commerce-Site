import React from 'react'
import { Agreement, Button, Container, Form, Input, Title, Wrapper } from './pages.Styles/Register.Styles'

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="Name" />
                <Input placeholder="Last Name" />
                <Input placeholder="Username" />
                <Input placeholder="Email" />
                <Input placeholder="Password" />
                <Input placeholder="Confirm Password" />
                <Agreement>
                By creating an account, I consent to the processing of my personal
                data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>REGISTER</Button>
            </Form>
        </Wrapper>
  </Container>
  )
}

export default Register