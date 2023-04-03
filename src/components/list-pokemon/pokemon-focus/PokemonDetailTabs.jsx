export const PokemonDetailTabs = ({ pokeDetail, setStateTab, stateTab }) => {
  return (
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
  );
};
