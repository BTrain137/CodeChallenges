// https://www.hackerrank.com/challenges/grading/problem
const gradingStudents = (grades) => {
  return grades.map(grade => {
    if(grade < 38) {
      return grade;
    }
    else {
      const leftOver = 5 - (grade % 5);
      if(leftOver < 3) {
        return grade + leftOver;
      }
      else {
        return grade
      }
    }
  });
};

console.log(gradingStudents([73, 67, 38, 33])) // 75 67 40 33


module.exports = gradingStudents;
