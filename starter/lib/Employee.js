
// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.role = 'Employee';
        this.email = email;
    }

    // Class Method

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role
    }
}

module.exports = Employee;