const fromCurrencyEl = document.getElementById('fromCurrency');
const inputAmountEl = document.getElementById('inputAmount');
const toCurrencyEl = document.getElementById('toCurrency');
const outputAmountEl = document.getElementById('outputAmount');
const rateEl = document.getElementById('rate');
const changeCurr = document.getElementById('convertButton');

fromCurrencyEl.addEventListener('change', exchCalc);
inputAmountEl.addEventListener('input', exchCalc);
toCurrencyEl.addEventListener('change', exchCalc);
outputAmountEl.addEventListener('input', exchCalc);

changeCurr.addEventListener('click', () => {
    const temp = fromCurrencyEl.value;
    fromCurrencyEl.value = toCurrencyEl.value;
    toCurrencyEl.value = temp;
    exchCalc();
});

function exchCalc() {
    const convertFrom = fromCurrencyEl.value;
    const convertTo = toCurrencyEl.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${convertFrom}`)
        .then(res => res.json())
        .then(res => {
            const rate = res.rates[convertTo];
            rateEl.innerText = `1 ${convertFrom} = ${rate} ${convertTo}`
            outputAmountEl.value = (inputAmountEl.value * rate).toFixed(2);
        })
}

exchCalc();