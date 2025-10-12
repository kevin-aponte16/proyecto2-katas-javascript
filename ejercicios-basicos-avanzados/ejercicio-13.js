const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

function nameFinder(nameList, value) {
  const index = nameList.indexOf(value); 

  if (index !== -1) {
    return { found: true, position: index }; 
  } else {
    return { found: false }; 
  }
}

