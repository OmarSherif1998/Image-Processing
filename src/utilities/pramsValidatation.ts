import { Response } from "express";

const validate = (height: string, width: string, res: Response): boolean => {
  const h = parseInt(height);
  const w = parseInt(width);

  if (!isNaN(h) && !isNaN(w)) {
    if (h > 0 && w > 0) {
      return true;
    } else {
      res.send("please enter postive numbers");
    }
  } else {
    res.send("please enter numbers");
  }
  return false;
};

export default validate;
