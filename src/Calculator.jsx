import { useState } from "react";

export default function Calculator() {
    const [firstNum, setFirstNum] = useState('0');
    const [currentOperator, setCurrentOperator] = useState('');
    const [secondNum, setSecondNum] = useState('');
    const [currentMemory, setCurrentMemory] = useState('');
    // const [display, setDisplay] = useState(0);

    function handleButtonClick(event) {
        let calculatedResult;
        console.log(event.target.textContent)

        switch (event.target.textContent) {
            case('MR'):
                calculatedResult = calculate(firstNum, secondNum, currentOperator);
                setCurrentMemory(calculatedResult);
                break;
            
            case('M+'):
                calculatedResult = calculate(firstNum, secondNum, currentOperator);
                setCurrentMemory(Number(currentMemory) - Number(calculatedResult));
                break;
            
            case('M-'):
                calculatedResult = calculate(firstNum, secondNum, currentOperator);
                setCurrentMemory(Number(currentMemory) - Number(calculatedResult));
                break;
            
            case('MC'):
                setCurrentMemory('');
                break;
            
            case('AC'):
                setFirstNum('0');
                setCurrentOperator('');
                setSecondNum('');
                setCurrentMemory('')
                break;
            
            case('√'):
                setCurrentOperator('√');
                calculatedResult = calculate(firstNum, secondNum, '√');
                setFirstNum(calculatedResult);
                break;
            
            case('CE'):
                setFirstNum('0');
                setCurrentOperator('');
                setSecondNum('');
                break;
            
            case('×'):
                setCurrentOperator('×');
                setSecondNum('0');
                break;
            
            case('÷'):
                setCurrentOperator('÷');
                setSecondNum('0');
                break;
            
            case('-'):
                if (firstNum.length === 1 && (firstNum[0] === '0' || firstNum[0] === '-')) {
                    setFirstNum('-')
                } else {
                    setCurrentOperator('-');
                    setSecondNum('0');
                }
                break;
            
            case('+'):
                setCurrentOperator('+');
                setSecondNum('0');
                break;
            
            case('='):
                calculatedResult = calculate(firstNum, secondNum, currentOperator);
                setFirstNum(calculatedResult);
                break;
            
            case('.'):
                calculatedResult = firstNum + '.';
                setFirstNum(calculatedResult);
                break;
            
            case('0'):
                calculatedResult = firstNum + '0';
                // check for negative
                if (calculatedResult.length > 1 && [...calculatedResult].every(num => num === '0')) {
                    calculatedResult = calculatedResult.slice(0, 1);
                }
                setFirstNum(calculatedResult);
                break;
            
            case('1'):
                calculatedResult = firstNum + '1';
                if (calculatedResult.length > 1 && calculatedResult[0] === '0') {
                    calculatedResult = calculatedResult.slice(1,);
                }
                setFirstNum(calculatedResult);
                break;
            
            case('2'):
                calculatedResult = firstNum + '2';
                if (calculatedResult.length > 1 && calculatedResult[0] === '0') {
                    calculatedResult = calculatedResult.slice(1,);
                }
                setFirstNum(calculatedResult);
                break;
            
            case('3'):
                calculatedResult = firstNum + '3';
                if (calculatedResult.length > 1 && calculatedResult[0] === '0') {
                    calculatedResult = calculatedResult.slice(1,);
                }
                setFirstNum(calculatedResult);
                break;
            
            case('4'):
                calculatedResult = firstNum + '4';
                if (calculatedResult.length > 1 && calculatedResult[0] === '0') {
                    calculatedResult = calculatedResult.slice(1,);
                }
                setFirstNum(calculatedResult);
                break;
            
            case('5'):
                calculatedResult = firstNum + '5';
                if (calculatedResult.length > 1 && calculatedResult[0] === '0') {
                    calculatedResult = calculatedResult.slice(1,);
                }
                setFirstNum(calculatedResult);
                break;
            
            case('6'):
                calculatedResult = firstNum + '6';
                if (calculatedResult.length > 1 && calculatedResult[0] === '0') {
                    calculatedResult = calculatedResult.slice(1,);
                }
                setFirstNum(calculatedResult);
                break;
            
            case('7'):
                calculatedResult = firstNum + '7';
                if (calculatedResult.length > 1 && calculatedResult[0] === '0') {
                    calculatedResult = calculatedResult.slice(1,);
                }
                setFirstNum(calculatedResult);
                break;
            
            case('8'):
                calculatedResult = firstNum + '8';
                if (calculatedResult.length > 1 && calculatedResult[0] === '0') {
                    calculatedResult = calculatedResult.slice(1,);
                }
                setFirstNum(calculatedResult);
                break;
            
            case('9'):
                calculatedResult = firstNum + '9';
                if (calculatedResult.length > 1 && calculatedResult[0] === '0') {
                    calculatedResult = calculatedResult.slice(1,);
                }
                setFirstNum(calculatedResult);
                break;
            
        }
    }

    console.log(firstNum)

    function handleChange(event) {

        let revisedValue = event.target.value;

        if (revisedValue === '') {
            revisedValue = '0';
        } else if (revisedValue.length > 1 && revisedValue[0] === '0') {
            revisedValue = revisedValue.slice(1,);
        }

        let decimalCheck = revisedValue.match(/\./g) === null || revisedValue.match(/\./g).length <= 1;
        let digitCheck = [...revisedValue].every(letter => /[0-9]/.test(letter) === true || /\./.test(letter) === true);

        if (decimalCheck === true && digitCheck === true) {
            setFirstNum(revisedValue)
        }

    }

    function calculate(firstNum, secondNum, currentOperator) {

        console.log(firstNum, secondNum, currentOperator)
        
        if (currentOperator.length === 0 && secondNum.length === 0) {
            setFirstNum(firstNum)
        } else if (currentOperator === '√') {
            setFirstNum(Math.sqrt(Number(firstNum)))
        } else if (currentOperator !== '√' && secondNum.length > 0) {
            switch (currentOperator) {

                case '+' :
                    setFirstNum(Number(firstNum) + Number(secondNum));
                    break;

                case '-' :
                    setFirstNum(Number(firstNum) - Number(secondNum));
                    break;

                case '×' :
                    setFirstNum(Number(firstNum) * Number(secondNum));
                    break;

                case '÷' :
                    setFirstNum(Number(firstNum) * Number(secondNum));
                    break;

            }
        }
    }

    let display = '';

    if (secondNum.length > 0) {
        display = firstNum;
    } else {
        display = secondNum;
    }

    // worry about negative numbers and not using symbols
    // if somebody presses too many symbols

    return (
        <div id="calculator-container">
            <section id="display">
                <p>{currentMemory.length > 0 ? 'M' : ''}</p>
                {
                    secondNum.length > 0
                    ?
                    <input type="text" pattern="/\d*/" onChange={handleChange} value={secondNum} />
                    :
                    <input type="text" pattern="/\d*/" onChange={handleChange} value={firstNum} />
                }
            </section>

            <section>
                <button aria-label="memory-recall" onClick={handleButtonClick}>MR</button>
                <button aria-label="memory-add" onClick={handleButtonClick}>M+</button>
                <button aria-label="memory-subtract" onClick={handleButtonClick}>M-</button>
                <button aria-label="memory-clear" onClick={handleButtonClick}>MC</button>
                <button aria-label="all-clear" onClick={handleButtonClick}>AC</button>
            </section>

            <section>
                <button aria-label="7" onClick={handleButtonClick}>7</button>
                <button aria-label="8" onClick={handleButtonClick}>8</button>
                <button aria-label="9" onClick={handleButtonClick}>9</button>
                <button aria-label="square-root" onClick={handleButtonClick} className={currentOperator === '√' ? "current" : ""}>√</button>
                <button aria-label="clear-entry" onClick={handleButtonClick}>CE</button>
            </section>

            <section>
                <button aria-label="4" onClick={handleButtonClick}>4</button>
                <button aria-label="5" onClick={handleButtonClick}>5</button>
                <button aria-label="6" onClick={handleButtonClick}>6</button>
                <button aria-label="multiply" onClick={handleButtonClick} className={currentOperator === '×' ? "current" : ""}>×</button>
                <button aria-label="divide" onClick={handleButtonClick} className={currentOperator === '÷' ? "current" : ""}>÷</button>
            </section>

            <section>
                <button aria-label="1" onClick={handleButtonClick}>1</button>
                <button aria-label="2" onClick={handleButtonClick}>2</button>
                <button aria-label="3" onClick={handleButtonClick}>3</button>
                <button aria-label="negative-or-subtract" onClick={handleButtonClick} className={currentOperator === '-' ? "current" : ""}>-</button>
                <button aria-label="add" onClick={handleButtonClick} className={currentOperator === '+' ? "current" : ""}>+</button>
            </section>

            <section>
                <button aria-label="decimal" onClick={handleButtonClick}>.</button>
                <button aria-label="0" onClick={handleButtonClick}>0</button>
                <button aria-label="" id="equals" onClick={handleButtonClick}>=</button>
            </section>
        </div>
    )
}