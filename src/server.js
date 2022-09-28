import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import webRouters from "./routes/web";

let app = express();
viewEngine(app);
webRouters(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("App is running at the port: " + port);
});
