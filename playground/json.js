// var obj = {
//   name: 'Andrew'
// };
//
// var stringObj = JSON.stringify(obj);
//
// console.log(typeof stringObj);
// console.log(stringObj);
//
//
// var personString = '{"name" : "Abhishek", "age" : "25"}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var OriginalNote = {
  title: 'Some title',
  body: 'some body'
}

var OriginalNoteString = JSON.stringify(OriginalNote);
fs.writeFileSync('notes.json', OriginalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title)
