"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const resizeFunction_1 = __importDefault(require("../utilities/resizeFunction"));
const express_1 = __importDefault(require("express"));
const fileExist_1 = __importDefault(require("../utilities/fileExist"));
const path_1 = __importDefault(require("path"));
const res = express_1.default.response;
const w = 300;
const h = 320;
const filename = "fjord";
const fullURL = path_1.default.join(__dirname, "..", "imgs", "Full", filename + ".jpg");
const thumbURL = path_1.default.join(__dirname, "..", "imgs", "Thumb", filename + "-" + w + "-" + h + ".jpg");
describe("Test if the image exist", () => {
    it("image exists", function () {
        expect((0, fileExist_1.default)(fullURL)).toBeTruthy();
        (0, resizeFunction_1.default)(fullURL, thumbURL, w, h, res);
    });
});
describe("Test the resize function if it resizes the image ", () => {
    it("image resized", function () {
        expect((0, fileExist_1.default)(thumbURL)).toBeTrue();
    });
});
