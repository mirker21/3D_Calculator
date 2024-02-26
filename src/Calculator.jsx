import { useState } from "react";

export default function Calculator() {
    const [input, setInput] = useState('0');
    const [currentMemory, setCurrentMemory] = useState('');
    // const [display, setDisplay] = useState(0);

    function handleButtonClick(event) {
        let calculatedResult;
        switch (event.target.textContent) {
            case('MR'):
                calculatedResult = currentMemory;
                setInput(calculatedResult);
                break;
            
            case('M+'):
                calculatedResult = calculate(input);
                setCurrentMemory(Number(currentMemory) + Number(calculatedResult));
                break;
            
            case('M-'):
                calculatedResult = calculate(input);
                setCurrentMemory(Number(currentMemory) - Number(calculatedResult));
                break;
            
            case('MC'):
                setCurrentMemory('');
                break;
            
            case('+/-'):
                calculatedResult = input;
                if (calculatedResult[0] === '-') {
                    calculatedResult = calculatedResult.slice(1,); 
                    if (calculatedResult === '') {
                        calculatedResult = '0';
                    }
                } else if (calculatedResult === '0') {
                    calculatedResult = '-';
                } else {
                    calculatedResult = '-' + calculatedResult;
                }
                setInput(calculatedResult);
                break;
            
            case('√'):
                if (input === '0') {
                    calculatedResult = 'sqrt(';
                } else {
                    calculatedResult = input + 'sqrt(';
                }
                setInput(calculatedResult);
                break;
            
            case('CE'):
                setInput('0');
                break;
            
            case('×'):
                if (/(\(|\×|\÷|\-|\+)/.test(input[input.length - 1]) === false) {
                    calculatedResult = input + '×'
                    setInput(calculatedResult)
                }
                break;
            
            case('÷'):
                if (/(\(|\×|\÷|\-|\+)/.test(input[input.length - 1]) === false) {
                    calculatedResult = input + '÷'
                    setInput(calculatedResult)
                }
                break;
            
            case('-'):
                if (/(\(|\×|\÷|\-|\+)/.test(input[input.length - 1]) === false) {
                    calculatedResult = input + '-';
                    setInput(calculatedResult)
                }
                break;
            
            case('+'):
                if (/(\(|\×|\÷|\-|\+)/.test(input[input.length - 1]) === false) {
                    calculatedResult = input + '+'
                    setInput(calculatedResult)
                }
                break;
            
            case('='):
                calculatedResult = calculate(input)
                setInput(calculatedResult)
                break;
            
            case('.'):
                calculatedResult = input + '.';
                if (
                    calculatedResult.match(/\./g) === null 
                    || 
                    calculatedResult.match(/\./g).length <= 1
                ) {
                    setInput(calculatedResult);
                }
                break;
            
            case('('):
                if (input === '0') {
                    calculatedResult = '(';
                } else {
                    calculatedResult = input + '(';
                }
                setInput(calculatedResult);
                break;
            
            case(')'):
                let openParensCount = input.match(/\(/g) !== null 
                ? 
                input.match(/\(/g).length 
                : 
                0;

                let closedParensCount = input.match(/\)/g) !== null 
                ? 
                input.match(/\)/g).length 
                : 
                0;

                if (openParensCount > closedParensCount) {
                    calculatedResult = input + ')';
                    setInput(calculatedResult);
                }
                break;
            
            case('0'):
                calculatedResult = input + '0';
                // check for negative
                if (calculatedResult.length > 1 && calculatedResult[0] === '0') {
                    calculatedResult = calculatedResult.slice(1,);
                }
                setInput(calculatedResult);
                break;
            
            case('1'):
                calculatedResult = input + '1';
                if (calculatedResult.length > 1 && calculatedResult[0] === '0') {
                    calculatedResult = calculatedResult.slice(1,);
                }
                setInput(calculatedResult);
                break;
            
            case('2'):
                calculatedResult = input + '2';
                if (calculatedResult.length > 1 && calculatedResult[0] === '0') {
                    calculatedResult = calculatedResult.slice(1,);
                }
                setInput(calculatedResult);
                break;
            
            case('3'):
                calculatedResult = input + '3';
                if (calculatedResult.length > 1 && calculatedResult[0] === '0') {
                    calculatedResult = calculatedResult.slice(1,);
                }
                setInput(calculatedResult);
                break;
            
            case('4'):
                calculatedResult = input + '4';
                if (calculatedResult.length > 1 && calculatedResult[0] === '0') {
                    calculatedResult = calculatedResult.slice(1,);
                }
                setInput(calculatedResult);
                break;
            
            case('5'):
                calculatedResult = input + '5';
                if (calculatedResult.length > 1 && calculatedResult[0] === '0') {
                    calculatedResult = calculatedResult.slice(1,);
                }
                setInput(calculatedResult);
                break;
            
            case('6'):
                calculatedResult = input + '6';
                if (calculatedResult.length > 1 && calculatedResult[0] === '0') {
                    calculatedResult = calculatedResult.slice(1,);
                }
                setInput(calculatedResult);
                break;
            
            case('7'):
                calculatedResult = input + '7';
                if (calculatedResult.length > 1 && calculatedResult[0] === '0') {
                    calculatedResult = calculatedResult.slice(1,);
                }
                setInput(calculatedResult);
                break;
            
            case('8'):
                calculatedResult = input + '8';
                if (calculatedResult.length > 1 && calculatedResult[0] === '0') {
                    calculatedResult = calculatedResult.slice(1,);
                }
                setInput(calculatedResult);
                break;
            
            case('9'):
                calculatedResult = input + '9';
                if (calculatedResult.length > 1 && calculatedResult[0] === '0') {
                    calculatedResult = calculatedResult.slice(1,);
                }
                setInput(calculatedResult);
                break;
            
        }
    }

    // function handleChange(event) {

    //     let revisedValue = event.target.value;
        
    //     if (revisedValue === '') {
    //         revisedValue = '0';
    //     } else if (revisedValue.length > 1 && revisedValue[0] === '0') {
    //         revisedValue = revisedValue.slice(1,);
    //     }

    //     // let decimalCheck = revisedValue.match(/\./g) === null || revisedValue.match(/\./g).length <= 1;
    //     // let digitCheck = [...revisedValue].every(letter => /[0-9]/.test(letter) === true || /\./.test(letter) === true);
    //     // const check = [...revisedValue]
    //     // .every(char => {
    //     //     /[0-9]/.test(letter) === true 
    //     //     || 
    //     //     /\./.test(letter) === true
    //     //     ||
    //     //     /\(|\)/.test(letter) === true
    //     // });

    //     setInput(revisedValue) 

    // }

    function calculate(input) {

        let result = input;

        // to ensure the equation doesn't end with any operators
        if (/(\d|\))/.test(result[result.length - 1]) === false) {
            result = result.slice(0, -1)
        }
         
        let indexNumberAgainstOpenParens = result.match(/(\d\()/)
        let indexNumberAgainstClosedParens = result.match(/(\)\d)/)
        let indexNumberAgainstSqrt = result.match(/\dsqrt/)

        // now replace sqrt with *sqrt
        // what about multiple symbols put together?
        // sqrt times sqrt

        while (
            indexNumberAgainstOpenParens !== null 
            || 
            indexNumberAgainstClosedParens !== null
            ||
            indexNumberAgainstSqrt !== null
        ) {
            result = indexNumberAgainstOpenParens !== null 
            ? 
            result.slice(0, indexNumberAgainstOpenParens.index + 1) + '*' + result.slice(indexNumberAgainstOpenParens.index + 1,) 
            : 
            result;
            
            result = indexNumberAgainstClosedParens !== null 
            ? 
            result.slice(0, indexNumberAgainstClosedParens.index + 2) + '*' + result.slice(indexNumberAgainstClosedParens.index + 2,) 
            : 
            result;

            result = indexNumberAgainstSqrt !== null
            ?
            result.slice(0, indexNumberAgainstSqrt.index + 1) + '*' + result.slice(indexNumberAgainstSqrt.index + 1,)
            :
            result; 

            indexNumberAgainstOpenParens = result.match(/(\d\()/);
            indexNumberAgainstClosedParens = result.match(/(\)\d)/);
            indexNumberAgainstSqrt = result.match(/\dsqrt/)
        }
        
        console.log('1', result)

        result = result.replaceAll(')(', ')*('); 
        result = result.match(/-+/) !== null && result.match(/-+/)[0].length % 2 === 0 ? result.replace(/-+/, '+') : result.replace(/-+/, '-');
        result = result.replace('()', '(0)');
        result = result.replace('×', '*');
        result = result.replace('÷', '/');
        result = result.replace('sqrt', 'Math.sqrt');

        console.log('2', result)

        // huge thanks to https://stackoverflow.com/a/18082175/18628118 for this alternative to eval()!
        function calcResult(result) {
            return new Function('return ' + result)();
        }
        result = calcResult(result);

        console.log('3', result)
        return '' + result;
        
    }

    // worry about negative numbers and not using symbols
    // if somebody presses too many symbols

    return (
        <div id="calculator-container">
            <section id="display">
            {input}
            </section>

            <section>
                <button aria-label="memory-recall" onClick={handleButtonClick}>MR</button>
                <button aria-label="memory-add" onClick={handleButtonClick}>M+</button>
                <button aria-label="memory-subtract" onClick={handleButtonClick}>M-</button>
                <button aria-label="memory-clear" onClick={handleButtonClick}>MC</button>
                <button aria-label="all-clear" onClick={handleButtonClick}>CE</button>
            </section>

            <section>
                <button aria-label="7" onClick={handleButtonClick}>7</button>
                <button aria-label="8" onClick={handleButtonClick}>8</button>
                <button aria-label="9" onClick={handleButtonClick}>9</button>
                <button aria-label="square-root" onClick={handleButtonClick}>√</button>
                <button aria-label="clear-entry" onClick={handleButtonClick}>+/-</button>
            </section>

            <section>
                <button aria-label="4" onClick={handleButtonClick}>4</button>
                <button aria-label="5" onClick={handleButtonClick}>5</button>
                <button aria-label="6" onClick={handleButtonClick}>6</button>
                <button aria-label="multiply" onClick={handleButtonClick}>×</button>
                <button aria-label="divide" onClick={handleButtonClick}>÷</button>
            </section>

            <section>
                <button aria-label="1" onClick={handleButtonClick}>1</button>
                <button aria-label="2" onClick={handleButtonClick}>2</button>
                <button aria-label="3" onClick={handleButtonClick}>3</button>
                <button aria-label="negative-or-subtract" onClick={handleButtonClick}>-</button>
                <button aria-label="add" onClick={handleButtonClick}>+</button>
            </section>

            <section>
                <button aria-label="decimal" onClick={handleButtonClick}>.</button>
                <button aria-label="0" onClick={handleButtonClick}>0</button>
                <button aria-label="equals" onClick={handleButtonClick}>=</button>
                <button aria-label="open-parenthesis" onClick={handleButtonClick}>(</button>
                <button aria-label="closed-parenthesis" onClick={handleButtonClick}>)</button>
            </section>
        </div>
    )
}