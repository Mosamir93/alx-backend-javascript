export default function updateStudentGradeByCity(list, city, grades) {
  return list
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeRecord = grades.find(grade => grade.studentId === student.id);
      return {
        ...student,
        grade: gradeRecord ? gradeRecord.grade : 'N/A',
      };
    });
}
