import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
`

export const Header = styled.header`
    width: 100%;
    display: flex;
    padding: 10px 20px;
`

export const ButtonWithIcon = styled.button`
    display: flex;
    justify-content:center;
    align-items:center;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: ${p => p.theme.secondary};
    z-index: 10;
    border:0;

`

export const IconButton = styled.i`
    color: ${p => p.theme.primary};
`

export const Title = styled.h1`
    font-size:18px;
    color: ${p => p.theme.primary};
    margin: auto;
`

export const Footer = styled.footer`
    position: absolute;
    bottom:0;
    width: 100%;
    padding: 20px;
`

export const Buttom = styled.button`
    background: ${p => p.theme.primary};
    border: 0;
    width: 100%;
    color:white;
    font-weight:bold;
    font-size:16px;
    padding: 15px 0;
    border-radius:5px;
    box-shadow;
    margin-top:15px;
`

export const SubTotal = styled.p`
    display: flex;
    justify-content: space-between;
    font-weight:semibold;
    font-size:14px;
    color: ${p => p.theme.primary};
    margin: 10px;
`

export const Total = styled.p`
    display: flex;
    justify-content: space-between;
    font-weight:bold;
    font-size:18px;
    color: ${p => p.theme.primary};
    margin: auto;
`