import React from 'react';
import {Filters} from "./component/Filters/Filters";
import {Products} from "./component/Products/Products";
import {ShoppingCart} from "./component/ShoppingCart/ShoppingCart"
import styled from "styled-components";


let AppContainer =styled.div`
display: grid;
grid-template-columns: 1fr 3fr 1fr;

`
const product = [
  {
    id: 1,
    name: "Passeio: Viagem de Foguete",
    price: 200.0,
    photo: "https://images.pexels.com/photos/355906/pexels-photo-355906.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    quantity: 1    
  },

  {
    id: 2,
    name: "Passeio: Parceria com Robô",
    price: 30.0,
    photo: "https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    quantity: 1    
  },

  {
    id: 3,
    name: "Passeio: Urano",
    price: 21.0,
    photo: "https://images.pexels.com/photos/39561/solar-flare-sun-eruption-energy-39561.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    quantity: 1
  },

  {
    id: 4,
    name: "Passeio: Rolê de Meteoro",
    price: 120.0,
    photo: "https://images.pexels.com/photos/631477/pexels-photo-631477.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    quantity: 1
  },

  {
    id: 5,
    name: "Passeio:  em Vênus",
    price: 150.0,
    photo: "https://images.pexels.com/photos/1114900/pexels-photo-1114900.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    quantity: 1
  },

  {
    id: 6,
    name: "Passeio: Volta na Lua",
    price: 210.0,
    photo: "https://images.pexels.com/photos/673902/pexels-photo-673902.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    quantity: 1
  },

  {
    id: 7,
    name: "Passeio: Partiu Marte?",
    price: 285.0,
    photo: "https://images.pexels.com/photos/586030/pexels-photo-586030.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    quantity: 1
  },

  {
    id: 8,
    name: "Passeio: Rolê na Galáxia",
    price: 300.0,
    photo: "https://images.pexels.com/photos/110854/pexels-photo-110854.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    quantity: 1
  }
]

class App extends React.Component{
state= {
  minFilter:"0",
  maxFilter:"300",
  nameFilter:"Passeio",
  productsInCart:[
  ]
}

onChangeMinFilter = (event) =>{
this.setState({minFilter:event.target.value})
}

onChangeMaxFilter = (event) =>{
  this.setState({maxFilter:event.target.value})
  }

onChangeNameFilter = (event) =>{
this.setState({nameFilter:event.target.value})
}


onRemoveProductFromCart = (id) =>{
  let productsInCart = [...this.state.productsInCart];
  
  productsInCart.filter(produto => {
    if (produto.id === id) {
        productsInCart.splice(produto.id, 1)
    }
  })
  
  this.setState({
    productsInCart: productsInCart
  })
}
  
onAddProductToCart =(id) =>{
  let productsInCart = [...this.state.productsInCart];

    product.filter(product => {
      if (product.id === id) {
        if (product.quantity > 1) {
          product.quantity += 1;
        } else {
          productsInCart.push(product);
        }
      }
    })
    this.setState({
      productsInCart: productsInCart
    })
  }


render() {
 

  return   <AppContainer>
          <Filters 
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}
          onChangeMinFilter={this.onChangeMinFilter}
          onChangeMaxFilter={this.onChangeMaxFilter}
          onChangeNameFilter={this.onChangeNameFilter}
          />

          <Products
          product={product}
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}
          onAddProductToCart={this.onAddProductToCart}    
          />

          <ShoppingCart
          productsInCart={this.state.productsInCart}
          onRemoveProductFromCart={this.onRemoveProductFromCart}
          />
          </AppContainer>
  
}  
}
export default App;
