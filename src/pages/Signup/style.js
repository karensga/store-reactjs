import styled from 'styled-components'

export const MainWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    display: flex;
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
    margin-top:auto;
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

export const TextInfo = styled.p`
    display: block;
    margin-top:15px;
    text-align:center;
    font-size:12px;
    font-weight: 400;
    color: ${p => p.theme.primary};

`

export const SpanTextInfo = styled.span`
    font-weight:600;
`

export const HeaderWrapper = styled.header`
    margin-bottom:auto;
    padding: 10px;
    width: 100%
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