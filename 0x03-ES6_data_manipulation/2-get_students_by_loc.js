export default function getStudentsByLocation(students, city) {
  return students.filter((estudiante) => estudiante.location === city);
}
