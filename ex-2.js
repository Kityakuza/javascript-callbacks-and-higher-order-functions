//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  const scorepasseds = array.filter(score => score > 70).length;
  return scorepasseds >= operation ? 'ผ่านเกณฑ์ ✅' : 'ไม่ผ่านเกณฑ์ ❌';
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

let roomPassing = 5;

let scoreRoom1Result = atLeastFive(studentScoresRoom1, roomPassing);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, roomPassing);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, roomPassing);

console.log(`นักเรียนห้องที่ 1 ${scoreRoom1Result}`);
console.log(`นักเรียนห้องที่ 2 ${scoreRoom2Result}`);
console.log(`นักเรียนห้องที่ 3 ${scoreRoom3Result}`);