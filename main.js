//U32196076

import { calculateInterest } from './interestRate.js';
import { calculateLoanPayment } from './loanPayment.js';
import { calculateInvestmentReturn } from './investmentReturn.js';

function validateInputs(inputs) {
    for (const input of inputs) {
        if (isNaN(input) || input === '' || input < 0) {
            return false;
        }
    }
    return true;
}

document.getElementById('calculate-interest').addEventListener('click', () => {
    const principal = parseFloat(document.getElementById('principal-interest').value);
    const rate = parseFloat(document.getElementById('rate-interest').value);
    const time = parseFloat(document.getElementById('time-interest').value);
    
    if (validateInputs([principal, rate, time])) {
        const interest = calculateInterest(principal, rate, time);
        document.getElementById('interest-result').textContent = `Interest: ${interest.toFixed(2)}`;
    } else {
        document.getElementById('interest-result').textContent = 'Please enter valid numbers for all fields.';
    }
});

document.getElementById('calculate-loan').addEventListener('click', () => {
    const principal = parseFloat(document.getElementById('principal-loan').value);
    const rate = parseFloat(document.getElementById('rate-loan').value);
    const time = parseInt(document.getElementById('time-loan').value);
    
    if (validateInputs([principal, rate, time])) {
        const loanPayment = calculateLoanPayment(principal, rate, time);
        document.getElementById('loan-result').textContent = `Monthly Payment: ${loanPayment.toFixed(2)}`;
    } else {
        document.getElementById('loan-result').textContent = 'Please enter valid numbers for all fields.';
    }
});

document.getElementById('calculate-investment').addEventListener('click', () => {
    const principal = parseFloat(document.getElementById('principal-investment').value);
    const rate = parseFloat(document.getElementById('rate-investment').value);
    const time = parseFloat(document.getElementById('time-investment').value);
    const compounded = parseInt(document.getElementById('compounded-investment').value);
    
    if (validateInputs([principal, rate, time, compounded])) {
        const investmentReturn = calculateInvestmentReturn(principal, rate, time, compounded);
        document.getElementById('investment-result').textContent = `Future Value: ${investmentReturn.toFixed(2)}`;
    } else {
        document.getElementById('investment-result').textContent = 'Please enter valid numbers for all fields.';
    }
});
