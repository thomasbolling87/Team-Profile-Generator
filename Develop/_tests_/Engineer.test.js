// Test page for the Engineer values
const Engineer = require ('../lib/Engineer');

test("This should return the engineer's name, id, email, github, and role", () => {
    let engineerTest = new Engineer ("Paul Wall", "02", "test2@email.com", "PaulWall281");

    expect(engineerTest.getRole()).toEqual("Engineer");
    expect(engineerTest.getName()).toEqual("Paul Wall");
    expect(engineerTest.getId()).toEqual("02");
    expect(engineerTest.getEmail()).toEqual("test2@email.com");
    expect(engineerTest.getgithub()).toEqual("PaulWall281");
});
