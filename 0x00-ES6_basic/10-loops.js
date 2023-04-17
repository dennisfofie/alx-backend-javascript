export default function appendToEachArrayValue(array, appendString) {
  let count = 0;
  for (let idx of array) {
    array[count] = `${appendString + idx}`;
    count += 1;
  }

  return array;
}
