//console.log('Starting notes.js');
//console.log(module);

// module.exports.age = 24;
//
// module.exports.example = () => {
//   console.log('addNote');
//   return 'new note';
// };
//
// module.exports.addNum = (num1 , num2)  => {
//   console.log('Inside the add function');
//   return num1+num2;
// };

 const fs = require('fs');

 var fetchNotes = () => {

   try{
     var notesString = fs.readFileSync('notes-data.json')
     return JSON.parse(notesString);

   }catch(e){
   return [];
   }
 };

 var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
 };

var addNote = (recievedtitle, body) => {
  //console.log(`Adding note ${title} ${body}`);
var notes = fetchNotes();
var note = {
    title: recievedtitle,
    body: body
};

var duplicateNotes = [];
duplicateNotes = notes.filter((note) => note.title === recievedtitle);
console.log(duplicateNotes);
if(duplicateNotes.length === 0){
  notes.push(note);
  saveNotes(notes);
  return note;

}
};

var getAll = () => {
//  console.log('Getting all notes');
  return fetchNotes();
}
var getNote = (title) => {
  console.log(`Getting the note ${title}`);
  var notes = fetchNotes();
  var getnote = notes.filter((note) => note.title === title);
  return getnote[0];
//  console.log(newnotes);
}
var removeNote = (title) => {
  console.log(`Removing the note ${title}`);

  var notes = fetchNotes();
  var newnotes = notes.filter((note) => note.title !== title);
  console.log(newnotes);
    saveNotes(newnotes);


}



module.exports = {
  addNote,     //<---- ES6       //addNote: addNote ES5
  getAll,
  getNote,
  removeNote
};
