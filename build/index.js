"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_1 = require("./routes/app");
const app = (0, express_1.default)();
const port = 3000;
app.use("/api", app_1.route);
app.listen(port, () => {
    console.log(`Server running at ${port}/`);
});
exports.default = app;
