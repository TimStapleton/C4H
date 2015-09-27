console.log("Slider JS script Loaded.\n");

var amount = 5000,
    days = 3;

var a_min = 5000, a_max = 30000, a_step = 100;
var d_min =    3, d_max =    30, d_step =   3;

var amountSlider = document.getElementById('amount-slider'),
    daysSlider   = document.getElementById('days-slider');

var amountInput = document.getElementsByName("Amount")[0],
    daysInput   = document.getElementsByName("Days")[0];

console.log("Amount input value is " + amountInput.value + ".\n");

amountInput.addEventListener('change', changeAmount);
daysInput.addEventListener('change', changeDays);

function changeAmount(){
  amount = amountInput.value;
  console.log ("Amount changed!\n")

  if (amountInput.value > a_max) amountInput.value = a_max;
  if (amountInput.value < a_min) amountInput.value = a_min;

  $(document).foundation('slider','reflow');
  $(amountSlider).foundation('slider','set_value', amount);
}

function changeDays(){
  days = daysInput.value;
  console.log ("Days changed!\n")

  if (amountInput.value > 30000) {daysInput.value = d_max; days = d_max;}
  if (amountInput.value <  5000) {daysInput.value = d_min; days = d_min;}

  $(document).foundation('slider','reflow');
  $(daysSlider).foundation('slider','set_value', days);
}
