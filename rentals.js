let people = 38;
let vansRented = (people/15).toFixed(0);
let totalCost = vansRented * 250;
let costPerPerson = (totalCost/people).toFixed(0);
let leftoverMoney = ( (people * costPerPerson) - totalCost);
console.log(totalCost);
console.log(costPerPerson);
console.log(leftoverMoney);
