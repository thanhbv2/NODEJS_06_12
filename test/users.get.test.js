const axios = require('axios');
const chai = require('chai');
const expect = chai.expect;

describe("Get list todos", () => {

  it("Get list success return list todos", async() => {
    const response = await axios.get('http://localhost:3000/todos')
    const data = response.data;
    expect(data).to.have.property('httpCode');
    expect(data).to.have.property('result');
    expect(data.httpCode).to.equal(200);
    expect(data.result[0]).to.have.property('text');
    expect(data.result[0]).to.have.property('completed');
  })


  it("Get list falid return error", () => {
    //.....
  })


})


describe("Create  todos", () => {

  beforeEach(() => {
    // Chuan bi du lieu de test
  })
  afterEach(() => {
    // Lam gi sau khi chay xong test
  })
  // only dung de chay 1 case
  it.only("Create todo success", async() => {
    // Gia lap shipper
    // gia lap don hang
    // gia thong tin khach hanh ung don hang
    // check quyen cua ong van hanh

    const todo = {
      completed: true,
      text: 'test1111'
    }
    const response = await axios.post('http://localhost:3000/todos', todo)
    const data = response.data;
    expect(data).to.have.property('httpCode');
    expect(data).to.have.property('result');
    expect(data.httpCode).to.equal(200);
  })


  it("Create todo faild ---> do trung text ", () => {
    //.....
  })

  it("Create todo faild ---> do truyen text rong ", () => {
    //.....
  })

  it("Create todo faild ---> do truyen text rong ", () => {
    //.....
  })


})