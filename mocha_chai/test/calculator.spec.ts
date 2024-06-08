import { expect } from "chai";
import calculator from "../src/calculator";
import Sinon, { SinonStub } from "sinon";

describe("Testing Calculator Class", () => {
  let stub:SinonStub;
  it("should return sum", () => {
    // arrange
    const calc = new calculator();
    stub = Sinon.stub(calc,'getRandomValue').returns(3)

    //action
    const result = calc.add(1, 4);

    //assert
    expect(result).to.equal(8);
    stub.restore()
  });
  it("should return multiple", () => {
    // arrange
    const calc = new calculator();

    //action
    const result = calc.mul(3, 8);

    //assert
    expect(result).to.equal(24);
  });
  it("should return substraction", () => {
    // arrange
    const calc = new calculator();

    //action
    const result = calc.sub(9, 4);

    //assert
    expect(result).to.equal(5);
  });
  it("should return division", () => {
    // arrange
    const calc = new calculator();

    //action
    const result = calc.div(4, 2);

    //assert
    expect(result).to.equal(2);
  });
  it("should return div", () => {
    // arrange
    const calc = new calculator();
    expect(()=>calc.div(9,0)).to.throw("Not a Number");
  });
});
