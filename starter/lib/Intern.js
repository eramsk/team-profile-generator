
// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.role = 'Intern';
        this.school = school;
    }

    // Class Methods

    getRole() {
        return this.role;
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;