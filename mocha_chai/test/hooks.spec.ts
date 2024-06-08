import Calculator from "../src/calculator";
import { expect } from "chai";

describe.skip("Testing Hooks", () => {
  let calc: Calculator;
  before(() => {
    calc = new Calculator();
  });

  after(() => {
    console.log("after");
  });

  it("should return sum", () => {
    //action
    const result = calc.add(1, 4);

    //assert
    expect(result).to.equal(5);
  });
  it("should return multiple", () => {
    //action
    const result = calc.mul(3, 8);

    //assert
    expect(result).to.equal(24);
  });
  it("should return substraction", () => {
    //action
    const result = calc.sub(9, 4);

    //assert
    expect(result).to.equal(5);
  });
  it("should return division", () => {
    //action
    const result = calc.div(4, 2);

    //assert
    expect(result).to.equal(2);
  });
  it("should return div", () => {
    expect(() => calc.div(9, 0)).to.throw("Not a Number");
  });

  beforeEach(() => {
    console.log("beforeEach");
  });

  afterEach(() => {
    console.log("afterEach");
  });
});
