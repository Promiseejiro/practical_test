import express from "express";
import cors from "cors";
import router from "./route/route.js";
import dotenv from "dotenv";
dotenv.config();

//initialization
const app = express();
const PORT = process.env["PORT"] || 8000;


//medewares
app.use(cors());
app.use("/", router);

app.listen(PORT, () => {
  console.log(`app is listenig on http://localhost:8080`);
});
