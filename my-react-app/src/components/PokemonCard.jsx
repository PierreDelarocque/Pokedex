function PokemonCard() {
  const pokemon = {
    name: pokemonList[0].name,
    imgSrc: pokemonList[0].imgSrc,
  };
  console.log(pokemon);
  return (
    <figure>
      {pokemon.imgSrc ===
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" ? (
        <img src={pokemon.imgSrc} />
      ) : (
        <p>???</p>
      )}

      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

export default PokemonCard;
