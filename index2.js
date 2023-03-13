const Schema = require('./employees_pb');
const fs = require('fs');

const boda = new Schema.Employee();

boda.setId(1001);
boda.setName("Abdallah");
boda.setSalary(1000);

const rick = new Schema.Employee();

rick.setId(1002);
rick.setName("Rick");
rick.setSalary(2000);

const edmond = new Schema.Employee();

edmond.setId(1003);
edmond.setName("Edmond");
edmond.setSalary(3000);


const employees = new Schema.Employees();
employees.addEmployees(boda);
employees.addEmployees(rick);
employees.addEmployees(edmond);

const bytes = employees.serializeBinary();
console.log('binary' + bytes);

fs.writeFileSync('employeesbinary', bytes);

const employees2 = Schema.Employees.deserializeBinary(bytes);

console.log(employees2.toString());