
const useError = ({ type, data }) => {
  if (type === "server") {
    return alert("server not response")
  }
  return alert("not found");
};

export default useError;
