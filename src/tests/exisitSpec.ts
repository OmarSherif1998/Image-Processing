import exist from "../utilities/fileExist";

const imgPath = `D:\\FWD\\Image-Processing\\src\\imgs\\Full\\fjord.jpg`;

describe("The existence of a file path", () => {
  it("The path exists", function () {
    expect(exist(imgPath)).toBeTruthy();
  });
});
