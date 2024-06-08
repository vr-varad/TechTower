import { expect } from "chai";
import calculator from "../src/calculator";
import nock from "nock";

const baseUrl = "https://jsonplaceholder.typicode.com"

describe.only("Get Post Mocking API Testing", () => {
  let calc: calculator;
  it("should make a get req", async () => {
    calc = new calculator();

    const mockedResponse = {
        id: 1,
        name:"Varad Gupta"
    }
    nock(baseUrl).get('/users/1').reply(200, mockedResponse)

    const response = await calc.getUsers();

    expect(response.status).to.equal(200);
    expect(response.data.id).to.equal(1);
  });

  it("should make a post req", async () => {
    calc = new calculator();

    const userPayload: any = {
        "name": "Varad Gupta1",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    }

    const expectedUserResponse = {
        "id":11,
        userPayload
    }

    nock(baseUrl).post('/users',userPayload).reply(201,expectedUserResponse)

    const response = await calc.postUsers(userPayload);

    expect(response.status).to.equal(201);
    expect(response.data.id).to.equal(11);
  });

  after(()=>{
    nock.restore()
  })
});
