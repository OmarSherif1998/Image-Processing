"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fileExist_1 = __importDefault(require("../utilities/fileExist"));
const path_1 = __importDefault(require("path"));
const imgPath = path_1.default.join(__dirname, "..", "imgs", "Full", "fjord" + ".jpg");
describe("The existence of a file path", () => {
    it("The path exists", function () {
        expect((0, fileExist_1.default)(imgPath)).toBeTruthy();
    });
});
