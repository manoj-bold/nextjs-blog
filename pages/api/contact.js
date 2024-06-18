import { insertDocument } from "../../lib/mongodb";
import logger from "../../lib/logger";

export default async function handler(req, res) {
  // logger(req, res, async () => {
  //   console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);

  //   if (req.method === "POST") {
  //     console.log(req.body);
  //   }
  // });

  if (req.method === "POST") {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newMessage = {
      email,
      name,
      message,
    };

    const result = await insertDocument("messages", newMessage);
    newMessage._id = result.insertedId;

    if (!result.success) {
      return res.status(500).json({ error: result.message });
    }

    res.status(201).json(newMessage);
  }
}
