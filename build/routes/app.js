"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const pramsValidatation_1 = __importDefault(require("../utilities/pramsValidatation"));
const fileExist_1 = __importDefault(require("../utilities/fileExist"));
const resizeFunction_1 = __importDefault(require("../utilities/resizeFunction"));
const fs_1 = __importDefault(require("fs"));
const resizeRoute = express_1.default.Router();
resizeRoute.get("/", (req, res) => {
    const filename = req.query.filename;
    const height = req.query.height;
    const width = req.query.width;
    const dirPath = path_1.default.join(__dirname, "..", "imgs", "Thumb");
    const fullPath = path_1.default.join(__dirname, "..", "imgs", "Full", filename + ".jpg");
    const thumbPath = path_1.default.join(__dirname, "..", "imgs", "Thumb", filename + "-" + width + "-" + height + ".jpg");
    if (!(0, pramsValidatation_1.default)(height, width, res)) {
        return;
    }
    if ((0, fileExist_1.default)(thumbPath)) {
        res.sendFile(thumbPath);
    }
    else if ((0, fileExist_1.default)(fullPath)) {
        if ((0, fileExist_1.default)(dirPath)) {
            (0, resizeFunction_1.default)(fullPath, thumbPath, Number(width), Number(height), res);
        }
        else {
            fs_1.default.mkdirSync(dirPath);
            (0, resizeFunction_1.default)(fullPath, thumbPath, Number(width), Number(height), res);
        }
    }
    else {
        res.send("image cannot be found");
    }
});
exports.route = resizeRoute;
