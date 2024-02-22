import { useState } from "react";

export default function Calculator() {
    const [firstNum, setFirstNum] = useState('0');
    const [currentOperator, setCurrentOperator] = useState('');
    const [secondNum, setSecondNum] = useState();
    const [currentMemory, setCurrentMemory] = useState();
    const [currentResult, setCurrentResult] = useState(0);

    function handleButtonClick(event) {
        switch (event.target.value) {
            case('MR'):

                if (firstNum.length > 0 && currentOperator.length > 0 && secondNum.length > 0)
                break;
            
            case('M+'):
                break;
            
            case('M-'):
                break;
            
            case('MC'):
                break;
            
            case('AC'):
                break;
            
            case('√'):
                break;
            
            case('CE'):
                break;
            
            case('&times;'):
                break;
            
            case('÷'):
                break;
            
            case('-'):
                break;
            
            case('+'):
                break;
            
            case('='):
                break;
            
            case('.'):
                break;
            
            case('0'):
                break;
            
            case('1'):
                break;
            
            case('2'):
                break;
            
            case('3'):
                break;
            
            case('4'):
                break;
            
            case('5'):
                break;
            
            case('6'):
                break;
            
            case('7'):
                break;
            
            case('8'):
                break;
            
            case('9'):
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

    function Calculate(firstNum, secondNum, currentOperator) {
        
        if (secondNum.length === 0 && currentOperator.length === 0) {
            setCurrentResult(firstNum)
        } else if (currentOperator === '√') {
            setCurrentResult(Math.sqrt(firstNum))
        }
    }

    //add highlighted buttons that are active

    return (
        <div id="calculator-container">
            <section id="display">
                <p>{currentMemory}</p>
                <input type="text" pattern="/\d*/" onChange={handleChange} value={firstNum} />
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
                <button aria-label="multiply">&times;</button>
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