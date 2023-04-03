export const PokemonStats = ({ pokeDetail, stateTab }) => {
  return (
    <div className={stateTab === 2 ? "content-stats active" : "content-stats"}>
      <div className="stats-container"></div>
      {pokeDetail.stats.map((stat) => (
        <div key={pokeDetail.name + stat.stat.name} className="stat-container">
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
  );
};
