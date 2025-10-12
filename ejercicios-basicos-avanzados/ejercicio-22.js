const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
 { name: "Heura", isVegan: true },
 { name: "Salmon", isVegan: false },
 { name: "Tofu", isVegan: true },
 { name: "Burger", isVegan: false },
 { name: "Rice", isVegan: true },
 { name: "Pasta", isVegan: true },
];

let indexFruta = 0;

for (let i = 0; i < foodSchedule.length; i++) {
  if (!foodSchedule[i].isVegan) {
   
    foodSchedule[i].name = fruits[indexFruta];
    foodSchedule[i].isVegan = true; 
    indexFruta++;
  }
}

console.log(foodSchedule);
