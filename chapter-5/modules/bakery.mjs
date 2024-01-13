// Below are examples of static imports.
import cakeFactory from "./cakeFactory.mjs";
// modules can also be loaded from remote sources:
// import { cakeFactory } from "https://example.com/modules/cakeFactory.mjs";
// Static Imports:
// module graph (what is that?) needs to be downloaded and executed before main code (in the file? The project?)
// a module graph is...

cakeFactory.oven.makeCupcake("sprinkles");
cakeFactory.oven.makeMuffin("large");

// Eagerly loaded - means there is no wait.
// Is module code executed all at once, or only when the code path is reached?
// Static Import v Dynamic
