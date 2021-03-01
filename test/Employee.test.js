const Employee = require('../lib/Employee');

describe("Employee class", () => {
  it("creates object with name, id and email data", () => {
    const name = "John";
     const id = "555";
     const email = "abc@gmail";
     let obj = {name, id, email};

     expect(obj).toEqual({name:"John", id:"555", email:"abc@gmail"})
  });
   describe("getName", () => {
 it("gets name from array of employee data", () => {
  const name = "John";
    
     expect (getName(name)).toEqual("John")
 });
});
  describe("getId", () => {
 it("", () => {

 })

});
  describe("getEmail", () => {

});
  describe("getRole", () => {
    expect(new Role("Employee").toBe(true));
});

});