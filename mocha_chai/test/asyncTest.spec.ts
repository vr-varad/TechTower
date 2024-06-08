import { expect } from "chai";
import calculator from "../src/calculator"

describe('Async Await and Promise Test',()=>{
    let calc:calculator;
     it('should work with async await',async()=>{
        //arrange
        calc = new calculator();

        //act
        const result= await calc.asyncFunctionPromise();

        //assert
        expect(result).to.equal(4);

     })
})