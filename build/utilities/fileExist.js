"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const exist = (imgPath) => {
    if ((0, fs_1.existsSync)(imgPath)) {
        console.log("The path exists.");
        return true;
    }
    else {
        return false;
    }
};
exports.default = exist;
