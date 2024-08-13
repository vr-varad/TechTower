import express from "express";
import { createClient } from "redis";

const app = express();
const client = createClient();

app.use(express.json());

app.post("/submit", async (req, res) => {
  try {
    const { problemId, userId, code, language } = req.body;
    // put into db
    client.lPush(
      "submissions",
      JSON.stringify({ problemId, userId, code, language })
    );
    return res.json({
      message: "Submission Recieved",
    });
  } catch (error) {
    return res.json({
      message: "Error Submitting",
      error,
    });
  }
});

const startServer = async () => {
  try {
    await client.connect();
    console.log("Connected to Redis");
    app.listen(8080, () => {
      console.log("Server Started at port 8080");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
