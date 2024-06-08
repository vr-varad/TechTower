import { assert, expect, should } from "chai"

describe('Assert Style',()=>{
    it('expect assertion style',()=>{
        //arrange
        const name : string = "Varad Gupta"
        const age : number = 23
        const objData : object = {
            name : 'Varad',
            age : 23
        }
        const arrNum : number[] = [1,2,3,4,5];
        const boolData : boolean = true

        //act


        //assert
        expect(name).to.be.ok
        expect(name).to.equal("Varad Gupta")
        expect(name).to.not.equal("Varad")
        expect(name).to.be.a('string')

        expect(age).to.be.ok
        expect(age).to.equal(23)
        expect(age).to.be.a('number')

        expect(objData).to.be.ok
        expect(objData).to.be.a('object')
        expect(objData).to.have.property('name').equal("Varad")
        expect(objData).to.have.property('age').equal(23)

        expect(arrNum).to.be.ok
        expect(arrNum).to.have.lengthOf(5)
        expect(arrNum).to.have.lengthOf(5).that.include(1)
        expect(arrNum).to.have.lengthOf(5).that.include(2)
        expect(arrNum).to.have.lengthOf(5).that.include(3)
        expect(arrNum).to.be.a('array')

        expect(boolData).to.be.ok
        expect(boolData).to.be.true
        expect(boolData).to.be.a('boolean')
        
    })

    it('should assertion style',()=>{
        should()

        //arrange
        const name : string = "Varad Gupta"
        const age : number = 23
        const objData : object = {
            name : 'Varad',
            age : 23
        }
        const arrNum : number[] = [1,2,3,4,5];
        const boolData : boolean = true

        //act


        //assert
        name.should.be.ok
        name.should.equal("Varad Gupta")
        name.should.not.equal("Varad")
        name.should.be.a('string')

        age.should.be.ok
        age.should.equal(23)
        age.should.be.a('number')

        objData.should.be.ok
        objData.should.be.a('object')
        objData.should.have.property('name').equal("Varad")
        objData.should.have.property('age').equal(23)

        arrNum.should.be.ok
        arrNum.should.have.lengthOf(5)
        arrNum.should.have.lengthOf(5).that.include(1)
        arrNum.should.have.lengthOf(5).that.include(2)
        arrNum.should.have.lengthOf(5).that.include(3)
        arrNum.should.be.a('array')

        boolData.should.be.ok
        boolData.should.be.true
        boolData.should.be.a('boolean')
        
    })

    it('assert assertion style',()=>{
        //arrange
        const name : string = "Varad Gupta"
        const age : number = 23
        const objData : object = {
            name : 'Varad',
            age : 23
        }
        const arrNum : number[] = [1,2,3,4,5];
        const boolData : boolean = true

        //act


        //assert
        assert.isOk(name)
        assert.equal(name, "Varad Gupta")
        assert.typeOf(name, 'string')

        assert.isOk(age)
        assert.equal(age, 23)
        assert.typeOf(age, 'number')

        assert.isOk(objData)
        assert.typeOf(objData, 'object')
        assert.deepEqual(objData, {
            name: "Varad",
            age: 23
        })

        assert.isOk(arrNum)
        assert.deepEqual(arrNum,[1,2,3,4,5])
        assert.include(arrNum,1)

        assert.isOk(boolData)
        assert.equal(boolData, true)
        
    })
})
