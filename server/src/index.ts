import "dotenv-safe/config";
import "reflect-metadata";

import express from "express";

const cors = require("cors");
import morgan from "morgan";

const github = require('./routes/github')

const main = () => {
  const app = express();

  app.use(morgan("dev"));

  app.use(cors({ origin: "*" }));

  app.use(express.json());

  app.get("/", (_, res: express.Response) => {
    res.send("Hello world");
  });

  app.use('/api/v1/github', github)

  app.use((_, res: express.Response) => {
    res.status(404).json({ status: "404" });
  });

  app.listen(process.env.PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${process.env.PORT}`);
  });
};

main();
