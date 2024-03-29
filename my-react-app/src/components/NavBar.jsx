import { PropTypes } from "prop-types";

function Navbar({ pokemonIndex, setPokemonIndex, pokemonList }) {
  const previousIndex = () => {
    setPokemonIndex(pokemonIndex - 1);
  };
  const nextIndex = () => {
    setPokemonIndex(pokemonIndex + 1);
  };

  return (
    <div>
      {pokemonIndex > 0 && <button onClick={previousIndex}>précédent</button>}
      {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={nextIndex}>Suivant</button>
      )}
    </div>
  );
}

Navbar.propTypes = {
  pokemonIndex: PropTypes.number.isRequiried,
  setPokemonIndex: PropTypes.func.isRequired,
  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string.isRequired })
  ),
}.isRequired;
export default Navbar;
