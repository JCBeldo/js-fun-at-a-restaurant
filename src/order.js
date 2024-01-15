function takeOrder(order, arr) {
  if(arr.length >= 3) {
    return arr;
  }
  else {
    arr.push(order);
    return arr;
  }
}

function refundOrder(orderNum, arr) {
  for ( let i = 0; i < arr.length; i++) {
    while(arr[i].orderNumber === orderNum) {
      arr.splice(i,1); // use i instead of arr[i] for index #
    }
  }
  return arr;
}

function listItems(arr) {
  items = []
  for (let i = 0; i < arr.length; i++) {
  items.push(arr[i].item);
  }
  return items.join(", ");
}

function searchOrder(arr, str) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i].item === str || arr[i].item.includes(str)) {
      return true
    }
  }
  return false //instead of else, just return outside of for, b/c return breaks
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}