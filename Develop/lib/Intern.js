// Intern class that contains basic intern data
class Intern {
    constructor (name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
        this.role = "Intern"
    }

    // These get functions will be called to place inputted data from user into the cards
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Intern;