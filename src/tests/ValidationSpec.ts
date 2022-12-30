import validate from "../utilities/pramsValidation";
import express from "express";

const h = "200";
const v = "200";
const res = express.response;

describe("Test the entered values", () => {
  it("Values are correct", function () {
    expect(validate(h, v, res)).toBeTruthy();
  });
});
