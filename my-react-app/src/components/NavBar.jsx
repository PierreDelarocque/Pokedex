/* eslint-disable react/prop-types */
import { useState } from "react";


 

function NavBar ({pokemonList, pokemonIndex, setPokemonIndex}){


const handleClickAfter = () => {
  if (pokemonIndex < pokemonList.length - 1) {
    setPokemonIndex(pokemonIndex + 1);
  }
};
const handleClickBefore = () => {
  if (pokemonIndex > 0) {
    setPokemonIndex(pokemonIndex - 1);
  }
};
return (
  <>
    <div>
      
      <button onClick={handleClickBefore}>précédent</button>
      <button onClick={handleClickAfter}>Suivant</button>
    </div>
  </>
);
}
export default NavBar