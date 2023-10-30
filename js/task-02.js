const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


function ingredientTemplate (ingredient) {
const ingredientElement = document.createElement('li');
ingredientElement.textContent = `${ingredient}`;
ingredientElement.classList.add('js-ingredients-item');
  return ingredientElement;
};

function ingredientsTemplate(ingredients) {
  return ingredients.map(ingredientTemplate);
}


function renderIngredients(ingredients) {
  const ingredientsList = document.querySelector('#ingredients');
  const ingredientList = ingredientsTemplate(ingredients);
  ingredientsList.append(...ingredientList);
};

renderIngredients(ingredients);