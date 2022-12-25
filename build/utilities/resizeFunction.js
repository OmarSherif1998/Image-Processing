"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
const resize = (fullPath, thumbPath, width, height, res) => {
    (0, sharp_1.default)(fullPath)
        .resize(width, height)
        .toFile(thumbPath, (err) => {
        if (err) {
            throw err;
        }
        res.sendFile(thumbPath);
    });
};
exports.default = resize;
