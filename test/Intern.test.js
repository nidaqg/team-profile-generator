const Intern = require("../lib/Intern");

test("return school via constructor", () => {
  const test = "Radnor High";
  const testIntern = new Intern("John", 1, "john@gmail.com", test);
  expect(testIntern.school).toBe(test);
});

test("getRole() should return Intern", () => {
  const test = "Intern";
  const testIntern = new Intern("John", 1, "john@gmail.com", "Radnor High");
  expect(testIntern.getRole()).toBe(test);
});

test("return school via getSchool() method", () => {
  const test = "Radnor High";
  const testIntern = new Intern("John", 1, "john@gmail.com", test);
  expect(testIntern.getSchool()).toBe(test);
});