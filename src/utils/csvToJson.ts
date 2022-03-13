import csv from "csvtojson";
import path from "path";
const csvPath = path.join(__dirname, "../assets/customer.csv")

export const parseCSVToJSON = async () => {
  const data = await csv({
    trim: true,
    output: "json",
    ignoreEmpty: false,
    flatKeys: true,
    nullObject: true,
  }).fromFile(csvPath);
  return data;
};
