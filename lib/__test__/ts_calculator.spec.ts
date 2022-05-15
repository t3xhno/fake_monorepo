import * as Calculator from "../src/ts_calculator";

describe("ts_calculator", () => {
  it("should add numbers", () => {
    expect(Calculator.add(2, 3)).toEqual(5);
  });
  
  it("should multiply numbers", () => {
    expect(Calculator.multiply(2, 3)).toEqual(6);
  })
});