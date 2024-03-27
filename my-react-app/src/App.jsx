import "./App.css";
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleClickAfter = () => {
    for (pokemonIndex < pokemonList.length -1) {
      setPokemonIndex(pokemonIndex + 1);

    }
  };
  const handleClickBefore = () => {
    for (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex -1)
    }
  }

  const pokemonList = [
    {
      name: "bulbasur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  return (
    <>
      
      <div>
        <PokemonCard pokemon={pokemonList[0]} />
        <button onClick={handleClickBefore}>précédent</button>
      <button onClick={handleClickAfter}>Suivant</button>
      </div>
    </>
  );
}

export default App;
