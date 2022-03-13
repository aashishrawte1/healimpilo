import { parseCSVToJSON } from "./utils/csvToJson";
import { main } from "./utils/database";

class MyClass {
  constructor() {}
  async init() {
       return true;
  }
}

const myclass = new MyClass();

(async (gen) => {
  var jsonArray = await parseCSVToJSON();
  main(jsonArray).catch(console.error);
  console.log(jsonArray);
})(myclass).catch((error) => {
  console.log(error);
});
