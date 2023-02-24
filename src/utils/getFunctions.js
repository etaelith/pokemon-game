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

export function getCheck(url) {
  const parts = url.split("/");
  const number = parts[parts.length - 2];
  const arrayFromLocalStorage = getLocal("players");
  if (arrayFromLocalStorage.includes(parseInt(number))) {
    return "";
  } else {
    return "uncatched";
  }
}

export function formatTime(time) {
  const minutes = ("0" + Math.floor((time / 100 / 60) % 60)).slice(-2);
  const seconds = ("0" + Math.floor((time / 100) % 60)).slice(-2);
  const milliseconds = ("0" + Math.floor((time % 100) / 10)).slice(-2);
  return `${minutes}:${seconds}:${milliseconds}`;
}

export function levelDefined() {
  const res = getLocal("players");
  const data = res.length;
  if (!data) {
    return 0;
  }
  if (data < 100) {
    return Number(String(data)[0]) + 1;
  } else {
    return Number(String(data)[0] + String(data)[1]) + 1;
  }
}

export function getImages(n) {
  let firstNum = 10 * (n - 1) + 1;
  let result = new Set();
  for (let i = 0; i < 10; i++) {
    result.add(firstNum + i);
  }
  return Array.from(result).sort((a, b) => a - b);
}
