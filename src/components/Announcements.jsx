import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 35px;
    width: 100%;
    border-bottom: 1px solid gray;
    color:black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Announcements = () => {
  return (
    <Container>
        Free Shipping on Orders Over $50
    </Container>
  )
}

export default Announcements