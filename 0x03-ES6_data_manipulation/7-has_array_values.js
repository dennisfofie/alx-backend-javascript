export default function hasValuesFromArray(mySet, myList) {
  for (const el of myList) {
    if (!mySet.has(el)) {
      return false;
    }
  }
  return true;
}
