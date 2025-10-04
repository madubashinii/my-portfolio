import express from "express";
import serverless from "serverless-http";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Hello from Express backend 🚀" });
});

app.post("/", (req, res) => {
    const { name, email, message } = req.body;
    res.json({ success: true, data: { name, email, message } });
});

export const handler = serverless(app);
