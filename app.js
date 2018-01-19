console.log('Starting App');

const fs = require('fs');
const notes = require('./notes.js');
const _ = require('lodash');
const yargs = require('yargs');


//console.log(process.argv);
const argv = yargs.argv;


 var command = process.argv[2]; // third position which means index would be 2
      console.log('command', command);
      console.log('process', process.argv);
      console.log('Yargs' , argv);


if(command === 'add'){
  console.log('Adding new note!');
  notes.addNote(argv.title, argv.body)
}
else if (command === 'list') {
  console.log('Listing all notes!');
}
else if (command === 'read') {
  console.log('Reading note!');
}
else if (command === 'remove') {
  console.log('Removing Note!');
}
else
{
  console.log('Invalid Command');
}
