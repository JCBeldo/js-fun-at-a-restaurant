function nameMenuItem(foodName) {
  return `Delicious ${foodName}`;
}

function createMenuItem(name, price, type) {
  var menuItem = {
    name: name,
    price: price,
    type: type
  }
  return menuItem;
}

function addIngredients(food, arr) {
  if (!arr.includes(food)) {
    arr.push(food);
  }
}

function formatPrice(price) {
  return "$" + price;
}

function decreasePrice(price) {
  return price - (price * .10);
}

function createRecipe(title, ingredients, type) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: type
  }
  return recipe
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


