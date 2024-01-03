const studentGrade = 6;

if (studentGrade >= 5) {
  console.log("Admis");
  const diploma = {
    name: "Andrei",
    grade: studentGrade,
    school: "IT School",
    status: "Passed",
  };

  console.log("Ai primit diploma cu numarul ", diploma.number);
  console.log(
    "Diploma! Studentul cu numele " +
      diploma.name +
      " a primit nota " +
      diploma.grade
  );
} else {
  console.log("Respins");
}

if (studentGrade === 10) {
  console.log("Felicitari");
} else if (studentGrade >= 5) {
  console.log("Admis");
} else {
  console.log("Respins");
}

//folosim switch

switch (studentGrade) {
  case 10:
    console.log("Ai luat 10");
    break;
  case 9:
    console.log("Ai luat 9");
    break;
  case 8:
    console.log("Ai luat 8");
    break;
  case 7:
    console.log("Ai luat 7");
    break;
  case 6:
    console.log("Ai luat 6");
    break;
  case 5:
    console.log("Ai luat 5");
    break;
  default:
    console.log("Esti respins");
}

//sau

if (studentGrade === 10) {
  console.log("Ai luat 10");
} else if (studentGrade === 9) {
  console.log("Ai luat 9");
} else if (studentGrade === 8) {
  console.log("Ai luat 8");
} else if (studentGrade === 7) {
  console.log("Ai luat 7");
} else {
  console.log("esti respins");
}

//operator ternar

console.log(studentGrade >= 5 ? "Admis" : "Respins");

if (studentGrade) {
  console.log("Studentul are nota");
} else {
  console.log("Studentul nu are nota");
}

//truthy si falsy

const studentName = "Mihai";

if (studentName) {
  console.log(studentName);
} else {
  console.log("John Doe");
}

const student = {
  name: "Mihai",
  grade: 8,
  school: "",
};

if (student.school) {
  //set name background to green
}
