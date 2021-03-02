const Employee = require('../lib/Employee');

test("return name via constructor", () => {
  const test = "John";
  const testEmployee = new Employee(test, 1, "john@gmail.com");
  expect(testEmployee.name).toBe(test);
});

test("return id via constructor", () => {
  const test = "1";
  const testEmployee = new Employee("John", test, "john@gmail.com");
  expect(testEmployee.id).toBe(test);
});
test("return email via constructor", () => {
  const test = "john@gmail.com";
  const testEmployee = new Employee("John", 1, test);
  expect(testEmployee.email).toBe(test);
});
test("getRole() should return Employee", () => {
  const test = "Employee";
  const testEmployee = new Employee("John", 1, "john@gmail.com");
  expect(testEmployee.getRole()).toBe(test);
});

test("return name via getName() method", () => {
  const test = "John";
  const testEmployee = new Employee(test, 1, "john@gmail.com");
  expect(testEmployee.getName()).toBe(test);
});
test("return id via getId() method", () => {
  const test = "1";
  const testEmployee = new Employee("John", test, "john@gmail.com");
  expect(testEmployee.getId()).toBe(test);
});
test("return name via getEmail() method", () => {
  const test = "john@gmail.com";
  const testEmployee = new Employee("John", 1, test);
  expect(testEmployee.getEmail()).toBe(test);
});