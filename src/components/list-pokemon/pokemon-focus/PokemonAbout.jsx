import { feetToMeters } from "@/utils/getFunctions";

export const PokemonAbout = ({ pokeDetail, pokeInfo, stateTab }) => {
  return (
    <div className={stateTab === 1 ? "content-about active" : "content-about"}>
      <div className="about-container">
        <div className="subtitle-container">
          <p className="subtitle">Base Experience</p>
          <p className="description">{pokeDetail.base_experience}</p>
        </div>
        <div className="subtitle-container">
          <p className="subtitle">Height</p>
          <p className="description">{feetToMeters(pokeDetail.height)}m</p>
        </div>
        <div className="subtitle-container">
          <p className="subtitle">Weight</p>
          <p className="description">{pokeDetail.weight}lbs</p>
        </div>
        <div className="subtitle-container">
          <p className="subtitle">Growth Rate</p>
          <p className="description">{pokeInfo.growth_rate.name}</p>
        </div>
        <div className="subtitle-container">
          <p className="subtitle">Shape</p>
          <p className="description">{pokeInfo.shape.name}</p>
        </div>
        <div className="subtitle-container">
          <p className="subtitle">Capture Rate</p>
          <p className="description">{pokeInfo.capture_rate}</p>
        </div>
        <div className="subtitle-container">
          <p className="subtitle">Generation</p>
          <p className="description">{pokeInfo.generation.name}</p>
        </div>

        {pokeInfo.habitat ? (
          <div className="subtitle-container">
            <p className="subtitle">Habitat</p>
            <p className="description">{pokeInfo.habitat.name}</p>
          </div>
        ) : (
          <>Null</>
        )}

        <div className="about-title-container">
          <h3 className="title">Abilities</h3>
          <ul>
            {pokeDetail.abilities.map((type) => (
              <li key={`${type.ability.name} ${type.slot}`}>
                {type.ability.name}
                <span>,</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
