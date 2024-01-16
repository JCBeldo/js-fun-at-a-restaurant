function createRestaurant(name) {
  let restaurant = 
    {
      name: name,
      menus: {
        breakfast: [],
        lunch: [],
        dinner: []
      }
    }
    return restaurant;
}

function addMenuItem(restaurant, menuItem) {
  let menu = restaurant.menus
  if (!menu.breakfast.includes(menuItem)) {
    if (menuItem.type === 'breakfast') {
      menu.breakfast.push(menuItem);
    }
    else if (menuItem.type === 'lunch') {
      menu.lunch.push(menuItem);
    }
    else {
      menu.dinner.push(menuItem);
    }
  }
}

function removeMenuItem(restaurant, menuStr, meal) {
  let menu = restaurant.menus;
  if (!menu[meal].includes(menuStr) && menu[meal].length === 0) {
    return `Sorry, we don't sell ${menuStr}, try adding a new recipe!`
  }
  else {
    menu[meal].shift();
    let message = `No one is eating our ${menuStr} - it has been removed from the ${meal} menu!`
    return message
  }
}

function checkForFood(restaurant, foodItem) {
  if (restaurant.menus[foodItem.type].includes(foodItem)) {
    return `Yes, we're serving ${foodItem.name} today!`
  }
  else {
    return `Sorry, we aren't serving ${foodItem.name} today.`
  }
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  checkForFood
}