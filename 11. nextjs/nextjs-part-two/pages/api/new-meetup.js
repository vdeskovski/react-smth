import { MongoClient } from "mongodb";
// /api/new-meetup
// runs on server:
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    // const { title, image, address, description } = data;
    const client = MongoClient.connect(
      "mongodb+srv://vedran:Test123@cluster0.0wze4.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
    );
    const db = (await client).db();
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    console.log(result);
    (await client).close();
    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
