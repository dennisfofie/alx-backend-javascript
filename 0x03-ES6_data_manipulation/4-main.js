import getListStudents from './0-get_list_students';
// eslint-disable-next-line import/no-unresolved, import/extensions
import updateStudentGradeByCity from './4-update_grade_by_city';

console.log(
  updateStudentGradeByCity(getListStudents(), 'San Francisco', [
    { studentId: 5, grade: 97 },
    { studentId: 1, grade: 86 },
  ])
);

console.log(
  updateStudentGradeByCity(getListStudents(), 'San Francisco', [
    { studentId: 5, grade: 97 },
  ])
);
