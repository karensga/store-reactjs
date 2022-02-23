import React from 'react'

import { Container, Header, ButtonWithIcon, IconButton, Title, Footer, Buttom, Total, SubTotal } from './style'

const Cart = () => {
    return (
        <Container>
            <Header>
                <ButtonWithIcon>
                    <IconButton className="fa-solid fa-angle-left"></IconButton>
                </ButtonWithIcon>
                <Title>My Cart</Title>
                <ButtonWithIcon>
                    <IconButton className="fa-solid fa-ellipsis-vertical"></IconButton>
                </ButtonWithIcon>
            </Header>

            <Footer>
                <SubTotal>Subtotal<span>$ 74</span></SubTotal>
                <SubTotal>Subtotal<span>$ 74</span></SubTotal>
                <Total>Total<span>$ 74</span></Total>
                <Buttom>Place your order</Buttom>
            </Footer>

        </Container>
    )
}

export default Cart