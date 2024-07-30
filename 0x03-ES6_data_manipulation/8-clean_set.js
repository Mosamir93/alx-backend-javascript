export default function cleanSet(set, startString) {
  const result = [];
  if (startString.length === 0 || startString === undefined) {
    return '';
  }
  for (const value of set) {
    if (value.startsWith(startString)) {
      result.push(value.slice(startString.length));
    }
  }
  return result.join('-');
}
