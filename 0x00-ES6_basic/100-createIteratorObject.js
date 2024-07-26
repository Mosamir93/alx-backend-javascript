export default function createIteratorObject(report) {
  const all = [];
  for (const department of Object.values(report.allEmployees)) {
    all.push(...department);
  }
  return all[Symbol.iterator]();
}
