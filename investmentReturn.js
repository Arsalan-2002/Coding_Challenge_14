export function calculateInvestmentReturn(principal, annualRate, time, timesCompounded) {
    return principal * Math.pow((1 + annualRate / timesCompounded), timesCompounded * time);
}
