// Engineer class that contains basic engineer data
class Engineer {
    constructor (name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
        this.role = "Engineer";
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
    getgithub() {
        return this.github;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Engineer;