// Add JavaScript code here
const operationType = document.querySelectorAll('#operations-type ul li')
const operationDigit = document.getElementById('operations-digit')
const operationNumber = document.getElementById('operations-number')
const operationGenerator = document.getElementById('operations-generator')
const operationList = document.getElementById('operation-main-list')
const resetButton = document.getElementById('reset')
const revealButton = document.getElementById('reveal')
const closeModalButton = document.querySelectorAll('.close-modal')

var operationTypeValue = '';
var operationDigitValue = '';
var operationNumberValue;

// $('body').append('<canvas id="confettiCanvas" style="position:absolute;top:0;left:0;display:none;z-index:99;"></canvas>');


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

closeModalButton.forEach(function (btn) {
    btn.addEventListener('click', function(){
        $.confetti.stop();
    })
}
)



revealButton.addEventListener('click', function(){
    const gift = document.getElementById('modal-gift')
    let luckyNumber = Math.floor(Math.random() * (2 - 1 + 1) + 1);

    if (luckyNumber === 1) {
        gift.innerHTML = `<svg height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#547475;" d="M170.297,395.798h220.281h63.281c1.113,0,2.189-0.141,3.228-0.385 C487.791,390.099,512,329.714,512,256c0-73.716-24.209-134.099-54.913-139.413c-1.038-0.244-2.115-0.385-3.228-0.385h-63.281 H121.422H58.14c-1.113,0-2.189,0.141-3.227,0.385C24.209,121.901,0,182.284,0,256c0,73.714,24.209,134.099,54.912,139.413 c1.04,0.244,2.115,0.385,3.228,0.385h63.281h22.532"></path> <circle style="fill:#73C470;" cx="405.515" cy="256.445" r="14.437"></circle> <circle style="fill:#F74848;" cx="470.083" cy="256.445" r="14.437"></circle> <circle style="fill:#53CAF9;" cx="437.793" cy="224.167" r="14.437"></circle> <path style="fill:#F74848;" d="M105.185,243.955H89.513v-15.672c0-3.689-2.991-6.678-6.678-6.678H71.202 c-3.688,0-6.678,2.99-6.678,6.678v15.672H48.853c-3.688,0-6.678,2.991-6.678,6.678v11.632c0,3.688,2.991,6.678,6.678,6.678h15.672 v15.672c0,3.688,2.991,6.678,6.678,6.678h11.632c3.688,0,6.678-2.991,6.678-6.678v-15.672h15.672c3.688,0,6.678-2.991,6.678-6.678 v-11.632C111.863,246.944,108.872,243.955,105.185,243.955z"></path> <path style="fill:#53CAF9;" d="M367.855,210.078v139.297c0,7.376-5.979,13.357-13.357,13.357H157.501 c-7.377,0-13.357-5.98-13.357-13.357V162.623c0-7.376,5.979-13.357,13.357-13.357h196.998c7.377,0,13.357,5.98,13.357,13.357v21.111 "></path> <path style="opacity:0.15;fill:#231F20;enable-background:new ;" d="M161.953,349.377V162.623 c0-7.376,5.979-13.357,13.357-13.357h-17.809c-7.377,0-13.357,5.98-13.357,13.357v186.752c0,7.376,5.979,13.357,13.357,13.357 h17.809C167.933,362.733,161.953,356.753,161.953,349.377z"></path> <g> <path style="fill:#8AACAD;" d="M457.087,116.587c-1.038-0.244-2.115-0.385-3.228-0.385h-49.734v24.868 c0,7.376,5.98,13.357,13.357,13.357h75.95C483.803,132.961,471.125,119.016,457.087,116.587z"></path> <path style="fill:#8AACAD;" d="M58.14,116.202c-1.113,0-2.189,0.141-3.227,0.385c-14.038,2.429-26.716,16.374-36.345,37.839h75.951 c7.377,0,13.357-5.98,13.357-13.357v-24.868H58.14z"></path> </g> <circle style="fill:#EFBA00;" cx="437.793" cy="288.723" r="14.437"></circle> <g> <path style="fill:#8AACAD;" d="M457.087,395.413c-1.038,0.244-2.115,0.385-3.228,0.385h-49.734v-24.868 c0-7.376,5.98-13.357,13.357-13.357h75.95C483.803,379.039,471.125,392.984,457.087,395.413z"></path> <path style="fill:#8AACAD;" d="M58.14,395.798c-1.113,0-2.189-0.141-3.227-0.385c-14.038-2.429-26.716-16.374-36.345-37.839h75.951 c7.377,0,13.357,5.98,13.357,13.357v24.868H58.14z"></path> </g> <path style="opacity:0.15;fill:#231F20;enable-background:new ;" d="M17.809,256c0-73.716,24.209-134.099,54.913-139.413 c1.038-0.244,2.114-0.385,3.227-0.385H58.14c-1.113,0-2.189,0.141-3.227,0.385C24.209,121.901,0,182.284,0,256 c0,73.714,24.209,134.099,54.912,139.413c1.04,0.244,2.115,0.385,3.228,0.385h17.809c-1.113,0-2.189-0.141-3.228-0.385 C42.017,390.099,17.809,329.714,17.809,256z"></path> <g> <path style="fill:#73C470;" d="M211.617,212.588c0,1.971-1.598,3.57-3.57,3.57h-19.852c-1.971,0-3.57-1.598-3.57-3.57v-19.852 c0-1.971,1.598-3.57,3.57-3.57h19.852c1.971,0,3.57,1.598,3.57,3.57V212.588z"></path> <path style="fill:#73C470;" d="M211.617,265.927c0,1.971-1.598,3.57-3.57,3.57h-19.852c-1.971,0-3.57-1.598-3.57-3.57v-19.852 c0-1.971,1.598-3.57,3.57-3.57h19.852c1.971,0,3.57,1.598,3.57,3.57V265.927z"></path> </g> <g> <path style="fill:#A8E2EF;" d="M327.374,211.01h-87.652c-4.61,0-8.348-3.736-8.348-8.348s3.738-8.348,8.348-8.348h87.652 c4.61,0,8.348,3.736,8.348,8.348S331.984,211.01,327.374,211.01z"></path> <path style="fill:#A8E2EF;" d="M327.374,264.349h-87.652c-4.61,0-8.348-3.736-8.348-8.348c0-4.611,3.738-8.348,8.348-8.348h87.652 c4.61,0,8.348,3.736,8.348,8.348C335.722,260.612,331.984,264.349,327.374,264.349z"></path> <path style="fill:#A8E2EF;" d="M327.374,317.686h-87.652c-4.61,0-8.348-3.736-8.348-8.348c0-4.61,3.738-8.348,8.348-8.348h87.652 c4.61,0,8.348,3.738,8.348,8.348C335.722,313.949,331.984,317.686,327.374,317.686z"></path> </g> <path style="fill:#73C470;" d="M211.617,319.264c0,1.972-1.598,3.57-3.57,3.57h-19.852c-1.971,0-3.57-1.597-3.57-3.57v-19.852 c0-1.971,1.598-3.57,3.57-3.57h19.852c1.971,0,3.57,1.598,3.57,3.57V319.264z"></path> </g></svg>`
    } else {
        gift.innerHTML = `<svg height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path style="fill:#DEDEE0;" d="M233.109,115.625l-0.088-56.048l-0.039-25.325l-0.038-24.61 c-21.416,7.833-41.045,20.293-57.635,36.885c-26.609,26.607-26.56,69.95,0.103,96.614c12.935,12.935,30.122,20.059,48.395,20.059 c3.165,0,6.293-0.228,9.376-0.65l-0.036-23.111L233.109,115.625z"></path> <path style="fill:#DEDEE0;" d="M382.977,96.781l-33.189,33.19l-17.681,17.679l-21.174,21.176l21.78,0.033l23.112,0.035 l45.694,0.071l22.881,0.035l22.781,0.035c2.113-36.733-8.398-74.087-31.524-104.941L399.344,80.41L382.977,96.781z"></path> <polygon style="fill:#DEDEE0;" points="240.29,303.958 272.56,336.229 288.672,352.339 304.782,368.449 337.003,336.229 320.893,320.116 304.782,304.006 272.512,271.736 256.402,255.626 240.289,239.516 208.067,271.736 224.18,287.848 "></polygon> <path style="fill:#DEDEE0;" d="M278.566,45.962l0.073,45.749l0.035,23.111l0.035,21.786l21.177-21.179l17.681-17.681l33.203-33.204 l16.353-16.353l16.33-16.332C355.96,11.187,322.695,0,287.724,0c-3.091,0-6.168,0.097-9.228,0.272l0.035,22.86L278.566,45.962z"></path> <path style="fill:#DEDEE0;" d="M387.901,214.515l-58.075-0.091l-32.173-0.05l-18.091-0.027l9.06,9.059l16.11,16.111l32.27,32.27 l16.111,16.11l16.111,16.11l31.779-31.779c16.851-16.851,29.105-36.585,36.787-57.635l-24.514-0.036L387.901,214.515z"></path> <polygon style="fill:#DEDEE0;" points="175.846,368.4 208.118,400.672 224.228,416.783 240.337,432.893 272.56,400.67 256.45,384.56 240.339,368.449 208.067,336.179 191.959,320.069 175.846,303.958 143.626,336.179 159.735,352.29 "></polygon> <path style="fill:#DEDEE0;" d="M132.972,512c0.003,0,0.005,0,0.008,0c18.218,0,35.341-7.089,48.213-19.962l26.925-26.925 l-16.11-16.11l-16.11-16.111l-32.271-32.27l-16.111-16.11l-16.11-16.111l-26.926,26.926c-26.609,26.612-26.562,69.952,0.1,96.614 C97.511,504.876,114.699,511.999,132.972,512z"></path> </g> <g> <path style="fill:#D8143A;" d="M272.512,271.736l32.27,32.268l16.11,16.11l16.11,16.113l16.111-16.113l16.111-16.11l-16.111-16.11 l-16.111-16.11l-32.27-32.27l-16.11-16.111l-9.061-9.059l18.091,0.027l32.173,0.05l58.075,0.091l25.377,0.039l24.514,0.036 c2.719-7.449,4.862-15.063,6.433-22.774c1.533-7.523,2.518-15.138,2.957-22.78l-22.781-0.035l-22.881-0.035l-45.694-0.071 l-23.112-0.035l-21.78-0.033l21.174-21.176l17.681-17.679l33.189-33.19l16.367-16.368l16.315-16.315 c-4.51-6.018-9.487-11.793-14.959-17.263c-5.439-5.439-11.207-10.432-17.246-14.974l-16.33,16.332l-16.353,16.353L317.567,97.75 l-17.681,17.681l-21.176,21.177l-0.035-21.786l-0.035-23.111l-0.073-45.749l-0.035-22.83l-0.035-22.86 c-7.712,0.437-15.322,1.42-22.78,2.935c-7.771,1.578-15.379,3.732-22.774,6.437l0.038,24.61l0.039,25.325l0.088,56.048 l0.036,23.817l0.036,23.111c8.023-1.095,15.714-3.58,22.772-7.364c5.84-3.129,11.251-7.133,16.066-11.948 c0.187-0.187,0.393-0.349,0.586-0.532c1.824-1.703,3.882-3.07,6.106-4.074c2.883-1.299,6.032-2.005,9.297-2.005 c6.105,0,11.851,2.385,16.18,6.714c0,0,0,0,0,0.002c4.318,4.318,6.702,10.051,6.712,16.14c0.005,3.278-0.702,6.439-2.007,9.335 c-1.018,2.259-2.412,4.347-4.154,6.194c-0.153,0.163-0.29,0.337-0.45,0.495l-16.061,16.061l-15.72,15.72l-7.03,7.03l-9.082,9.083 l-16.111,16.11l16.111,16.11L272.512,271.736z"></path> <polygon style="fill:#D8143A;" points="143.626,400.622 175.896,432.893 192.006,449.005 208.118,465.115 224.228,449.005 240.337,432.893 224.228,416.783 208.118,400.672 175.846,368.4 159.735,352.29 143.626,336.179 127.513,352.29 111.403,368.4 127.513,384.512 "></polygon> <polygon style="fill:#D8143A;" points="208.067,336.179 240.339,368.449 256.45,384.56 272.56,400.67 288.673,384.56 304.782,368.449 288.672,352.339 272.56,336.229 240.29,303.958 224.18,287.848 208.067,271.736 191.958,287.848 175.846,303.958 191.959,320.069 "></polygon> </g> </g></svg>`
    }

    // document.getElementById('startConfetti').click()
    $.confetti.start()

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


            if (totalRightAnswers == operationNumberValue) {
                revealButton.classList.remove('hidden')
            }

        })
    })
    
})

function generateOperations(max, min, sign) {
    let firstNumber = Math.floor(Math.random() * (max - min + 1) + min);
    let secondNumber = Math.floor(Math.random() * (max - min + 1) + min);
    
    // Create a new list item element
    let listItem = document.createElement('li');
    listItem.className = 'flex flex-row justify-center';
    
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
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
  
  
