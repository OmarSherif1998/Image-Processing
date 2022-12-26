"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const resizeFunction_1 = __importDefault(require("../utilities/resizeFunction"));
const express_1 = __importDefault(require("express"));
const fileExist_1 = __importDefault(require("../utilities/fileExist"));
const fs_1 = require("fs");
const res = express_1.default.response;
const h = 300;
const v = 300;
const fullURL = "D:\\FWD\\Image-Processing\\build\\imgs\\Full\\fjord.jpg";
const thumbURL = "D:\\FWD\\Image-Processing\\build\\imgs\\Thumb\\fjord-300-300.jpg";
describe("Test the resize function if it resizes the image ", () => {
    it("image resized", function () {
        expect((0, fileExist_1.default)(fullURL)).toBeTruthy();
        if ((0, fileExist_1.default)(thumbURL)) {
            (0, fs_1.unlinkSync)(thumbURL);
            (0, resizeFunction_1.default)(fullURL, thumbURL, h, v, res);
        }
        else {
            (0, resizeFunction_1.default)(fullURL, thumbURL, h, v, res);
            expect((0, fileExist_1.default)(thumbURL)).toBeTruthy();
        }
    });
});
