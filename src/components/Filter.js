import React from "react";
// import PropTypes from 'prop-types'
import styled from "styled-components";

//STYLED COMPONENTS
const FilterContainer = styled.div`
min-height: 60vh;
border: 1px solid black;
padding: 5px;
`;

const InputContainer = styled.label`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-bottom: 28px;
margin: 10px 0;
`;

const FilterSectionTitle = styled.h2`
margin: 5px 0;
`;
//Props em componente funcional

function ValorMax(props){
 Number(props.texto)
const novoFilterValue = {
'maxValue': value,
}
props.mudaFilter(novoFilterValue)
}

function ValorMin(props){
 Number(props.texto)

const novoFilterValue = {
'minValue': value,
}

props.mudaFilter(novoFilterValue)
}


function buscaProd(props){
 (props.texto)
}


//EXPORT CLASS FILTER
export class Filter extends React.Component {

// state = {
// valorMax:
// valorMin:
// buscaProd:

// }







render() {
return (
<FilterContainer>
<h3>Filtros:</h3>

<InputContainer>
<label for="valormin">Valor Minimo:</label>
<input type="number" min={0} name="valorMin" onChange{ ValorMin}></input>
</InputContainer>

<InputContainer>
<label for="valormax">Valor Maximo:</label>
<input type="number" min={0} name="valorMax" onChange{ ValorMax}></input>
</InputContainer>

<InputContainer>
<label >Buscar Produto:</label>
<input type="text" name="busca" value={this.props.buscaValue} onChange{props.buscaProd} />
</InputContainer>
</FilterContainer>
);
}
}

Filter.propTypes ={
 mudaFilter: PropTypes.func.isRequired,
handleSearchChange: PropTypes.func.isRequired,
buscaValue: PropTypes.string.isRequired,
}

// export const Filter = (props) => {

// const handleMaxFilterChange = (event) => {
// const value = Number(event.target.value)

// const newFilterValue = {
// 'maxValue': value,
// }

// props.mudaFilter(newFilterValue)
// }

// const handleMinFilterChange = (event) => {
// const value = Number(event.target.value)

// const newFilterValue = {
// 'minValue': value,
// }

// props.mudaFilter(newFilterValue)
// }

// return (
// <FilterSidebarWrapper>
// <FilterSectionTitle>Filtros:</FilterSectionTitle>
// <FilterFieldWrapper>
// <label htmlFor="valorMin">Valor Mínimo:</label>
// <input
// type="number"
// min={0}
// name="valorMin"
// onChange={handleMinFilterChange}
// />
// </FilterFieldWrapper>
// <FilterFieldWrapper>
// <label htmlFor="valorMax">Valor Máximo:</label>
// <input
// type="number"
// min={0}
// name="valorMax"
// onChange={handleMaxFilterChange}
// />
// </FilterFieldWrapper>
// <FilterFieldWrapper>
// <label>Buscar Produto</label>
// <input
// type="text"
// name="busca"
// value={props.searchValue}
// onChange={props.handleSearchChange}
// />
// </FilterFieldWrapper>
// </FilterSidebarWrapper>
// )
// }

// Filtro.propTypes = {
// onFilterChange: PropTypes.func.isRequired,
// handleSearchChange: PropTypes.func.isRequired,
// searchValue: PropTypes.string.isRequired,
// }


