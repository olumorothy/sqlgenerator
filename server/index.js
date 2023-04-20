import express from "express";
import cors from "cors";
import generator from "./generate.js";

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3005;

app.get("/", (req, res) => {
  res.send("Hello world from our API");
});

app.post("/generate", async (req, res) => {
  const queryString = req.body.queryDescription;
  try {
    const sqlQuery = await generator(queryString);
    res.json({ response: sqlQuery });
  } catch (e) {
    console.error(e);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
