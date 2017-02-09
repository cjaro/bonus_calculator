var joffrey = {name: 'Joffrey', employeeNumber: '2405', annualSalary: '47000', reviewRating: 3};
var margaery = {name: 'Margaery', employeeNumber: '62347', annualSalary: '63500', reviewRating: 4};
var sansa = {name: 'Sansa', employeeNumber: '11435', annualSalary: '54000', reviewRating: 3};
var olenna = {name: 'Olenna', employeeNumber: '6243', annualSalary: '74750', reviewRating: 5};
var eddard = {name: 'Eddard', employeeNumber: '26835', annualSalary: '66000', reviewRating: 1};
var arya = {name: 'Arya', employeeNumber: '89068', annualSalary: '35000', reviewRating: 2};

var employees = [joffrey, margaery, sansa, olenna, eddard, arya]; /*margaery, sansa, olenna, eddard, arya*/


// function totalBonus(array) {
//   for(var i = 0; i < array.length; i++) {
//     if(array[i].reviewRating <= 2) {
//       bonusPercentage = array[i].bonusPercentage = 0;
//     } else if(array[i].reviewRating == 3) {
//       bonusPercentage = array[i].bonusPercentage = .04;
//     } else if(array[i].reviewRating == 4) {
//       bonusPercentage = array[i].bonusPercentage = .06;
//     } else if(array[i].reviewRating == 5) {
//       bonusPercentage = array[i].bonusPercentage = .1;
//     }
//   }
//   return bonusPercentage;
// }

totalBonus(employees);

function totalBonus(array) {
  for (var i = 0; i < array.length; i++) {
    var processedEmp = newFunction(array[i]);
    console.log('processed emp', processedEmp);
  }
}

function newFunction(employee) {
  console.log('running newFunction for ' + employee.name);
  // employee.bonusPercentage = 4;

  if(employee.reviewRating <= 2) {
    employee.bonusPercentage = 0;
  } else if(employee.reviewRating == 3) {
    employee.bonusPercentage = .04;
  } else if(employee.reviewRating == 4) {
    employee.bonusPercentage = .06;
  } else if(employee.reviewRating == 5) {
    employee.bonusPercentage = .1;
  }
  if (employee.employeeNumber.length == 4) {
    employee.bonusPercentage += .05;
  }
  if (employee.annualSalary > 65000) {
    employee.bonusPercentage -= .01;
  }

  console.log(employee);
  //if (employee.bonus) //no bonus is >13% or <0%

  // totalBonus = employee.bonusPercentage * annualSalary;
  //
  // totalCompensation = employee.totalBonus + annualSalary;



  // var totalBonus;


  // return bonusPercentage;

  var finishedEmployee = {
    name: employee.name,
    bonusPercentage: employee.bonusPercentage,
    totalCompensation: 0,
    totalBonus: totalBonus
  };

  return finishedEmployee;


}



    // console.log(array[i]);
    // console.log(i);
    // console.log(bonusPercentage);
  // console.log(employees[0].employeeNumber.length);
  // console.log(bonusPercentage);
  // return bonusPercentage;

// longevity(employees);
//   if(annualSalary > '65000') {
//     bonusPercentage -= .01
//   }
//   totalBonus = bonusPercentage * annualSalary;
// }


//
// console.log(totalBonus);
//
//
// for(var i = 0; i < employees.length; i++) {
//   var employees[i] = new EmployeeBonus(name, employeeNumber, annualSalary, reviewRating); //(name, employeeNumber, annualSalary, reviewRating, bonusPercentage, totalCompensation, totalBonus)
// }

// this.name = name;
// this.employeeNumber = employeeNumber;
// this.annualSalary = annualSalary;
// this.reviewRating = reviewRating;
// this.bonusPercentage = bonusPercentage;
// this.totalCompensation = totalCompensation;
// this.totalBonus = totalBonus;
