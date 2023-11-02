import React from "react";
import Info from "../../components/Info";
import PokemonContainer from "../../components/Loader";
import { useAppSelector } from "../../app/hooks";

function Description() {
  const pokemonData = useAppSelector(
    ({ pokemon: { currentPokemon } }) => currentPokemon
  );
  return (
    <>
      <Info data={pokemonData} />
       {/* @ts-ignore */}
      {pokemonData && <PokemonContainer image={pokemonData.image} />}
    </>
  );
}

export default Description;