var billAmount = document.getElementById("billAmount");
var numOfPeople = document.getElementById("numOfPeople");
var resetButton = document.getElementById("reset");
var errorMessage = document.getElementById("errorMessage");
const tipButtons = document.querySelectorAll(".tip-button");

billAmount.addEventListener('input', () => {
  console.log(billAmount.value);
  if(billAmount.value != null && billAmount != " "){
    resetButton.classList.remove('disabled');
    resetButton.classList.add('active');
  }
  if(billAmount.value == ""){
    resetButton.classList.remove('active');
    resetButton.classList.add('disabled');
  }
});

function logData(){

    // Still work in progress
    tipButtons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.value;
        });
    })
    
    console.log(billAmount.value);
    console.log(numOfPeople.value);
    if(numOfPeople.value == ""){
        errorMessage.style.display = "block";
        numOfPeople.style.border = "1px solid";
        numOfPeople.style.borderColor = "rgb(250, 94, 94)";
    }
    else{
        errorMessage.style.display = "none";
        numOfPeople.style.border = "none";
    }
}

resetButton.addEventListener("click", logData);