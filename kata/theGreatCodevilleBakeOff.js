const ingredientCheck = (bakery, recipes) => {
  for (let i = 0; i < recipes.ingredients.length; i++) {
    if (bakery.includes(recipes.ingredients[i])) return true;
  }
  return false;
}

const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  // Code here!
  let a = false, b = false;
  for (let i = 0; i < recipes.length; i++) {
    a = ingredientCheck(bakeryA, recipes[i]);
    b = ingredientCheck(bakeryB, recipes[i]);
    if (a && b) return recipes[i].name;
  }
  return 'No possible recipe';
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
