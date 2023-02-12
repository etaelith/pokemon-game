const extractData = (a, b) => {
  let remaining = a.slice(b, a.length);
  let result = remaining.slice(0, 10);
  return result.map((element, index) => {
    return { data: element, index: b + index + 1 };
  });
};
export default extractData;
