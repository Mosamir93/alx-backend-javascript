export default function cleanSet(set, startString) {
  if (startString.length === 0) {
    return '';
  }
  return [...set]
    .filter((elem) => (elem !== undefined ? elem.startsWith(startString) : ''))
    .map((elem) => (elem !== undefined ? elem.slice(startString.length) : ''))
    .join('-');
}
