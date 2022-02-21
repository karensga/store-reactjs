import React from 'react'
import ImgPlant from './../../assetes/plant.jpg'

import { Button, ButtonWithIcon, ContainerTitle, Title, TitleSecondary, MainWrapper, ContainerInput, Input, Icon, FooterWrapper, TextRegister, LinkRegister, FormContainer, LinkForgot, HeaderWrapper, ImgHeader, ImgContentHeaderWrapper, IconButton } from './style'


const Login = () => {
    return (
        <MainWrapper>
            <HeaderWrapper>
                <ImgContentHeaderWrapper>
                    <ImgHeader src={ImgPlant} alt="" />
                </ImgContentHeaderWrapper>
                <ButtonWithIcon>
                    <IconButton className="fa-solid fa-angle-left"></IconButton>
                </ButtonWithIcon>
            </HeaderWrapper>
            <ContainerTitle>
                <Title>Welcome back</Title>
                <TitleSecondary>Login to your account</TitleSecondary>
            </ContainerTitle>
            <FormContainer>
                <ContainerInput>
                    <Icon className="fa-solid fa-user"></Icon>
                    <Input />
                </ContainerInput>

                <ContainerInput>
                    <Icon className="fa-solid fa-lock"></Icon>
                    <Input />
                </ContainerInput>
                <LinkForgot>Forgot Password?</LinkForgot>
            </FormContainer>
            <FooterWrapper>
                <Button>Login</Button>
                <TextRegister>
                    Don't have an account?
                    <LinkRegister>
                        Sign up
                    </LinkRegister>
                </TextRegister>
            </FooterWrapper>
        </MainWrapper>
    )
}

export default Login