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

export function extractData(a, b) {
  let remaining = a.slice(b, a.length);
  let result = remaining.slice(0, 10);
  return result.map((element, index) => {
    return { data: element, index: b + index + 1 };
  });
}

export function sumZeros(num, size) {
  var s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
}
export function feetToMeters(num) {
  return (num / 3.2808).toFixed(2);
}
