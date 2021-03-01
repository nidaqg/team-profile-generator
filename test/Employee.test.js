const Employee = require('../lib/Employee');

describe("Employee class", () => {
   describe("getName", () => {
 it("gets name from inquirer function depending on employee type chosen", () => {
     const name = "John";
    
     expect (getName(name)).toEqual("John")
 });
});
  describe("getId", () => {
 it("gets ID from inquirer function depending on employee type chosen", () => {

 })

});
  describe("getEmail", () => {

});
  describe("getRole", () => {
    expect(new Role("Employee").toBe(true));
});

});