import styled from 'styled-components'

export const Container = styled.div`
    height: 60vh;
    background-color: #fce8e8;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
export const Title = styled.h1`
    font-size: 45px;
    margin-bottom: 15px;
`
export const Description = styled.div`
    font-size: 24px;
    font-weight: 300px;
    margin-bottom: 15px;
`
export const InputContainer = styled.div`
    width: 35%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray
`
export const Input = styled.input`
    border: none;
    flex: 8;
    font-size: 18px;
    padding-left: 5px;
`
export const Button = styled.button`
    flex: .5;
    border: none;
    background-color: #D2042D;
    color: white;
`