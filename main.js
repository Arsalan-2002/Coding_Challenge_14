import { calculateInterest } from './interestRate.js';
import { calculateLoanPayment } from './loanPayment.js';
import { calculateInvestmentReturn } from './investmentReturn.js';

// Add event listeners and functions to handle UI interactions

console.log(calculateInterest(1000, 0.05, 1)); // Test import
console.log(calculateLoanPayment(10000, 0.05, 12)); // Test import
console.log(calculateInvestmentReturn(1000, 0.05, 1, 12)); // Test import
