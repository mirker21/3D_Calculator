import { useState } from "react";
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Calculator from "./Calculator";

export default function CalculatorContainer() {
    const [input, setInput] = useState('0');
    const [currentMemory, setCurrentMemory] = useState('0');
    const [message, setMessage] = useState('');

    function handleButtonClick(event) {
        let calculatedResult;
        
        switch (event.target.textContent) {
            case('MR'):
                calculatedResult = currentMemory;
                setInput(calculatedResult);
                break;
            
            case('M+'):
                calculatedResult = calculate(input);
                calculatedResult = `${Number(currentMemory) + Number(calculatedResult)}`
                setCurrentMemory(calculatedResult);
                break;
            
            case('M-'):
                calculatedResult = calculate(input);
                calculatedResult = `${Number(currentMemory) - Number(calculatedResult)}`
                setCurrentMemory(calculatedResult);
                break;
            
            case('MC'):
                setCurrentMemory('0');
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

            case('←'):
                calculatedResult = input.slice(0, -1);
                if (calculatedResult.length === 0) {
                    calculatedResult = '0';
                }
                setInput(calculatedResult)
                break;
            
            case('CE'):
                setInput('0');
                break;
            
            case('√'):
                if (input === '0') {
                    calculatedResult = 'sqrt(';
                } else {
                    calculatedResult = input + 'sqrt(';
                }
                setInput(calculatedResult);
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
                calculatedResult = input + '-';
                setInput(calculatedResult)
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
                // last character inside parentheses has to be digit
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
                    calculatedResult = '0';
                }
                setInput(calculatedResult);
                break;
            
            case('1'):
                if (input === '0' || (input.length < 2 && input[0] === '0')) {
                    calculatedResult = '1';
                } else {
                    calculatedResult = input + '1';
                }
                setInput(calculatedResult);
                break;
            
            case('2'):
                if (input === '0' || (input.length < 2 && input[0] === '0')) {
                    calculatedResult = '2';
                } else {
                    calculatedResult = input + '2';
                }
                setInput(calculatedResult);
                break;
            
            case('3'):
                if (input === '0' || (input.length < 2 && input[0] === '0')) {
                    calculatedResult = '3';
                } else {
                    calculatedResult = input + '3';
                }
                setInput(calculatedResult);
                break;
            
            case('4'):
                if (input === '0' || (input.length < 2 && input[0] === '0')) {
                    calculatedResult = '4';
                } else {
                    calculatedResult = input + '4';
                }
                setInput(calculatedResult);
                break;
            
            case('5'):
                if (input === '0' || (input.length < 2 && input[0] === '0')) {
                    calculatedResult = '5';
                } else {
                    calculatedResult = input + '5';
                }
                setInput(calculatedResult);
                break;
            
            case('6'):
                if (input === '0' || (input.length < 2 && input[0] === '0')) {
                    calculatedResult = '6';
                } else {
                    calculatedResult = input + '6';
                }
                setInput(calculatedResult);
                break;
            
            case('7'):
                if (input === '0' || (input.length < 2 && input[0] === '0')) {
                    calculatedResult = '7';
                } else {
                    calculatedResult = input + '7';
                }
                setInput(calculatedResult);
                break;
            
            case('8'):
                if (input === '0' || (input.length < 2 && input[0] === '0')) {
                    calculatedResult = '8';
                } else {
                    calculatedResult = input + '8';
                }
                setInput(calculatedResult);
                break;
            
            case('9'):
                if (input === '0' || (input.length < 2 && input[0] === '0')) {
                    calculatedResult = '9';
                } else {
                    calculatedResult = input + '9';
                }
                setInput(calculatedResult);
                break;
            
        }

        if (calculatedResult !== '0') {
            setMessage('')
        }
    }

    // huge thanks to https://stackoverflow.com/a/18082175/18628118 for this alternative to eval()!
    function calcResult(result) {
        return new Function('return ' + result)();
    }

    function calculate(input) {

        try {

            let result = input;

            if (result === "") {
                return 0;
            }

            if ((result.includes('sqrt(') || result.includes('(')) && !result.includes(')')) {
                throw new Error('oops!');
            }

            if (
                [...`${result}`].every(letter => /\d/g.test(letter)) === true 
                || 
                (result[0] === '-' && [...`${result}`].slice(1,).every(letter => /\d/g.test(letter)) === true)
            ) {
                return result;
            }

            // to ensure the equation doesn't end with any operators
            if (/(\d|\))/.test(result[result.length - 1]) === false) {
                result = [...`${result}`].slice(0, result.length - 1).join('');
            }
            
            let indexNumberAgainstOpenParens = result.match(/(\d\()/);
            let indexNumberAgainstClosedParens = result.match(/(\)\d)/);
            let indexNumberAgainstSqrt = result.match(/\dsqrt/);

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
                indexNumberAgainstSqrt = result.match(/\dsqrt/);
            }

            result = result.replaceAll(')(', ')*('); 
            result.match(/-+/) !== null && result.match(/-+/)[0].length % 2 === 0 
            ? 
            result = result.replaceAll(/-+/g, '+') 
            : 
            result = result.replaceAll(/-+/g, '-');
            result = result.replaceAll('()', '(0)');
            result = result.replaceAll('×', '*');
            result = result.replaceAll('÷', '/');
            result = result.replaceAll('-)', '-0)');
            result = result.replaceAll(/\)sqrt/g, ')*sqrt');
            result = result.replaceAll('sqrt', 'Math.sqrt');

            result = calcResult(result);

            if (isNaN(result) === true) {
                throw new Error('oops!');
            }

            return '' + result;

        } catch (error) {
            setMessage('ERROR')
            return '0';
        }
        
    }

    return (
        <div id="calculator-container">
            <Canvas id="three-canvas">
                <PerspectiveCamera makeDefault position={[0, 25, 5]} />
                <OrbitControls />
                <ambientLight intensity={2} color="#FFFED0" />
                <directionalLight position={[0, 0, 10]} intensity={2} color="#FFFED0" />
                <Calculator />
            </Canvas>
            {message}
            <section id="first-row">
                <section id="display">{input}</section>
                <button aria-label="backspace" onClick={handleButtonClick}>←</button>
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