'use strict'

function Person(name, age) {
    this.name = name;
    this.age = age;
}

function Employee(name, age, salary, department='unknown', hiredAt=new Date()) {
    Person.call(this, name, age);
    this.salary = salary;
    this.department = department;
    this.hiredAt = hiredAt;
    this.leftAt = null;
    this.status = 'active';
    this.maxSalaryMultiplier = 1;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.getInfo = function () {
    return `${this.name}(${this.age}) works at ${this.department} for ${this.salary} usd since|from ${this.hiredAt} [to ${this.leftAt}]`;
}

Employee.prototype.quit = function (isFired) {
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

Employee.prototype.increaseSalaryBy = function(newSalary) {
    if (newSalary > this.salary * this.maxSalaryMultiplier) {
        throw new Error('Salary too high');
    }
    else {
        // console.log(newSalary - this.salary);
        return (newSalary - this.salary);
    }
}

Employee.prototype.setDepartment = function(newDepartment) {
    this.department = newDepartment;
}

// var chase = new Employee('chase', 18, 100)
// chase.increaseSalaryBy(100);

function Developer(name, age, salary, department='unknown', hiredAt=new Date(), level) {
    Employee.call(this, name, age, salary, department, hiredAt, leftAt, status, maxSalaryMultiplier);
    this.maxSalaryMyltiplier = 1.05;
    this.level = level;
}

Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.changeLevel = function(newLevel) {
    if (newLevel !== this.level) {
        this.level = newLevel;
        return true;
    }
}

function Director(name, age, salary, department='unknown', hiredAt=new Date()) {
    Employee.call(this, name, age, salary, department, hiredAt, leftAt, status, maxSalaryMultiplier);
    this.maxSalaryMyltiplier = 1.1;
}

Director.prototype = Object.create(Employee.prototype);
Director.prototype.constructor = Director;

Director.prototype.fireEmployee = function(employeeToFire) {
    if (employeeToFire instanceof Employee) {
        employeeToFire.quit(true);
        return true;
    }
    else {
        throw new Error(`${employeeToFire} is not a employee here.`);
        return false;
    }
}

Director.prototype.promoteDeveloper = function(developerToPromote, newLevel) {
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



