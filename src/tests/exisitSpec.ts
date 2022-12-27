import exist from "../utilities/fileExist";
import path from "path";

const imgPath = path.join(__dirname, "..", "imgs", "Full", "fjord" + ".jpg");

describe("The existence of a file path", () => {
  it("The path exists", function () {
    expect(exist(imgPath)).toBeTruthy();
  });
});
