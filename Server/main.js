import express from "express";
import connectDb from "./lib/db.js";
import eRouter from "./routers/ecom.routers.js";
const app = express();
const port = 3535;

//db connection
connectDb();

//for json formation
app.use(express.json());

app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
  next();
});

app.use("/eCom", eRouter);

app.get("/", (req, res) => {
  res.send("Backend is working");
});

app.listen(port, () => {
  console.log(`port is running in http://localhost:${port}`);
});
