// Student data structure
const students = [
  { id: 1, name: 'Andrew', citizenship: 'Canada', grades: 90, address: null },
  { id: 2, name: 'Anna', citizenship: 'Japan', grades: 85, address: null },
  { id: 3, name: 'Abigail', citizenship: 'Brazil', grades: 80, address: null },
  { id: 4, name: 'Aaron', citizenship: 'Japan', grades: 95, address: null }
]

// Find student by id
function findStudentById(id) {
  return students.find(student => student.id === id)
}

// Add address to student
function addStudentAddress(id, address) {
  const student = students.find(student => student.id === id) // Check if student exist in our database
  if (student) {
    student.address = address
    return true
  } else {
    return false
  }
}

// Filter students by country
function filterStudentsByCountry(country) {
  return students.filter(student => student.citizenship === country)
}

// Get highest grade
function getHighestGrade() {
  return students.reduce((max, student) => student.grades > max ? student.grades : max, 0)
}

// Sort students by highest grade
function sortStudentsByHighestGrade() {
  return [...students].sort((a, b) => b.grades - a.grades)
}

// Find the highest grade among Japanese students
function getHighestGradeOfJapaneseStudents() {
  const japaneseStudents = students.filter(student => student.citizenship === 'Japan')
  return japaneseStudents.reduce((max, student) => student.grades > max ? student.grades : max, 0)
}

// Check if at least one student is from Brazil
function isThereStudentFromBrazil() {
  return students.some(student => student.citizenship === "Brazil")
}

// Check if all students passed
function didAllStudentsPassed() {
  return students.every(student => student.grades > 70)
}