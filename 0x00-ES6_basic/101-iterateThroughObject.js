export default function iterateThroughObject(reportWithIterator) {
  const all = [...reportWithIterator];
  return all.join(' | ');
}
