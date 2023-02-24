import {
  getImages,
  levelDefined,
  sumZeros,
} from "../utils/getFunctions";

export const initialState = {
  lvl: 1,
  pokemonImages: getImages(1).map(
    (e) =>
      `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${sumZeros(
        e,
        3
      )}.png`
  ),
};

export const reducer = (state, action) => {
  const IMAGE_URL = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/";

  switch (action.type) {
    case "FIRST_LOG": {

      const data = getImages(initialState.lvl).map(
        (e) => `${IMAGE_URL}${sumZeros(e, 3)}.png`
      );
      return { ...state, pokemonImages: data };
    }

    case "FIRST_GAME": {
      const data = getImages(initialState.lvl).map(
        (e) => `${IMAGE_URL}${sumZeros(e, 3)}.png`
      );
      return { ...state, pokemonImages: data };
    }
    case "SYNC_GAME": {
      const data = getImages(levelDefined()).map(
        (e) => `${IMAGE_URL}${sumZeros(e, 3)}.png`
      );
      return { ...state, lvl: levelDefined(), pokemonImages: data };
    }
  }
  return state;
};
