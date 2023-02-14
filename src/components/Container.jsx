import "../styles/container.css";
const Container = ({ children, item }) => {
  return <div className={`container ${item}`}>{children}</div>;
};

export default Container;
