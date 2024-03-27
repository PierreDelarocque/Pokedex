function PokemonCard({ pokemon }) {
  return (
    <figure>
      {pokemon.imgSrc ===
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" ? (
        <img src={pokemon.imgSrc} />
      ) : (
        <p>???</p>
      )}

      <figcaption>{pokemon.name}</figcaption>
      {pokemon}
    </figure>
  );
}
export default PokemonCard;
