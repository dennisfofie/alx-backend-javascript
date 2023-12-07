export default function getStudentsByLocation(myArray, city) {
  if (!Array.isArray(myArray)) {
    return [];
  }
  // eslint-disable-next-line array-callback-return, consistent-return
  const results = myArray.filter((ele) => {
    if (ele.location === city) {
      return ele;
    }
  });
  return results;
}
