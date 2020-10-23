import React from 'react'
import {ShoppingCartItem} from './ShoppingCartItem'
import styled from 'styled-components'

const ShoppingCartContainer = styled.div`
border: 1 px solid black;
display:grid;
grid-auto-flow:colum;
gap:4px;
`;

const CartListContainer = styled.div`
    display: grid;
    gap: 4px;
    padding: 16px;
    `;

export class ShoppingCart extends React.Component{
    getTotalValue= () =>{
        let totalValue =0

        for(let product of this.props.productsInCart){
            totalValue += product.price * product.quantity
        }
        return totalValue
    }
    render(){
    return <ShoppingCartContainer>
        <h3>Carrinho:</h3>
        <CartListContainer>
        {this.props.productsInCart.map((product)=>{
            return <ShoppingCartItem cartItem={product} onRemoveProductFromCart={this.props.onRemoveProductFromCart}/>
        })}
        </CartListContainer>
        <p>Valor total: R${this.getTotalValue()},00</p>        
        </ShoppingCartContainer>
    }
}