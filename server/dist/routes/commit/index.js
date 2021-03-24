"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const crypto_1 = __importDefault(require("crypto"));
const router = express_1.default.Router();
router.post("/newcommit", (req, res) => {
    req.on("data", (chunk) => {
        const signature = `sha1=${crypto_1.default
            .createHmac("sha1", process.env.GITHUB_SECRET)
            .update(chunk)
            .digest("hex")}`;
        const isAllowed = req.headers["x-hub-signature"] === signature;
        const body = JSON.parse(chunk);
        const isMaster = (body === null || body === void 0 ? void 0 : body.ref) === "refs/heads/master";
        if (isAllowed && isMaster) {
            console.log(body);
        }
    });
    res.end();
});
module.exports = router;
//# sourceMappingURL=index.js.map