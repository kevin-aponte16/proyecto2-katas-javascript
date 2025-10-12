const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

function removeDuplicates(list) {
  const nuevaLista = []; 
  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    if (!nuevaLista.includes(item)) { 
      nuevaLista.push(item);
    }
  }

  return nuevaLista;
}

