import React from 'react';
import {Filters} from "./component/Filters/Filters";
import {Products} from "./component/Products/Product";
import {ShoppingCart} from "./component/ShoppingCart/ShoppingCart"
import styled from "styled-components";
import { ProductCard } from './component/Products/ProductCard';


const AppContainer =styled.div`
display: grid;
grid-template-columns: 1fr 3fr 1fr;
padding: 16px;
gap: 8px;
`;

class App extends React.Component{
state= {
  minFilter:100,
  maxFilter:1000,
  nameFilter:'Produto',
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
onAddProductToCart =(productId) =>{
  const productInCart=this.state.productsInCart.find(product=>productId)
  if (productInCart){
    const newProductsInCart = this.state.productsInCart.map(product =>{
      if(productId === product.id){
        return{
...product,
quantity: product.quantity +1
        }
      }
      return product
    })
    this.setState({productsInCart: newProductsInCart})
  }else{
    const productToAdd = products.find(product => productId === product.id)
    const newProductsInCart = [...this.state.productsInCart, {... productToAdd, quantity:1}]

    this.setState({productsInCart: newProductsInCart})

  }
}
onRemoveProductFromCart = (productId) =>{
const newProductsInCart = this.state.productsInCart.map((product)=>{
if(produt.id===productId){
  return{
    ...product,
    quantity:product.quantity -1
  }
}
return product
}).filter((product)=>product.quantity>0)
this.setState({productsInCart:newProductsInCart})
}

}
render() {
 
  return   <AppContainer>
          <Filters 
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}
          />
          <Products
          products={products}
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}
          onAddProductToCart={this.onAddProductToCart}    
          />
          <ShoppingCart
          productInCart={this.state.productInCart}
          onRemoveProductFromCart={this.onRemoveProductFromCart}/>
          </AppContainer>
  
}  
}
export default App;
