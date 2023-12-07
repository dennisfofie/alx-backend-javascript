export default function getStudentIdsSum(myArray) {
  // eslint-disable-next-line radix
  const result = myArray.reduce((num, el) => num + el.id, 0);
  return result;
}
