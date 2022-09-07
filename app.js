// https://www.omnicalculator.com/finance/ttm-trailing-twelve-months

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const trailingtwelvemonthvalueRadio = document.getElementById('trailingtwelvemonthvalueRadio');
const TTMlastreportedquarterRadio = document.getElementById('TTMlastreportedquarterRadio');
const TTMonequarterbeforeRadio = document.getElementById('TTMonequarterbeforeRadio');
const TTMtwoquartersbeforeRadio = document.getElementById('TTMtwoquartersbeforeRadio');
const TTMthreequartersbeforeRadio = document.getElementById('TTMthreequartersbeforeRadio');

let trailingtwelvemonthvalue;
let TTMlastreportedquarter = v1;
let TTMonequarterbefore = v2;
let TTMtwoquartersbefore = v3;
let TTMthreequartersbefore = v4;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');

trailingtwelvemonthvalueRadio.addEventListener('click', function() {
  variable1.textContent = 'TTM last reported quarter';
  variable2.textContent = 'TTM one quarter before';
  variable3.textContent = 'TTM two quarters before';
  variable4.textContent = 'TTM three quarters before';
  TTMlastreportedquarter = v1;
  TTMonequarterbefore = v2;
  TTMtwoquartersbefore = v3;
  TTMthreequartersbefore = v4;
  result.textContent = '';
});

TTMlastreportedquarterRadio.addEventListener('click', function() {
  variable1.textContent = 'Trailing twelve month value';
  variable2.textContent = 'TTM one quarter before';
  variable3.textContent = 'TTM two quarters before';
  variable4.textContent = 'TTM three quarters before';
  trailingtwelvemonthvalue = v1;
  TTMonequarterbefore = v2;
  TTMtwoquartersbefore = v3;
  TTMthreequartersbefore = v4;
  result.textContent = '';
});

TTMonequarterbeforeRadio.addEventListener('click', function() {
  variable1.textContent = 'Trailing twelve month value';
  variable2.textContent = 'TTM last reported quarter';
  variable3.textContent = 'TTM two quarters before';
  variable4.textContent = 'TTM three quarters before';
  trailingtwelvemonthvalue = v1;
  TTMlastreportedquarter = v2;
  TTMtwoquartersbefore = v3;
  TTMthreequartersbefore = v4;
  result.textContent = '';
});

TTMtwoquartersbeforeRadio.addEventListener('click', function() {
  variable1.textContent = 'Trailing twelve month value';
  variable2.textContent = 'TTM last reported quarter';
  variable3.textContent = 'TTM one quarter before';
  variable4.textContent = 'TTM three quarters before';
  trailingtwelvemonthvalue = v1;
  TTMlastreportedquarter = v2;
  TTMonequarterbefore = v3;
  TTMthreequartersbefore = v4;
  result.textContent = '';
});

TTMthreequartersbeforeRadio.addEventListener('click', function() {
  variable1.textContent = 'Trailing twelve month value';
  variable2.textContent = 'TTM last reported quarter';
  variable3.textContent = 'TTM one quarter before';
  variable4.textContent = 'TTM two quarters before';
  trailingtwelvemonthvalue = v1;
  TTMlastreportedquarter = v2;
  TTMonequarterbefore = v3;
  TTMtwoquartersbefore = v4;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(trailingtwelvemonthvalueRadio.checked)
    result.textContent = `Trailing twelve month value = ${computetrailingtwelvemonthvalue().toFixed(2)}`;

  else if(TTMlastreportedquarterRadio.checked)
    result.textContent = `TTM last reported quarter = ${computeTTMlastreportedquarter().toFixed(2)}`;

  else if(TTMonequarterbeforeRadio.checked)
    result.textContent = `TTM one quarter before = ${computeTTMonequarterbefore().toFixed(2)}`;

  else if(TTMtwoquartersbeforeRadio.checked)
    result.textContent = `TTM two quarters before = ${computeTTMtwoquartersbefore().toFixed(2)}`;

  else if(TTMthreequartersbeforeRadio.checked)
    result.textContent = `TTM three quarters before = ${computeTTMthreequartersbefore().toFixed(2)}`;
})

// calculation

// Revenue TTM = TTMlastreportedquarter + TTMonequarterbefore + TTMtwoquartersbefore + TTMthreequartersbefore

function computetrailingtwelvemonthvalue() {
  return Number(TTMlastreportedquarter.value) + Number(TTMonequarterbefore.value) + Number(TTMtwoquartersbefore.value) + Number(TTMthreequartersbefore.value);
}

function computeTTMlastreportedquarter() {
  return Number(trailingtwelvemonthvalue.value) - Number(TTMonequarterbefore.value) - Number(TTMtwoquartersbefore.value) - Number(TTMthreequartersbefore.value);
}

function computeTTMonequarterbefore() {
  return Number(trailingtwelvemonthvalue.value) - Number(TTMlastreportedquarter.value) - Number(TTMtwoquartersbefore.value) - Number(TTMthreequartersbefore.value);
}

function computeTTMtwoquartersbefore() {
  return Number(trailingtwelvemonthvalue.value) - Number(TTMlastreportedquarter.value) - Number(TTMonequarterbefore.value) - Number(TTMthreequartersbefore.value);
}

function computeTTMthreequartersbefore() {
  return Number(trailingtwelvemonthvalue.value) - Number(TTMlastreportedquarter.value) - Number(TTMonequarterbefore.value) - Number(TTMtwoquartersbefore.value);
}