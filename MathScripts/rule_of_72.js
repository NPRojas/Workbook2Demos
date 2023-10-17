var savings = 300000;
var interestRate = 8;
var rule72 = 72/interestRate;

console.log(`At a ${interestRate}% interest rate, your savings account will be worth ${(savings*2).toFixed(2)} in ${rule72.toFixed(1)} years`);
