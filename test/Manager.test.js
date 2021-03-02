const Manager = require("../lib/Manager");

test("return office number via constructor", () => {
  const test = "7301";
  const testManager = new Manager("John", 1, "john@gmail.com", test);
  expect(testManager.officeNumber).toBe(test);
});

test("getRole() should return Manager", () => {
  const test = "Manager";
  const testManager = new Manager("John", 1, "john@gmail.com", 7301);
  expect(testManager.getRole()).toBe(test);
});

test("return office number via getOfficeNumber() method", () => {
  const test = "7301";
  const testManager = new Manager("John", 1, "john@gmail.com", test);
  expect(testManager.getOfficeNumber()).toBe(test);
});