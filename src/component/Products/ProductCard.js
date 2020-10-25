import React from 'react'
import styled from "styled-components"

const CardContainer = styled.div`
border: dotted 1px black;




`
const CardInfor = styled.div`
display: flex;
    flex-direction: column;
    padding: 10px;


`
const AddToCartButton = styled.button`
    align-self: center;
    font-size: 12px; 
   
`


export class ProductCards extends React.Component{
    render(){
        const product = this.props.product
        
        return <CardContainer>
        <img src = {product.photo}/>
        <CardInfor>
            <p>{product.name}</p>
            <p>R${product.price}.00</p>
            <AddToCartButton onClick={() =>this.props.onAddProductToCart(product.id)}>Adicionar ao carrinho</AddToCartButton>
            </CardInfor>
        </CardContainer>
        
    }
}