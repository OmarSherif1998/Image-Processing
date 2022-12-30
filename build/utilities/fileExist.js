"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const exist = (imgPath) => {
    if ((0, fs_1.existsSync)(imgPath)) {
        console.log(imgPath + " exists.");
        return true;
    }
    else {
        console.log(imgPath);
        return false;
    }
};
exports.default = exist;
