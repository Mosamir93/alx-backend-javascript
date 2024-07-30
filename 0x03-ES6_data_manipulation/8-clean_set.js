export default function cleanSet(set, startString) {
  if (startString.length === 0 || typeof startString !== 'string') {
    return '';
  }
  return [...set]
    .filter((elem) => elem !== undefined && elem.startsWith(startString))
    .map((elem) => elem.slice(startString.length))
    .join('-');
}
