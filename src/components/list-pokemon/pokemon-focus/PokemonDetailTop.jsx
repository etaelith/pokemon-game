import { TypesList } from "@/components/list-pokemon/pokemon-focus/TypesList";
import { usePokemonFocusLogic } from "@/hooks/usePokemonFocusLogic";

import { getLocal, sumZeros } from "@/utils/getFunctions";
import chargeImg from "@/assets/chargeImg.svg";
import PokeIcon from "@/assets/pokeball.svg";

export const PokemonDetailTop = ({
  pokeDetail,
  imageLoaded,
  setImageLoaded,
}) => {
  const completed = getLocal("players").includes(pokeDetail.id);
  const { handleCard } = usePokemonFocusLogic(pokeDetail);
  return (
    <div
      className={`pokeDetail-top-container ${pokeDetail.types[0].type.name}`}
    >
      <div className="pokeDetail-ui-container">
        <link to="/" onClick={handleCard} className="return"></link>
      </div>
      <div className="pokeDetail-title-container">
        <div className="titleName">{pokeDetail.name}</div>
        <div className="number">{`#${sumZeros(pokeDetail.id, 3)}`}</div>
      </div>
      <TypesList types={pokeDetail.types} />
      <div className="pokeDetail-img-container">
        <img
          alt="img loading"
          className="pokeDetail-img waiting"
          src={chargeImg}
          style={{ display: imageLoaded ? "none" : "block" }}
        ></img>
        <img
          className={`pokeDetail-img ${completed}`}
          alt={`img ${pokeDetail.name}`}
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${sumZeros(
            pokeDetail.id,
            3
          )}.png`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(false)}
          style={{ display: imageLoaded ? "block" : "none" }}
        />
      </div>
    </div>
  );
};
