import { useContext } from "react";
import { PokemonsContext } from "../../context/PokemonsProvider";
import { LocalStorageContext } from "../../context/LocalStorageProvider";
import usePokeInfo from "../../hooks/usePokeInfo";
import { feetToMeters, sumZeros } from "../../utils/getFunctions";
import defineIcon from "../../utils/getIcon";
import PokeIcon from "../../assets/pokeball.svg";
import "../../styles/pokemonFocus.css";
const PokemonFocusTest = () => {
  const { pokeDetail, detailIsLoading, setDetailIsLoading } =
    useContext(PokemonsContext);
  const { pokeInfo, pokeInfoLoading, setStateTab, stateTab } = usePokeInfo(
    pokeDetail.id
  );
  const {unblocked} = useContext(LocalStorageContext)
  const handleCard = (e) => {
    e.preventDefault();
    if (e.target === e.currentTarget) {
      setDetailIsLoading(!detailIsLoading);
    }
  };
  const tata = unblocked.includes(pokeDetail.id)
  return (
    <>
      <div>
        {detailIsLoading ? (
          <div>Not loaded Detail</div>
        ) : (
          <div
            className={`pokeDetail-container ${pokeDetail.types[0].type.name}`}
            onClick={handleCard}
          >
            <img
              src={PokeIcon}
              className="pokeball-icon-white"
              alt="pokeball-icon-white"
            />
            <div className="pokeDetail-card">
              <div
                className={`pokeDetail-top-container ${pokeDetail.types[0].type.name}`}
              >
                <div className="pokeDetail-ui-container">
                  <link to="/" onClick={handleCard} className="return">
                    {/* <HiOutlineArrowNarrowLeft
                      className="return"
                      size="1.8rem"
                      onClick={ReturnToList}
                    /> */}
                  </link>
                  {/*  <CgPokemon size="2rem" /> */}
                </div>
                <div className="pokeDetail-title-container">
                  <div className="titleName">{pokeDetail.name}</div>
                  <div className="number">{`#${sumZeros(
                    pokeDetail.id,
                    3
                  )}`}</div>
                </div>
                <div className="pokeDetail-types-container">
                  {pokeDetail.types.map((type) => (
                    <div
                      className={`pokeDetail-type-tab ${type.type.name}`}
                      key={type.type.name}
                    >
                      <span>
                        <img src={defineIcon(type.type.name)} />
                      </span>
                      &nbsp;{type.type.name}
                    </div>
                  ))}
                </div>
                <div className="pokeDetail-img-container">
                  <img
                    className={`pokeDetail-img ${tata}`}
                    alt={`img ${pokeDetail.name}`}
                    src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${sumZeros(
                      pokeDetail.id,
                      3
                    )}.png`}
                  />
                </div>
              </div>
              {!tata ? (
                <div className="pokeDetail-info-container blocked-content">
                  <div>to see data of this pokemon complete the lvl: {}</div>
                </div>
              ) : (
                <div className="pokeDetail-info-container">
                  <div className="pokeDetail-tabsInfo-container">
                    <div
                      className={
                        stateTab === 1
                          ? `tabInfo active ${pokeDetail.types[0].type.name}`
                          : "tabInfo"
                      }
                      onClick={() => setStateTab(1)}
                    >
                      <h4>About</h4>
                    </div>
                    <div
                      className={
                        stateTab === 2
                          ? `tabInfo active ${pokeDetail.types[0].type.name}`
                          : "tabInfo"
                      }
                      onClick={() => setStateTab(2)}
                    >
                      <h4>Base Stats</h4>
                    </div>
                  </div>

                  {pokeInfoLoading ? (
                    <div
                      className={`pokeInfo-notLoaded ${pokeDetail.types[0].type.name}`}
                    >
                      <div className="ball"></div>
                      <div className="line"></div>
                    </div>
                  ) : (
                    <div className="content-info-container">
                      <div
                        className={
                          stateTab === 1
                            ? "content-about active"
                            : "content-about"
                        }
                      >
                        <div className="about-container">
                          <div className="subtitle-container">
                            <p className="subtitle">Base Experience</p>
                            <p className="description">
                              {pokeDetail.base_experience}
                            </p>
                          </div>
                          <div className="subtitle-container">
                            <p className="subtitle">Height</p>
                            <p className="description">
                              {feetToMeters(pokeDetail.height)}m
                            </p>
                          </div>
                          <div className="subtitle-container">
                            <p className="subtitle">Weight</p>
                            <p className="description">
                              {pokeDetail.weight}lbs
                            </p>
                          </div>
                          <div className="subtitle-container">
                            <p className="subtitle">Growth Rate</p>
                            <p className="description">
                              {pokeInfo.growth_rate.name}
                            </p>
                          </div>
                          <div className="subtitle-container">
                            <p className="subtitle">Shape</p>
                            <p className="description">{pokeInfo.shape.name}</p>
                          </div>
                          <div className="subtitle-container">
                            <p className="subtitle">Capture Rate</p>
                            <p className="description">
                              {pokeInfo.capture_rate}
                            </p>
                          </div>
                          <div className="subtitle-container">
                            <p className="subtitle">Generation</p>
                            <p className="description">
                              {pokeInfo.generation.name}
                            </p>
                          </div>

                          {pokeInfo.habitat ? (
                            <div className="subtitle-container">
                              <p className="subtitle">Habitat</p>
                              <p className="description">
                                {pokeInfo.habitat.name}
                              </p>
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
                      <div
                        className={
                          stateTab === 2
                            ? "content-stats active"
                            : "content-stats"
                        }
                      >
                        <div className="stats-container"></div>
                        {pokeDetail.stats.map((stat) => (
                          <div
                            key={pokeDetail.name + stat.stat.name}
                            className="stat-container"
                          >
                            <div className="stat-titles-container">
                              <h3 className="stat-name">{stat.stat.name}</h3>
                              <h3 className="stat-value">{stat.base_stat}</h3>
                            </div>
                            <div className="stat-bar-container">
                              <div className="stat-bar-bg"></div>
                              <div
                                className="stat-bar-parent"
                                style={{
                                  width: stat.base_stat + "%",
                                  maxWidth: "100%",
                                }}
                              >
                                <div
                                  className={`stat-bar-fill ${pokeDetail.types[0].type.name}`}
                                ></div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PokemonFocusTest;
/*         */