export default function getStudentIdsSum(students) {
  return students.reduce((counter, valorActual) => counter + valorActual);
}
