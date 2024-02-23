import { useState } from "react";

export default function Calculator() {
    const [firstNum, setFirstNum] = useState('0');
    const [currentOperator, setCurrentOperator] = useState('');
    const [secondNum, setSecondNum] = useState('');
    const [currentMemory, setCurrentMemory] = useState('');
    // const [display, setDisplay] = useState(0);

    function handleButtonClick(event) {
        let calculatedResult;

        switch (event.target.value) {
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
                setFirstNum('');
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
                setCurrentOperator('-');
                setSecondNum('0');
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
                setFirstNum(firstNum + '.');
                break;
            
            case('0'):
                setFirstNum(firstNum + '0');
                break;
            
            case('1'):
                setFirstNum(firstNum + '1');
                break;
            
            case('2'):
                setFirstNum(firstNum + '2');
                break;
            
            case('3'):
                setFirstNum(firstNum + '3');
                break;
            
            case('4'):
                setFirstNum(firstNum + '4');
                break;
            
            case('5'):
                setFirstNum(firstNum + '5');
                break;
            
            case('6'):
                setFirstNum(firstNum + '6');
                break;
            
            case('7'):
                setFirstNum(firstNum + '7');
                break;
            
            case('8'):
                setFirstNum(firstNum + '8');
                break;
            
            case('9'):
                setFirstNum(firstNum + '9');
                break;
            
        }
    }

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

    //add highlighted buttons that are active
    //clear currentOperator and secondNum

    return (
        <div id="calculator-container">
            <section id="display">
                <p>{currentMemory}</p>
                {
                    secondNum.length > 0
                    ?
                    <input type="text" pattern="/\d*/" onChange={handleChange} value={secondNum} />
                    :
                    <input type="text" pattern="/\d*/" onChange={handleChange} value={firstNum} />
                }
                <p>{currentOperator}</p>
            </section>

            <section>
                <button aria-label="memory-recall">MR</button>
                <button aria-label="memory-add">M+</button>
                <button aria-label="memory-subtract">M-</button>
                <button aria-label="memory-clear">MC</button>
                <button aria-label="all-clear">AC</button>
            </section>

            <section>
                <button aria-label="7">7</button>
                <button aria-label="8">8</button>
                <button aria-label="9">9</button>
                <button aria-label="square-root">√</button>
                <button aria-label="clear-entry">CE</button>
            </section>

            <section>
                <button aria-label="4">4</button>
                <button aria-label="5">5</button>
                <button aria-label="6">6</button>
                <button aria-label="multiply">×</button>
                <button aria-label="divide">÷</button>
            </section>

            <section>
                <button aria-label="1">1</button>
                <button aria-label="2">2</button>
                <button aria-label="3">3</button>
                <button aria-label="negative-or-subtract">-</button>
                <button aria-label="add">+</button>
            </section>

            <section>
                <button aria-label="decimal">.</button>
                <button aria-label="0">0</button>
                <button aria-label="" id="equals">=</button>
            </section>
        </div>
    )
}