export default function getStudentIdsSum(students) {
  return students.reduce((counter, estudiante) => counter + estudiante.id, 0);
}
