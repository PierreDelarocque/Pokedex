function PokemonCard() {
  return (
    <>
      <h1 style={{ color: "#0d1a26", fontWeight: 400 }}>
        Voici ma Première Carte Pokemon
      </h1>
      <figure className="card">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
          alt="bulbasaur"
          className="card-img"
        />
        <figcaption>bulbasaur</figcaption>
      </figure>
    </>
  );
}

export default PokemonCard;
