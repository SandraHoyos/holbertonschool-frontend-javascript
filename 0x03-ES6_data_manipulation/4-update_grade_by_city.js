import getStudentsByLocation from "./2-get_students_by_loc"

export default function updateStudentGradeByCity (students, city, newGrades){

    return getStudentsByLocation(students, city).map(student =>({
        ...student, grade : newGrades.filter((grade) => grade.studentId === student.id).map((grade)=> grade.grade)[0] || "N/A"}));  
 
}