var billAmount = document.getElementById("billAmount");
var numOfPeople = document.getElementById("numOfPeople");
var resetButton = document.getElementById("reset");
var errorMessage = document.getElementById("errorMessage");
const tipButtons = document.querySelectorAll(".tip-button");
var customTipInput = document.getElementById("customTipInput");

function logData(){

    billAmount.value = "";
    numOfPeople.value = "";
    customTipInput.value = "";
    document.getElementById("tipDisplay").value = "";
    document.getElementById("totalDisplay").value = "";
    resetButton.classList.remove('active');
    resetButton.classList.add('disabled');
    tipButtons.forEach(allButton => {
      allButton.style.backgroundColor = "hsl(183, 100%, 15%)";
      allButton.style.color = "white";
    });
}

resetButton.addEventListener("click", logData);

tipButtons.forEach(button => {
  button.addEventListener('click', function() {
      const tipValue = this.value;
      tipButtons.forEach(allButton => {
        allButton.style.backgroundColor = "hsl(183, 100%, 15%)";
        allButton.style.color = "white";
      });
      button.style.backgroundColor = 'hsl(172, 67%, 45%)';
      button.style.color = 'hsl(183, 100%, 15%)';
      numOfPeople.addEventListener('input', () => {
        if(numOfPeople.value == "" || numOfPeople.value == "0"){
          errorMessage.style.display = "block";
          numOfPeople.style.border = "1px solid";
          numOfPeople.style.borderColor = "rgb(250, 94, 94)";
          resetButton.classList.remove('active');
          resetButton.classList.add('disabled');
        }
        else if((numOfPeople.value != "" || numOfPeople.value != "0") && tipValue.value != ""){
          errorMessage.style.display = "none";
          numOfPeople.style.border = "none";
          var totalTipPerPerson = (Number(billAmount.value) * (Number(tipValue) / 100)) / Number(numOfPeople.value);
          console.log(totalTipPerPerson);
          var totalBillPerPerson = (Number(billAmount.value) / Number(numOfPeople.value)) + Number(totalTipPerPerson);
          console.log(totalBillPerPerson);
          document.getElementById("tipDisplay").value = "$" + String(totalTipPerPerson.toFixed(2));
          document.getElementById("totalDisplay").value = "$" + String(totalBillPerPerson.toFixed(2));
          resetButton.classList.remove('disabled');
          resetButton.classList.add('active');
        }
      })
      if(numOfPeople.value == "" || numOfPeople.value == "0"){
        errorMessage.style.display = "block";
        numOfPeople.style.border = "1px solid";
        numOfPeople.style.borderColor = "rgb(250, 94, 94)";
        resetButton.classList.remove('active');
        resetButton.classList.add('disabled');
      }
      else{
        errorMessage.style.display = "none";
        numOfPeople.style.border = "none";
        var totalTipPerPerson = (Number(billAmount.value) * (Number(tipValue) / 100)) / Number(numOfPeople.value);
        console.log(totalTipPerPerson);
        var totalBillPerPerson = (Number(billAmount.value) / Number(numOfPeople.value)) + Number(totalTipPerPerson);
        console.log(totalBillPerPerson);
        document.getElementById("tipDisplay").value = "$" + String(totalTipPerPerson.toFixed(2));
        document.getElementById("totalDisplay").value = "$" + String(totalBillPerPerson.toFixed(2));
        resetButton.classList.remove('disabled');
        resetButton.classList.add('active');
      }
  });
});

numOfPeople.addEventListener('input', () => {
  const tipValue = customTipInput.value;
  if(numOfPeople.value == "" || numOfPeople.value == "0"){
    errorMessage.style.display = "block";
    numOfPeople.style.border = "1px solid";
    numOfPeople.style.borderColor = "rgb(250, 94, 94)";
    resetButton.classList.remove('active');
    resetButton.classList.add('disabled');
  }
  else if((numOfPeople.value != "" || numOfPeople.value != "0") && tipValue.value != ""){
    errorMessage.style.display = "none";
    numOfPeople.style.border = "none";
    var totalTipPerPerson = (Number(billAmount.value) * (Number(tipValue) / 100)) / Number(numOfPeople.value);
    console.log(totalTipPerPerson);
    var totalBillPerPerson = (Number(billAmount.value) / Number(numOfPeople.value)) + Number(totalTipPerPerson);
    console.log(totalBillPerPerson);
    document.getElementById("tipDisplay").value = "$" + String(totalTipPerPerson.toFixed(2));
    document.getElementById("totalDisplay").value = "$" + String(totalBillPerPerson.toFixed(2));
    resetButton.classList.remove('disabled');
    resetButton.classList.add('active');
  }
})

customTipInput.addEventListener('input', () => {
  const tipValue = customTipInput.value;
  tipButtons.forEach(allButton => {
    allButton.style.backgroundColor = "hsl(183, 100%, 15%)";
    allButton.style.color = "white";
  });
  if(numOfPeople.value == "" || numOfPeople.value == "0"){
    document.getElementById("tipDisplay").value = "";
    document.getElementById("totalDisplay").value = "";
    errorMessage.style.display = "block";
    numOfPeople.style.border = "1px solid";
    numOfPeople.style.borderColor = "rgb(250, 94, 94)";
    resetButton.classList.remove('active');
    resetButton.classList.add('disabled');
  }
  else if((numOfPeople.value != "" || numOfPeople.value != "0") && tipValue.value != ""){
    errorMessage.style.display = "none";
    numOfPeople.style.border = "none";
    var totalTipPerPerson = (Number(billAmount.value) * (Number(tipValue) / 100)) / Number(numOfPeople.value);
    console.log(totalTipPerPerson);
    var totalBillPerPerson = (Number(billAmount.value) / Number(numOfPeople.value)) + Number(totalTipPerPerson);
    console.log(totalBillPerPerson);
    document.getElementById("tipDisplay").value = "$" + String(totalTipPerPerson.toFixed(2));
    document.getElementById("totalDisplay").value = "$" + String(totalBillPerPerson.toFixed(2));
    resetButton.classList.remove('disabled');
    resetButton.classList.add('active');
  }
  else if((numOfPeople.value != "" || numOfPeople.value != "0") && tipValue.value == ""){
    errorMessage.style.display = "none";
    numOfPeople.style.border = "none";
    var totalTipPerPerson = (Number(billAmount.value) * (Number(tipValue) / 100)) / Number(numOfPeople.value);
    console.log(totalTipPerPerson);
    var totalBillPerPerson = (Number(billAmount.value) / Number(numOfPeople.value)) + Number(totalTipPerPerson);
    console.log(totalBillPerPerson);
    document.getElementById("tipDisplay").value = "$" + String(totalTipPerPerson.toFixed(2));
    document.getElementById("totalDisplay").value = "$" + String(totalBillPerPerson.toFixed(2));
    resetButton.classList.remove('disabled');
    resetButton.classList.add('active');
  }});