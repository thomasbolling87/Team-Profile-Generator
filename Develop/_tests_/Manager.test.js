const Manager = require ('../lib/Manager');

describe ("Manager", () => {
    test("This should return Manager's name, id, email, github, and role", () => {
        let ManagerTest = new Manager ("James Prince", "01", "test1@email.com", "2818308004");

        expect(ManagerTest.getRole()).toEqual("Manager");
        expect(ManagerTest.getName()).toEqual("James Prince");
        expect(ManagerTest.getId()).toEqual("01");
        expect(ManagerTest.getEmail()).toEqual("test1@email.com");
        expect(ManagerTest.getOfficenumber()).toEqual("2818308004");
    })
});