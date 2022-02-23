import styled  from 'styled-components'

export const Container = styled.div`
    position: relative;
    width: 200px;
    height: auto;
    background: ${props => props.theme.secondary};
    border-radius: 20px;
    overflow: hidden;
`

export const ContainerImage = styled.div`
    width: 200px;
    height: 200px;
    background: ${props => props.theme.primary};
    border-radius: 0 0 50% 40%;
    opacity: .3;
`

export const ContainerInfo = styled.div`
    width: 200px;
    color: ${props => props.theme.primary};
    display: flex;
    flex-direction:column;
`

export const Category = styled.h6`
    font-size:16px;
    margin: 5px 20px;
`

export const Name = styled.h1`
    display: flex;
    width: 100%;
    justify-content:space-around; 
    align-items:center;
    font-size:21px;
   /*  position:absolute;
    bottom: 0; */
    margin-bottom:10px;
`
export const Price = styled.span`
    color: ${props => props.theme.third};
    background: white;
    border-radius:40px;
    padding: 5px 10px;
    font-size:16px;
`