const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }
    getName () {
        return this.name;
       };
    getId () {
           return this.id;
       };
    getEmail () {
           return this.email;
       };
    getRole () {
        return `Manager`;
       };
    getOfficeNumber () {
        return this.officeNumber;
    }
}