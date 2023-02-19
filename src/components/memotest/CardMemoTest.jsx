const CardMemoTest = ({ selected, setSelected, completed, image, url }) => {
  return (
    <>
      <li
        onClick={() =>
          selected.length < 2 &&
          setSelected((selected) => selected.concat(image))
        }
        key={image}
        style={{
          padding: 12,
          border: "1px solid #666",
          borderRadius: 12,
          backgroundColor: "black",
        }}
      >
        {selected.includes(image) || completed.includes(image) ? (
          <img alt="icon" src={url}></img>
        ) : (
          <i className="nes-pokeball"></i>
        )}
      </li>
    </>
  );
};

export default CardMemoTest;
