export function getLocal(key) {
  const res = JSON.parse(localStorage.getItem(key));
  if (!res) {
    if (key === "players") {
      setLocal(key, JSON.stringify([]));
    }
    if (key === "record") {
      setLocal(key, JSON.stringify(600000));
    }
    return res;
  }
  return res;
}
export function setLocal(key, value) {
  localStorage.setItem(key, value);
}
