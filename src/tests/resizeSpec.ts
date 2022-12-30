import resize from "../utilities/resizeFunction";
import express from "express";
import exist from "../utilities/fileExist";
import { unlinkSync } from "fs";
import path from "path";

const res = express.response;
const w = 450;
const h = 700;
const filename = "palmtunnel";
const fullURL = path.join(__dirname, "..", "imgs", "Full", filename + ".jpg");

const thumbURL = path.join(
  __dirname,
  "..",
  "imgs",
  "Thumb",
  filename + "-" + w + "-" + h + ".jpg"
);

if (exist(thumbURL)) {
  unlinkSync(thumbURL);
  console.log("img deleted");
}

describe("Test if the image exist", () => {
  it("image exists", async function () {
    expect(exist(fullURL)).toBeTruthy();
  });
});

resize(fullURL, thumbURL, w, h, res);

describe("Test the resize function if it resizes the image ", () => {
  it("image resized", function () {
    expect(exist(thumbURL)).toBeTruthy();
  });
});
