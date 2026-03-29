import express from "express";
import appRoutes from "./routes";
import "./models";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use("/api", appRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
