import { existsSync } from "fs";

const exist = (imgPath: string): boolean => {
  if (existsSync(imgPath)) {
    console.log(imgPath + " exists.");
    return true;
  } else {
    console.log(imgPath);
    return false;
  }
};

export default exist;
