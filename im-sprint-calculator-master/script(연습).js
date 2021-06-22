const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

const firstOperend = document.querySelector('.calculator__operend--left'); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const operator = document.querySelector('.calculator__operator'); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const secondOperend = document.querySelector('.calculator__operend--right'); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const calculatedResult = document.querySelector('.calculator__result'); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

function calculate(n1, operator, n2) {
  let result = 0;
  // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.
  // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.
  if(operator === '+') {
    result = Number(n1) + Number(n2)
  }
  else if(operator === '-') {
    result = Number(n1) - Number(n2)
  }
  else if(operator === '*') {
    result = Number(n1) * Number(n2)
  }
  else if(operator === '/') {
    result = Number(n1) / Number(n2)
  }
  return String(result);
}

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.
  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드(Line 19 - 21)는 수정하지 마세요.

  if (target.matches('button')) {
    // TODO : 계산기가 작동할 수 있도록 아래 코드를 수정하세요. 작성되어 있는 조건문과 console.log를 활용하시면 쉽게 문제를 풀 수 있습니다.
    // 클릭된 HTML 엘리먼트가 button이면
    if (action === 'number') {
      if(document.querySelector('.calculator__operend--left').textContent !== '0'){
        document.querySelector('.calculator__operend--right').textContent = buttonContent;
      }
      // 그리고 버튼의 클레스가 number이면
      // 아래 코드가 작동됩니다.
      else {
        console.log('숫자 ' + buttonContent + ' 버튼');
        document.querySelector('.calculator__operend--left').textContent = buttonContent;
      }
    }

    if (action === 'operator') {
      console.log('연산자 ' + buttonContent + ' 버튼');
      document.querySelector('.calculator__operator').textContent = buttonContent;
    }

    if (action === 'decimal') {
      // console.log('소수점 버튼');
    }

    if (action === 'clear') {
      console.log('초기화 버튼');
      document.querySelector('.calculator__operend--left').textContent = '0';
      document.querySelector('.calculator__operend--right').textContent = '0';
      document.querySelector('.calculator__operator').textContent = '+';
      document.querySelector('.calculator__result').textContent = '0';
    }

    if (action === 'calculate') {
      console.log('계산 버튼');
      document.querySelector('.calculator__result').textContent = calculate(document.querySelector('.calculator__operend--left').textContent, document.querySelector('.calculator__operator').textContent, document.querySelector('.calculator__operend--right').textContent);
    }
  }
});


// ! Advanced Challenge test와 Nightmare test를 위해서는 아래 주석을 해제하세요.

const display = document.querySelector('.calculator__display--for-advanced'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
let firstNum = '', operatorForAdvanced = '', previousKey = '', previousNum = '';

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드는 수정하지 마세요.

  // ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.
  if (target.matches('button')) {  // 버튼이 눌러집니다.
    if (action === 'number') {  // 숫자 버튼을 누른 경우
      if (operatorForAdvanced === '') {
        if (firstNum === '') {  // 아무 것도 입력되어 있지 않은 경우
          if(buttonContent === '0') {  // 아무것도 입력되지 않은 상태에서 0을 입력한 경우 반응하지 않음.
          }
          else {console.log('숫자 ' + buttonContent + ' 버튼'); // 아무것도 입력되지 않은 상태에서 숫자(0제외)를 입력한 경우
          firstNum = firstNum + buttonContent;  // firstNum에 입력된 수 더함.
          display.textContent = firstNum;  // 디스플레이에 firstNum 표시.
        }
        }
        else {  // firstNum에 이미 무언가 입력된 경우
          firstNum = firstNum + buttonContent;  // firstNum에 새로 입력된 숫자를 더함.
          display.textContent = firstNum;  // firstNum을 디스플레이에 표시.
        }
      }
      else {
        if (previousNum === '') {  // 아무 것도 입력되어 있지 않은 경우
          if(buttonContent === '0') {  // 아무것도 입력되지 않은 상태에서 0을 입력한 경우 반응하지 않음.
          }
          else {console.log('숫자 ' + buttonContent + ' 버튼'); // 아무것도 입력되지 않은 상태에서 숫자(0제외)를 입력한 경우
          previousNum = previousNum + buttonContent;  // firstNum에 입력된 수 더함.
          display.textContent = previousNum;  // 디스플레이에 firstNum 표시.
          }
        }
        else {  // firstNum에 이미 무언가 입력된 경우
          previousNum = previousNum + buttonContent;  // firstNum에 새로 입력된 숫자를 더함.
          display.textContent = previousNum;  // firstNum을 디스플레이에 표시.
          }
      }
    }
    if (action === 'operator') {
      operatorForAdvanced = buttonContent;
    }
    if (action === 'decimal') {
      if (firstNum.includes('.') === false) {
        firstNum = firstNum + buttonContent;
        display.textContent = firstNum;
      }
      else {
        // . 이 없을 시 아무 반응 없음.
      }
    }
    if (action === 'clear') {
      firstNum = '';
      operatorForAdvanced = '';
      previousNum = '';
      previousKey = '';
      display.textContent = '0';

    }
    if (action === 'calculate') {
      if (operatorForAdvanced === ''){

      }
      else {
        if (previousKey === '') {
          previousKey = calculate(firstNum, operatorForAdvanced, previousNum);
          display.textContent = previousKey;
        }
        else {
          previousKey = calculate(previousKey, operatorForAdvanced, previousNum);
          display.textContent = previousKey;
        }
      }
    }
  }

});
