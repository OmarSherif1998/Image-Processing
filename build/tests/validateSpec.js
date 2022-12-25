"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pramsValidatation_1 = __importDefault(require("../utilities/pramsValidatation"));
const express_1 = __importDefault(require("express"));
const h = "200";
const v = "200";
const res = express_1.default.response;
describe("Test the entered values", () => {
    it("Values are correct", function () {
        expect((0, pramsValidatation_1.default)(h, v, res)).toBeTruthy();
    });
});
