export function calculateInvestmentReturn(principal, rate, time, n) {
    return principal * Math.pow((1 + rate / n), n * time);
}