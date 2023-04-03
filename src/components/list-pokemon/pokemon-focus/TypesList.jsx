import defineIcon from "@/utils/getIcon";

export const TypesList = ({ types }) => (
  <div className="pokeDetail-types-container">
    {types.map((type) => (
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
);
