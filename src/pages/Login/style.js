import styled from 'styled-components'

export const MainWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    /* padding: 0 10px; */
    box-sizing: border-box;
    display: flex;
    /* justify-content: space-between; */
    flex-direction: column;
`
export const Button = styled.button`
    width: 100%;
    color:white;
    background: ${props => props.theme.primary};
    border-radius: 20px;
    outline: none;
    border:0;
    padding: 10px 0;
    font-size:16px;
    margin-top:10px;
`

export const ContainerInput = styled.div`
    width: 100%;
    height: 40px;
    background: ${props => props.theme.secondary};
    margin-top:10px;
`

export const Input = styled.input`
    background: transparent;
    outline: none;
    border:0;
    height: 100%;
    width: 85%;
    color:${props => props.theme.primary};
    font-weight: 500;
`

export const Icon = styled.i`
    width: 15%;
    text-align:center;
    color:${props => props.theme.primary};

`

export const FooterWrapper = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 10px;
    margin-bottom: 10px; 
`

export const TextRegister = styled.p`
    text-align:center;
    font-size: 14px;
    margin-top:10px;
    font-weight: 500;
`

export const LinkRegister = styled.a`
    margin-left:5px;
    color: ${p => p.theme.primary};
    
`

export const FormContainer = styled.form`
padding: 0 10px;
`

export const LinkForgot = styled.a`
    display: block;
    margin-top:10px;
    text-align:right;
    font-size:12px;
    font-weight: 500;
    color: ${p => p.theme.primary};

`

export const HeaderWrapper = styled.header`
    position: relative;
`

export const ImgContentHeaderWrapper = styled.div`
    width: 100%;
    

`

export const ImgHeader = styled.img`
width: 100%;

`

export const ButtonWithIcon = styled.button`
    position: absolute;
    display: flex;
    justify-content:center;
    align-items:center;
    top:10px;
    left: 10px;
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

export const ContainerTitle = styled.div`
    text-align: center;
`

export const Title = styled.h1`
    color: ${p => p.theme.primary};
    font-weight:500;
`   

export const TitleSecondary = styled.h5`
    font-weight:500;
    color: ${p => p.theme.primary};
`