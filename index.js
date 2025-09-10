// Code your solution in this file!
function returnFirstTwoDrivers(drivers){
    const newDrivers=drivers.slice(0,2);
    return newDrivers;
}
const allDrivers=(['Antonia', 'Nuru', 'Amari', 'Mo']);
console.log(returnFirstTwoDrivers(allDrivers));

function returnLastTwoDrivers(drivers){
    const lastDrivers=drivers.slice (-2);
    return lastDrivers;
}console.log(returnLastTwoDrivers(allDrivers));

const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];
function createFareMultiplier(multiplier){
    return function(fare){
        return fare*multiplier;
    }
}
const fareDoubler=createFareMultiplier(2);
const fareTripler=createFareMultiplier(3);
console.log(fareTripler(1700));

function selectDifferentDrivers(allDrivers,) {

}

function selectDifferentDrivers(drivers, driverSelectorFn) {
  return driverSelectorFn(drivers);
}
console.log(selectDifferentDrivers(allDrivers, returnFirstTwoDrivers));
console.log(selectDifferentDrivers(allDrivers, returnLastTwoDrivers));
