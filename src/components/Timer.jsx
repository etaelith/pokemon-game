const Timer = ({ time }) => {
  return (
    <>
      <div className="timer">
        <span className="digits">
          {("0" + (Math.floor(time / 1000 / 60) % 60)).slice(-2)}:
        </span>
        <span className="digits">
          {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
        </span>
        <span className="digits mili-sec">
          {("0" + (time % 1000) / 10).slice(-2)}
        </span>
      </div>
    </>
  );
};

export default Timer;
