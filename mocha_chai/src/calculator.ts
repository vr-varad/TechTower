import axios from 'axios'

const baseUrl = "https://jsonplaceholder.typicode.com"

class calculator {
  add(a: number, b: number): number {
    this.logMessage("Varad");
    const c = this.getRandomValue();
    return a + b + c;
  }

  sub(a: number, b: number): number {
    this.logMessage("Varad");
    return a - b;
  }

  mul(a: number, b: number): number {
    return a * b;
  }

  div(a: number, b: number): number {
    if (b === 0) throw new Error("Not a Number");
    return a / b;
  }

  getRandomValue(): number {
    return Math.trunc(Math.random() * 10) + 1;
  }

  logMessage(msg: string): void {
    console.log(msg);
  }

  asyncFunctionPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(4);
      }, 4000);
    });
  }

  async getUsers() {
    return await axios.get(`${baseUrl}/users/1`);
  }

  async postUsers(userPayload: any) {
    return await axios.post(
      `${baseUrl}/users`,
      userPayload
    );
  }
}

export default calculator;
