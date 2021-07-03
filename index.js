const employee ={
    name: 'Shawn',
    streetAddress: 'some where in NY'
}

const newEmployee ={
    name: 'Sam',
    streetAddress: '11 Broadway'
}

function updateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    newEmployee[name]= streetAddress
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(newEmployee, name, streetAddress) {
    newEmployee[name] = streetAddress
  
    return newEmployee;
  }

  function deleteFromEmployeeByKey(asdasd1, whatever) {
    const newEmployee2 = Object.assign({}, asdasd1);
  
    delete newEmployee2[whatever];
  
    return newEmployee2;
  }

  function destructivelyDeleteFromEmployeeByKey(newEmployee, info){
      delete newEmployee[info]
      return newEmployee
  }
