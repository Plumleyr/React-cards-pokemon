/* Select a random element from values array. */
function choice(values) {
  const randIdx = Math.floor(Math.random() * values.length);
  return values[randIdx];
}

const playingCardFormat = (data) => {
  return { image: data.cards[0].image };
};

const pokemonCardFormat = (data) => {
  return {
    front: data.sprites.front_default,
    back: data.sprites.back_default,
    name: data.name,
    stats: data.stats,
  };
};

export { choice, playingCardFormat, pokemonCardFormat };
