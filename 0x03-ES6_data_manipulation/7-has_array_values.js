export default function hasValuesFromArray(set, array) {
  return array.reduce((anterior, actual) => anterior && set.has(actual), true);
}
