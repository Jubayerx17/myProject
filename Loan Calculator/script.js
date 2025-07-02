function calculateLoan() {
  let loanAmount = parseFloat(document.querySelector('#amountBox').value);
  let rateAmount = parseFloat(document.querySelector('#rateBox').value);
  let months = parseInt(document.querySelector('#monthBox').value);

  // Simple interest calculation
  let interest = (loanAmount * (rateAmount * 0.01)) / months;
  let monthlyPayment = (loanAmount / months + interest).toFixed(2);

  document.querySelector('.amount').innerHTML = `Monthly Payment: $${monthlyPayment}`;
}
