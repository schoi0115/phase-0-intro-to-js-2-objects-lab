const employee ={
    name: 'Shawn',
    streetAddress: 'some where in NY'
}
//  ['']
// const newEmployee ={
//     name: 'Sam',
//     streetAddress: '11 Broadway'
// }



function updateEmployeeWithKeyAndValue(employee, anyWord, value) {
    
    const newEmployee = { ...employee }
    newEmployee[anyWord] = value
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee}
    delete newEmployee[key]
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}

// function updateEmployeeWithKeyAndValue(employee, name, streetAddress) {
//     newEmployee[name]= streetAddress
//     return newEmployee
// }

// function destructivelyUpdateEmployeeWithKeyAndValue(newEmployee, name, streetAddress) {
//     newEmployee[name] = streetAddress
  
//     return newEmployee;
//   }

//   function deleteFromEmployeeByKey(asdasd1, whatever) {
//     const newEmployee2 = Object.assign({}, asdasd1);
  
//     delete newEmployee2[whatever];
  
//     return newEmployee2;
//   }

//   function destructivelyDeleteFromEmployeeByKey(newEmployee, info){
//       delete newEmployee[info]
//       return newEmployee
//   }
