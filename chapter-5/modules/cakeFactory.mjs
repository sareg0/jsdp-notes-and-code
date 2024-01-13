// specify dependencies
// import {baker} from "./staff.mjs"
// you can also import a *modules as an object*:
import * as Staff from "./staff.mjs";

const cakeFactory = {
  oven: {
    makeCupcake(toppings) {
      Staff.baker.bake("cupcake", toppings);
    },
    makeMuffin(mSize) {
      Staff.baker.bake("muffin", mSize);
    },
  },
};

export default cakeFactory;
