'use strict'

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Employee extends Person {
    constructor(name, age, salary, department='unknown', hiredAt=new Date()) {
        super(name, age);
        this.salary = salary;
        this.department = department;
        this.hiredAt = hiredAt;
        this.leftAt = null;
        this.status = 'active';
        this.maxSalaryMultiplier = 1;
    }

    getInfo() {
        return `${this.name}(${this.age}) works at ${this.department} for ${this.salary} usd since|from ${this.hiredAt} [to ${this.leftAt}]`;
    }

    quit(isFired) {
        if (this.status === 'active') {
            if (isFired) {
                this.leftAt = new Date();
                this.status = 'fired';
                return true;
            }
            else {
                this.leftAt = new Date();
                this.status = 'quit';
                return false;
            }
        }
        else {
            throw new Error('The employee has already quit.');
        }   
    }

    increaseSalaryBy(newSalary) {
        if (newSalary > this.salary * this.maxSalaryMultiplier) {
            throw new Error('Salary too high');
        }
        else {
            // console.log(newSalary - this.salary);
            return (newSalary - this.salary);
        }       
    }

    setDepartment(newDepartment) {
        this.department = newDepartment;
    }
}

class Developer extends Employee {
    constructor(name, age, salary, department='unknown', hiredAt=new Date(), level) {
        super(name, age, salary, department, hiredAt);
        this.leftAt = null;
        this.status = 'active';
        this.maxSalaryMultiplier = 1.05;
        this.level = level;
    }

    changeLevel(newLevel) {
        if (newLevel !== this.level) {
            this.level = newLevel;
            return true;
        }
    }
}

class Director extends Employee {
    constructor(name, age, salary, department='unknown', hiredAt=new Date()) {
        super(name, age, salary, department, hiredAt);
        this.leftAt = null;
        this.status = 'active';
        this.maxSalaryMultiplier = 1.1;
    }

    fireEmployee(employeeToFire) {
        if (employeeToFire instanceof Employee) {
            employeeToFire.quit(true);
            return true;
        }
        else {
            throw new Error(`${employeeToFire} is not a employee here.`);
            return false;
        }
    }

    promoteDeveloper(developerToPromote, newLevel) {
        if (developerToPromote instanceof Developer) {
            if (newLevel === developerToPromote.level) {
                return false;
            }
            else {
                developerToPromote.changeLevel(newLevel);
                return true;
            }
        }
        else {
            throw new Error(`${developerToPromote} is not a employee here.`);
        }        
    }
}

