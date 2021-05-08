const Intern = require ('../lib/Intern');

describe ("Intern", () => {
    test("This should return Intern's name, id, email, github, and role", () => {
        let InternTest = new Intern ("Bfb Da Packman", "04", "test3@email.com", "University of Houston");

        expect(InternTest.getRole()).toEqual("Intern");
        expect(InternTest.getName()).toEqual("Bfb Da Packman");
        expect(InternTest.getId()).toEqual("04");
        expect(InternTest.getEmail()).toEqual("test3@email.com");
        expect(InternTest.getSchool()).toEqual("University of Houston");
    })
});