/**
 * Returns the value for the given key from localStorage as a JSON object.
 * If the key is not found in localStorage, sets it to an empty array for "players"
 * or 600000 for "record".
 *
 * @param {string} key - The key to look for in localStorage.
 * @returns {object} - The value for the given key in localStorage as a JSON object.
 */
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
/**
 * Sets the value for the given key in localStorage as a JSON string.
 *
 * @param {string} key - The key to set in localStorage.
 * @param {any} value - The value to set for the given key in localStorage.
 */
export function setLocal(key, value) {
  localStorage.setItem(key, value);
}
/**
 * Extracts data from an array starting at a given index and returns it as an array of objects
 * where each object has the extracted data and its corresponding index in the original array.
 *
 * @param {array} a - The array to extract data from.
 * @param {number} b - The starting index to extract data from.
 * @returns {array} - An array of objects with the extracted data and its corresponding index.
 */
export function extractData(a, b) {
  let remaining = a.slice(b, a.length);
  let result = remaining.slice(0, 10);
  return result.map((element, index) => {
    return { data: element, index: b + index + 1 };
  });
}
/**
 * Adds leading zeros to a number until it has a certain number of digits.
 *
 * @param {number} num - The number to add leading zeros to.
 * @param {number} size - The desired number of digits for the number.
 * @returns {string} - The number with leading zeros added to it.
 */
export function sumZeros(num, size) {
  var s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
}
/**
 * Converts a value in feet to meters.
 *
 * @param {number} num - The value in feet to convert to meters.
 * @returns {string} - The value in meters rounded to two decimal places.
 */
export function feetToMeters(num) {
  return (num / 3.2808).toFixed(2);
}
/**
 * Returns "uncatched" if the player number extracted from a given URL is not found in localStorage,
 * or an empty string otherwise.
 *
 * @param {string} url - The URL to extract the player number from.
 * @returns {string} - "uncatched" if the player number is not found in localStorage, or an empty string otherwise.
 */
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
/**
 * Formats a time value in milliseconds as a string in the format "mm:ss:ms".
 *
 * @param {number} time - The time value in milliseconds to format.
 * @returns {string} - The formatted time string in the format "mm:ss:ms".
 */
export function formatTime(time) {
  const minutes = ("0" + Math.floor((time / 100 / 60) % 60)).slice(-2);
  const seconds = ("0" + Math.floor((time / 100) % 60)).slice(-2);
  const milliseconds = ("0" + Math.floor((time % 100) / 10)).slice(-2);
  return `${minutes}:${seconds}:${milliseconds}`;
}
/**
 * Calculates the level of the game based on the number of players in localStorage.
 * If the number of players is less than 100, returns the first digit of the number plus 1.
 * If the number of players is greater than or equal to 100, returns the first two digits of the number plus 1.
 * If there are no players in localStorage, returns 0.
 *
 * @returns {number} - The level of the game based on the number of players in localStorage.
 */
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
/**
 * Returns an array of image numbers for a given set number.
 * The array contains the numbers 10 times the set number + 1 to 10 times the set number + 10.
 * The numbers are returned in ascending order.
 *
 * @param {number} n - The set number for which to get the image numbers.
 * @returns {array} - An array of image numbers for the given set number.
 */
export function getImages(n) {
  let firstNum = 10 * (n - 1) + 1;
  let result = new Set();
  for (let i = 0; i < 10; i++) {
    result.add(firstNum + i);
  }
  return Array.from(result).sort((a, b) => a - b);
}
