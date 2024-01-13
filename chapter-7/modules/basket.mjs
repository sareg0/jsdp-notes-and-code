// Private variables
const basket = [];

// Private functions
const doSomethingPrivate = () => {
  console.log("shhhhhh");
};

// Public
const basketModule = {
  add(item) {
    basket.push(item);
  },

  getItemCount() {
    return basket.length;
  },

  doSomething() {
    doSomethingPrivate();
  },

  getTotal() {
    return basket.reduce((currentSum, item) => item.price + currentSum, 0);
  },
};

export default basketModule;
