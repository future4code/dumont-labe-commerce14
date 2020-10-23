import React from 'react'
import styled from "styled-components"

const CardContainer = styled.div`
border: dotted 1px black;
display:flex;
flex-direction:column;
`
const CardInfor = styled.div`

`

export class ProductCard extends React.Component{
    render(){
        const product = this.props.product
        return(
            <CardContainer>
        <img src = {`https://picsum.photos/id/237/200/300`}/>
        <CardInfor>
            <p>Produto 1</p>
            <p>R$5</p>
            <button>Adicionar</button>
        </CardInfor>
        </CardContainer>
        )
    }
}