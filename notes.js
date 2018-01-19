console.log('Starting notes.js');
//console.log(module);

module.exports.age = 24;

module.exports.addNote = () => {
  console.log('addNote');
  return 'new note';
};

module.exports.addNum = (num1 , num2)  => {
  console.log('Inside the add function');
  return num1+num2;
};
