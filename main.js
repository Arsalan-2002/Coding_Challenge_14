import { calculateInterest } from './interestRate.js';
import { calculateLoanPayment } from './loanPayment.js';
import { calculateInvestmentReturn } from './investmentReturn.js';

document.getElementById('calculate-interest').addEventListener('click', () => {
    const principal = parseFloat(document.getElementById('principal-interest').value);
    const rate = parseFloat(document.getElementById('rate-interest').value);
    const time = parseFloat(document.getElementById('time-interest').value);
    const interest = calculateInterest(principal, rate, time);
    document.getElementById('interest-result').textContent = `Interest: ${interest.toFixed(2)}`;
});

document.getElementById('calculate-loan').addEventListener('click', () => {
    const principal = parseFloat(document.getElementById('principal-loan').value);
    const rate = parseFloat(document.getElementById('rate-loan').value);
    const time = parseInt(document.getElementById('time-loan').value);
    const loanPayment = calculateLoanPayment(principal, rate, time);
    document.getElementById('loan-result').textContent = `Monthly Payment: ${loanPayment.toFixed(2)}`;
});

document.getElementById('calculate-investment').addEventListener('click', () => {
    const principal = parseFloat(document.getElementById('principal-investment').value);
    const rate = parseFloat(document.getElementById('rate-investment').value);
    const time = parseFloat(document.getElementById('time-investment').value);
    const compounded = parseInt(document.getElementById('compounded-investment').value);
    const investmentReturn = calculateInvestmentReturn(principal, rate, time, compounded);
    document.getElementById('investment-result').textContent = `Future Value: ${investmentReturn.toFixed(2)}`;
});
