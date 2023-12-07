export default function updateStudentGradeByCity(list, city, newGrades) {
  const result1 = list.filter((student) => student.location === city);

  const results = result1.map((element) => {
    const newGrade = newGrades.find((grade) => element.id === grade.studentId);

    if (newGrade) {
      return { ...element, grade: newGrade.grade };
    }

    return { ...element, grade: 'N/A' };
  });
  return results;
}
