"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv-safe/config");
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const cors = require("cors");
const morgan_1 = __importDefault(require("morgan"));
const github = require('./routes/github');
const main = () => {
    const app = express_1.default();
    app.use(morgan_1.default("dev"));
    app.use(cors({ origin: "*" }));
    app.use(express_1.default.json());
    app.get("/", (_, res) => {
        res.send("Hello world");
    });
    app.use('/api/v1/github', github);
    app.use((_, res) => {
        res.status(404).json({ status: "404" });
    });
    app.listen(process.env.PORT, () => {
        console.log(`🚀 Server ready at http://localhost:${process.env.PORT}`);
    });
};
main();
//# sourceMappingURL=index.js.map