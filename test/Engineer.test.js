const Engineer = require("../lib/Engineer");

test("return github account via constructor", () => {
  const test = "GitHubJohn";
  const testEngineer = new Engineer("John", 1, "john@gmail.com", test);
  expect(testEngineer.github).toBe(test);
});

test("getRole() should return Engineer", () => {
  const test = "Engineer";
  const testEngineer = new Engineer("John", 1, "john@gmail.com", "GitHubJohn");
  expect(testEngineer.getRole()).toBe(test);
});

test("return GitHub account via getGithub() method", () => {
  const test = "GitHubJohn";
  const testEngineer = new Engineer("John", 1, "john@gmail.com", test);
  expect(testEngineer.getGithub()).toBe(test);
});