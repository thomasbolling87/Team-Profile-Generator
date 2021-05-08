const Employee = require ('../lib/Employee');

test("This should return the employee's name, id, email, and role", () => {
    let employeeTest = new Employee ("John Smith", '03', "test@email.com");

    expect(employeeTest.getRole()).toEqual("Employee");
    expect(employeeTest.getName()).toEqual("John Smith");
    expect(employeeTest.getId()).toEqual('03');
    expect(employeeTest.getEmail()).toEqual("test@email.com");
});
