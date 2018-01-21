//console.log('Starting App');

const fs = require('fs');
const notes = require('./notes.js');
const _ = require('lodash');
const yargs = require('yargs');


//console.log(process.argv);
const titleOption = {
  describe: 'Title of Note!',
  demand: true,
  alias: 't'
};
const bodyOption = {
  describe: 'Content of Note!',
  demand: true,
  alias: 'b'
}

const argv = yargs
  .command('add' ,' Add a new note ', {
    title: titleOption,
    body: bodyOption

  })
  .command('list', 'List all notes')
  .command('read', 'Read a specific note', {
      title: titleOption
})
  .command('remove', 'Remove a speciifc note', {
      title: titleOption
})
  .help()
  .argv;

 var command = argv._[0];             //process.argv[2]; // third position which means index would be 2
  //    console.log('command', command);
      //console.log('process', process.argv);
    //  console.log('Yargs' , argv);


if(command === 'add'){

  let note = notes.addNote(argv.title, argv.body)
console.log('\n\n\n');
  console.log(note);

if(note !== undefined){
  console.log(`Note : Created \n --------- \n Title : ${argv.title} \n Body : ${argv.body}`);
}else {
  console.log(`Note title already Exists try differnet title please!!`);
}


}
else if (command === 'list') {

let allNotes = notes.getAll();
console.log(`Printing the all ${allNotes.length} notes.`);
allNotes.forEach((note) =>
console.log(`Note Fetched : \n ----------- \n Title : ${note.title} \n Body : ${note.body}`));
}
else if (command === 'read') {
let note = notes.getNote(argv.title);
console.log(note);
if(note){
console.log(`Note Fetched : \n ----------- \n Title : ${note.title} \n Body : ${note.body}`);
}else {

console.log(`Entered Note doesn't Exists please try again!`);
}


}
else if (command === 'remove') {
let note = notes.removeNote(argv.title);
if(note!== null){
  console.log(`Note : Deleted \n --------- \n Title : ${argv.title}`);
}else {
  console.log(`Note is Empty So can't be Deleted`);
}

}
else
{
  console.log('Invalid Command');
}
