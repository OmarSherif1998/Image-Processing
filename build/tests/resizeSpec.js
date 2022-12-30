"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const resizeFunction_1 = __importDefault(require("../utilities/resizeFunction"));
const express_1 = __importDefault(require("express"));
const fileExist_1 = __importDefault(require("../utilities/fileExist"));
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const res = express_1.default.response;
const w = 450;
const h = 700;
const filename = "palmtunnel";
const fullURL = path_1.default.join(__dirname, "..", "imgs", "Full", filename + ".jpg");
const thumbURL = path_1.default.join(__dirname, "..", "imgs", "Thumb", filename + "-" + w + "-" + h + ".jpg");
if ((0, fileExist_1.default)(thumbURL)) {
    (0, fs_1.unlinkSync)(thumbURL);
    console.log("img deleted");
}
describe("Test if the image exist", () => {
    it("image exists", async function () {
        expect((0, fileExist_1.default)(fullURL)).toBeTruthy();
    });
});
(0, resizeFunction_1.default)(fullURL, thumbURL, w, h, res);
describe("Test the resize function if it resizes the image ", () => {
    it("image resized", function () {
        expect((0, fileExist_1.default)(thumbURL)).toBeTruthy();
    });
});
