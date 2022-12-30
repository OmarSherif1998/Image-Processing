import sharp from "sharp";
import { Response } from "express";

const resize = (
  fullPath: string,
  thumbPath: string,
  width: number,
  height: number,
  res: Response
): void => {
  sharp(fullPath)
    .resize(width, height)
    .toFile(thumbPath, (err) => {
      if (err) {
        res.send("Please enter numerical numbers");
        throw err;
      }
      res.sendFile(thumbPath);
    });
};

export default resize;
