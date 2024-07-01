export function calculateLoanPayment(principal, rate, n) {
    const r = rate / 12;
    return (principal * r * Math.pow((1 + r), n)) / (Math.pow((1 + r), n) - 1);
}
