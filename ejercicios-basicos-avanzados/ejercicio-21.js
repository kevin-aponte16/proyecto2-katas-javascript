const users = [
 { name: "Tony", years: 43 },
 { name: "Peter", years: 18 },
 { name: "Natasha", years: 14 },
 { name: "Bruce", years: 32 },
 { name: "Khamala", years: 16 },
];


const menores = [];
const mayores = [];

for (const usuario of users) {
  if (usuario.years < 18) {
    menores.push(usuario.name); 
  } else {
    mayores.push(usuario.name); 
  }
}


console.log("Usuarios menores de edad: " + menores);
console.log("Usuarios mayores de edad: " + mayores);
