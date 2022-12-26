import resize from "../utilities/resizeFunction";
import express from "express";
import exist from "../utilities/fileExist";
import { unlinkSync } from "fs";
const res = express.response;
const h = 300;
const v = 300;
const fullURL = "D:\\FWD\\Image-Processing\\build\\imgs\\Full\\fjord.jpg";
const thumbURL =
  "D:\\FWD\\Image-Processing\\build\\imgs\\Thumb\\fjord-300-300.jpg";

describe("Test the resize function if it resizes the image ", () => {
  it("image resized", function () {
    expect(exist(fullURL)).toBeTruthy();

    if (exist(thumbURL)) {
      unlinkSync(thumbURL);

      resize(fullURL, thumbURL, h, v, res);
    } else {
      resize(fullURL, thumbURL, h, v, res);
      expect(exist(thumbURL)).toBeTruthy();
    }
  });
});
