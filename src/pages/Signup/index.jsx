import React from 'react'

import { Button, ButtonWithIcon, ContainerTitle, Title, TitleSecondary, MainWrapper, ContainerInput, Input, Icon, FooterWrapper, TextRegister, LinkRegister, FormContainer, TextInfo, HeaderWrapper, IconButton, SpanTextInfo } from './style'


const Signup = () => {
    return (
        <MainWrapper>
            <HeaderWrapper>
                <ButtonWithIcon>
                    <IconButton className="fa-solid fa-angle-left"></IconButton>
                </ButtonWithIcon>
            </HeaderWrapper>
            <ContainerTitle>
                <Title>Register</Title>
                <TitleSecondary>Create your new account</TitleSecondary>
            </ContainerTitle>
            <FormContainer>
                <ContainerInput>
                    <Icon className="fa-solid fa-user"></Icon>
                    <Input />
                </ContainerInput>

                <ContainerInput>
                    <Icon className="fa-solid fa-envelope"></Icon>
                    <Input />
                </ContainerInput>

                <ContainerInput>
                    <Icon className="fa-solid fa-lock"></Icon>
                    <Input />
                </ContainerInput>
                <ContainerInput>
                    <Icon className="fa-solid fa-lock"></Icon>
                    <Input />
                </ContainerInput>
                <TextInfo><SpanTextInfo>By signing you agree to our</SpanTextInfo> Team of use <SpanTextInfo>and</SpanTextInfo> privacy notice</TextInfo>
            </FormContainer>
            <FooterWrapper>
                <Button>Sign Up</Button>
                <TextRegister>
                    Do have an account?
                    <LinkRegister>
                       Login
                    </LinkRegister>
                </TextRegister>
            </FooterWrapper>
        </MainWrapper>
    )
}

export default Signup