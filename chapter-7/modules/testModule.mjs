// https://github.com/addyosmani/learning-jsdp/blob/5a17e1a2dbc8a74475bc24b0baef1899ab43168b/ch07/modules/testModule.mjs
let counter = 0;
// The counter variable is completely shielded from the global scope
// it's like a private value here
// defined in a standard script it would be global

const testModule = {
  incrementCounter() {
    return counter++;
  },
  resetCounter() {
    console.log(`counter value prior to reset: ${counter}`);
    counter = 0;
  },
  getCounter() {
    return counter;
  },
};

export default testModule;
