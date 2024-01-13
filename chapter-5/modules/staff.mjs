// specify (public) exports that can be consumed by other modules
const baker = {
  bake(item) {
    console.log(`Woo! I just baked ${item}`);
  },
};

const pastryChef = {
  // pastry chef functions
  make(item) {
    console.log(`Woo! I just made a ${item}`);
  },
};

// you can specify many exports in a file inline, or
// list what you want to as a list of exports (at the bottom of the file)

export { baker, pastryChef };
