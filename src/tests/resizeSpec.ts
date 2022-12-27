import resize from "../utilities/resizeFunction";
import express from "express";
import exist from "../utilities/fileExist";
import { unlinkSync } from "fs";
import path from "path";
const res = express.response;
const w = 300;
const h = 320;
const filename = "fjord";
const fullURL = path.join(__dirname, "..", "imgs", "Full", filename + ".jpg");

const thumbURL = path.join(
  __dirname,
  "..",
  "imgs",
  "Thumb",
  filename + "-" + w + "-" + h + ".jpg"
);



describe("Test if the image exist", () => {
  it("image exists", function () {

    expect(exist(fullURL)).toBeTruthy();
    resize(fullURL, thumbURL, w, h, res);
  });
});

describe("Test the resize function if it resizes the image ", () => {
  it("image resized", function () {

   
      expect(exist(thumbURL)).toBeTrue();
   
  
    
  });})