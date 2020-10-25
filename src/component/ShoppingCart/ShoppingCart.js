import React from 'react'
import styled from 'styled-components'
import {ShoppingCartItem} from './ShoppingCartItem'


const ShoppingContainer = styled.div`
border: 1px solid black;
display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 8px;
    padding: 8px;
`

const CartListContainer = styled.div`
     display: flex;
    flex-direction: column;
    gap: 3px;
`

export class ShoppingCart extends React.Component{
    getTotalValue= () =>{
        let totalValue =0

        for(let product of this.props.productsInCart){
            totalValue += product.price * product.quantity
        }
        return totalValue
    }
    render(){
    return <ShoppingContainer>
        <h3>Carrinho:</h3>
        <CartListContainer>
        {this.props.productsInCart.map((product)=>{
            return <ShoppingCartItem cartItem={product} onRemoveProductFromCart={this.props.onRemoveProductFromCart}/>
        })}
        </CartListContainer>
        <p>Valor total: R${this.getTotalValue()},00</p>        
        </ShoppingContainer>
    }
}