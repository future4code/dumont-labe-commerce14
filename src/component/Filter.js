import React from "react";
import PropTypes from 'prop-types'
import styled from "styled-components";

//STYLED COMPONENTS
const FilterContainer = styled.div`
min-height: 60vh;
/* display:flex;
flex-flow:wrap row; */
border: 1px solid black;
padding: 5px;
`;

const InputContainer = styled.label`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-bottom: 28px;
margin-bottom:8px;
margin: 10px 0;
`;

const FilterSectionTitle = styled.h2`
margin: 5px 0;
`;

//Props em componente funcional
export const Filter = (props) => {

const  ValorMax = (event) => {
  const value = Number(event.target.value)

const novoFilterValue = {
'maxValue': value,
}
props.mudaFilter(novoFilterValue)
}

const  ValorMin = (event) => {
 const value = Number(event.target.value)

const novoFilterValue = {
'minValue': value,
}

props.mudaFilter(novoFilterValue)
}

return (
  
<FilterContainer>
<h3>Filtros:</h3>

<InputContainer>
<label htmlFor="valorMin">Valor Minimo:</label>
<input type="number" min={0} name="valorMin" onChange={ ValorMin} />
</InputContainer>

<InputContainer>
<label htmlFor="valormax">Valor Maximo:</label>
<input type="number" min={0} name="valorMax" onChange={ ValorMax} />
</InputContainer>

<InputContainer>
<label >Buscar Produto:</label>
<input type="text" name="busca" value={props.buscaValue} onChange={props.buscaProd} />
</InputContainer>
</FilterContainer>
)
}

FilterContainer.propTypes = {
  mudaFilter:PropTypes.func.isRequired,
  buscaProd: PropTypes.func.isRequired,
buscaValue: PropTypes.string.isRequired,
}









