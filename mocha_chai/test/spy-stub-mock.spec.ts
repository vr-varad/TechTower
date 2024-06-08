import Calculator from "../src/calculator";
import { expect } from "chai";
import sinon, { SinonSpy, SinonStub, SinonMock } from "sinon";

describe("Testing Hooks", () => {
  let calc: Calculator;
  let spy: SinonSpy;
  let stub: SinonStub;
  let mock: SinonMock;
  before(() => {
    calc = new Calculator();
  });

  after(() => {});

  beforeEach(() => {
    mock = sinon.mock(calc);
  });

  afterEach(() => {
    if (spy) spy.restore();
    if (stub) stub.restore();
    if (mock) mock.verify();
  });
  it("should return sum", () => {
    //arrange
    spy = sinon.spy(calc, "add");
    stub = sinon.stub(calc, "getRandomValue").returns(2);

    let expectation = mock.expects("logMessage").exactly(2).withArgs("Varad");

    //action
    const result = calc.add(1, 4);
    const a = calc.add(1, 23);

    //assert
    expect(result).to.equal(7);
    expect(spy.calledTwice).to.be.true;
    expectation.verify();
  });
  it("should return multiple", () => {
    //action
    const result = calc.mul(3, 8);

    //assert
    expect(result).to.equal(24);
  });
  it("should return substraction", () => {
    //arrange
    let expectation = mock.expects("logMessage").exactly(1).withArgs("Varad");

    //action
    const result = calc.sub(9, 4);

    //assert
    expect(result).to.equal(5);
    expectation.verify();
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
});
