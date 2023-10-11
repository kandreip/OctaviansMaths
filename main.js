// Add JavaScript code here
const operationType = document.querySelectorAll('#operations-type ul li')
const operationDigit = document.getElementById('operations-digit')
const operationNumber = document.getElementById('operations-number')
const operationGenerator = document.getElementById('operations-generator')
const operationList = document.getElementById('operation-main-list')
const resetButton = document.getElementById('reset')

var operationTypeValue = '';
var operationDigitValue = '';
var operationNumberValue;

operationType.forEach(function (type) {
    type.addEventListener('click', function () {
        operationTypeValue = this.id
        operationType.forEach(function (typebtn) {
            typebtn.classList.remove('active-operation')
        })
        this.classList.add('active-operation')
    })
})

resetButton.addEventListener('click', function(){
    location.reload();
})



operationGenerator.addEventListener('click', function(){

    const totalAnswer = document.getElementById('total-answers')
    operationDigitValue = document.getElementById('operations-digit').querySelector('select').value;
    operationNumberValue = document.getElementById('operations-number').querySelector('input').value;
    operationList.innerHTML = ''
    let operationSign = operationTypeValue;
    let firstNumberValue = 0;
    let secondNumberValue = 0;
    let resultValue = 0;
    let totalValue = 0;
    let totalRightAnswers = 0;

    for (let i=1; i<=operationNumberValue; i++) {
        if (operationDigitValue == 1) {
            generateOperations(10, 0, operationSign);
        } else if (operationDigitValue == 2) {
            generateOperations(100, 10, operationSign);
        } else if (operationDigitValue == 3) {
            generateOperations(1000, 100, operationSign);
        }
        
    }

    var operationResult = document.querySelectorAll('#operation-main-list li input')
    

    operationResult.forEach(function (result) {
        result.addEventListener('change', function () {
            firstNumberValue = parseInt(this.parentElement.firstChild.innerHTML)
            secondNumberValue = parseInt(this.previousElementSibling.previousElementSibling.innerHTML)
            resultValue = this.value
    

            if (operationSign == '+') {
                totalValue = firstNumberValue + secondNumberValue;
            } else if (operationSign == '-') {
                totalValue = firstNumberValue - secondNumberValue;
            } if (operationSign == 'x') {
                totalValue = firstNumberValue * secondNumberValue;
            } if (operationSign == '/') {
                totalValue = firstNumberValue / secondNumberValue;
            } 


            if (totalValue != resultValue) {
                this.parentElement.querySelector('.wrong-answer').classList.remove('hidden')
                this.parentElement.querySelector('.right-answer').classList.add('hidden')
            } else {
                this.parentElement.querySelector('.right-answer').classList.remove('hidden')
                this.parentElement.querySelector('.wrong-answer').classList.add('hidden')
                totalRightAnswers += 1;
            }

            totalAnswer.textContent = 'Answers: ' + totalRightAnswers + '/' + operationNumberValue;

        })
    })
    
})

function generateOperations(max, min, sign) {
    let firstNumber = Math.floor(Math.random() * (max - min + 1) + min);
    let secondNumber = Math.floor(Math.random() * (max - min + 1) + min);
    
    // Create a new list item element
    let listItem = document.createElement('li');
    listItem.className = 'flex flex-row';
    
    // Create the firstNumber div element
    let firstNumberDiv = document.createElement('div');
    firstNumberDiv.className = 'px-4 py-2 text-white';
    firstNumberDiv.textContent = firstNumber;
    listItem.appendChild(firstNumberDiv);
    
    // Create the sign div element
    let signDiv = document.createElement('div');
    signDiv.className = 'px-4 py-2 rounded-md text-white';
    signDiv.textContent = sign;
    listItem.appendChild(signDiv);
    
    // Create the secondNumber div element
    let secondNumberDiv = document.createElement('div');
    secondNumberDiv.className = 'px-4 py-2 text-white';
    secondNumberDiv.textContent = secondNumber;
    listItem.appendChild(secondNumberDiv);
    
    // Create the equals sign div element
    let equalsSignDiv = document.createElement('div');
    equalsSignDiv.className = 'px-4 py-2 rounded-md text-white';
    equalsSignDiv.textContent = '=';
    listItem.appendChild(equalsSignDiv);
    
    // Create the input element
    let inputElement = document.createElement('input');
    inputElement.className = '[appearance:textfield] h-11 bg-[#242b42] border-2 border-[#ffffff] rounded-md text-white px-4 py-2 w-16';
    inputElement.type = 'number';
    inputElement.name = 'result';
    inputElement.min = '0';
    inputElement.max = '100';
    inputElement.step = '1';
    listItem.appendChild(inputElement);

    // Create answer result
    let rightAnswer = document.createElement('div');
    rightAnswer.className = 'px-4 py-2 rounded-md text-white right-answer hidden';
    rightAnswer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  `;
    listItem.appendChild(rightAnswer);

    let wrongAnswer = document.createElement('div');
    wrongAnswer.className = 'px-4 py-2 rounded-md text-white wrong-answer hidden';
    wrongAnswer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  `;
    listItem.appendChild(wrongAnswer);
    
    // Append the listItem to the operationList
    operationList.appendChild(listItem);
  }
  
  