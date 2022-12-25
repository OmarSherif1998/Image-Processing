import express from "express";
import path from "path";
import validate from "../utilities/pramsValidatation";
import exist from "../utilities/fileExist";
import resize from "../utilities/resizeFunction";
import fs from "fs";
const resizeRoute = express.Router();

resizeRoute.get("/", (req: express.Request, res: express.Response) => {
  const filename = req.query.filename as unknown as string;
  const height = req.query.height as unknown as string;
  const width = req.query.width as unknown as string;

  const dirPath = path.join(__dirname, "..", "imgs", "Thumb");
  const fullPath = path.join(
    __dirname,
    "..",
    "imgs",
    "Full",
    filename + ".jpg"
  );
  const thumbPath = path.join(
    __dirname,
    "..",
    "imgs",
    "Thumb",
    filename + "-" + width + "-" + height + ".jpg"
  );

  if (!validate(height, width, res)) {
    return;
  }
  if (exist(thumbPath)) {
    res.sendFile(thumbPath);
  } else if (exist(fullPath)) {
    if (exist(dirPath)) {
      resize(fullPath, thumbPath, Number(width), Number(height), res);
    } else {
      fs.mkdirSync(dirPath);
      resize(fullPath, thumbPath, Number(width), Number(height), res);
    }
  } else {
    res.send("image cannot be found");
  }
});
export const route = resizeRoute;
