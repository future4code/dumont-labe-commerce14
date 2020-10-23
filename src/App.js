import React from 'react';
// michael soto
import styled from "styled-components";
//michael soto
import {Product} from "./component/Product/Product";
import {Filter} from "./component/Filter";
import {ShoppingCart} from ".component/ShoppingCart/ShoppingCart
// Luciana Verdinelli

const AppContainer =styled.div`
display: grid;
grid-template-columns: 1fr 3fr 1fr;
`;


// Luciana Verdinelli 

class App extends React.Component{

render() {
  const listaProdutos = [{
    id: 1,
    name:"produto 1",
    value: 35,
    imageUrl:"https://picsum.photos/id/237/200/300" ,
    },
  {
    id: 2,
    name:"produto 2",
    value: 64,
    imageUrl:"https://picsum.photos/id/237/200/300" ,
  },
  {
    id: 3,
    name:"produto 3",
    value: 89,
    imageUrl:"https://picsum.photos/id/237/200/300" ,
  },
  {
    id: 4,
    name:"produto 4",
    value: 355,
    imageUrl:"https://picsum.photos/id/237/200/300" ,
  },
  {
    id: 5,
    name:"produto 5",
    value: 10,
    imageUrl:"https://picsum.photos/id/237/200/300" ,
  },
  {
    id: 6,
    name:"produto 6",
    value: 150,
    imageUrl:"https://picsum.photos/id/237/200/300" ,
  }
]
  return (
    <AppContainer>
     <Filter />

    
    </AppContainer>
  );
}
}
export default App;
