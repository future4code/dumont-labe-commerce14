import React from 'react'
import styled from 'styled-components';

const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 8px;
    padding: 8px;

`


export class ShoppingCartItem extends React.Component{
    render()    {
        return <ItemContainer>
            <p>{this.props.cartItem.quantity}x</p>
            <p>{this.props.cartItem.name}</p>
<button onclick={ ()  => this.props.onRemoveProductFromCart(this.props.cartItem.id)}
 >
     Remover
 </button>
        </ItemContainer>
    }
}