import { Map, Seq } from 'immutable';

function printBestStudents(object) {
    const bestStudents = Seq(Map(object))
        .filter((student) => student.score >= 70)
        .map((student) => ({
            score: student.score,
            firstName: `${student.firstName[0].toUpperCase()}${student.firstName.slice(1)}`,
            lastName: `${student.lastName[0].toUpperCase()}${student.lastName.slice(1)}`,
        }));
    console.log(bestStudents.toObject());
}

// printBestStudents({
//     1: {
//       score: 99,
//       firstName: 'guillaume',
//       lastName: 'salva',
//     }
// })
