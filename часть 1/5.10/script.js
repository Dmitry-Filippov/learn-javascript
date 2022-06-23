// 1
let user = {
  name: "John",
  years: 30,
};

let { name, years, isAdmin = false } = user;

// 2
function topSalary(salaries) {
  let result = {
    name: null,
  };
  for (let [name, salary] of Object.entries(salaries)) {
    if (!result.name || result.salary < salary) {
      result = {
        name: name,
        salary: salary,
      };
    }
  }
  return result.name;
}
