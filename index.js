const fs = require("fs");
const employees = []

employees.push({
    "name": "Boda",
    "salary": 1000,
    "id": 1001
})

const ali = {
    "name": "ali",
    "salary": 2000,
    "id": 1002
}

employees.push(ali)

employees.push({
    "name": "Edmond",
    "salary": 5000,
    "id": 1003
})
fs.writeFileSync('jsonData.json',JSON.stringify(employees))
console.log(JSON.stringify(employees));