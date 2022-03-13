import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://<username>:<password>@cluster0.oref5.mongodb.net/healimpilo?retryWrites=true&w=majority";

export const client = new MongoClient(uri);

export async function main(jsonArray) {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db("healimpilo");

    database.collection("customer").drop(function (err, cb) {
      if (err) throw err;
      if (cb) console.log("Collection deleted");
    });

    const customer = database.collection("customer");
    const result = await customer.insertMany(jsonArray, { ordered: true });
    console.log(`${result.insertedCount} documents were inserted`);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
