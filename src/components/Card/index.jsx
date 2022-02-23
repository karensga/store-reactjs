import React from 'react'

import { Container, ContainerImage, ContainerInfo, Category, Price, Name } from './style'

const Card = ({price, name, category}) => {
    return (
        <Container>
            <ContainerImage />
            <ContainerInfo>
                <Category>{category}</Category>
                <Name> {name}<Price> {price}</Price></Name>
            </ContainerInfo>
        </Container>
    )
}

export default Card