const ButtonWin = () => {
  const handleClick = (e) => {
    e.preventDefault();
    location.reload();
  };
  return (
    <section>
      
      <dialog className="nes-dialog" id="dialog-default">
        <form method="dialog">
          <p className="title">You win!</p>
          <p>Back tomorrow for more.</p>
          <i className="nes-pokeball"></i>
          <menu className="dialog-menu">
            <button className="nes-btn">Cancel</button>
            <button className="nes-btn is-primary" onClick={handleClick}>
              Confirm
            </button>
          </menu>
        </form>
      </dialog>
    </section>
  );
};

export default ButtonWin;
