import * as THREE from 'three';
import { useState } from 'react';
import CalculatorBody from './CalculatorBody';
import { Instances, CalculatorButton } from './CalculatorButton';


export default function Calculator() {
    const [currentButtonPressed, setCurrentButtonPressed] = useState('')

    const [input, setInput] = useState('0');
    const [currentMemory, setCurrentMemory] = useState('0');
    const [message, setMessage] = useState('');

    function handleButtonClick(char) {
        let calculatedResult;
        
        switch (char) {
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

    const buttons = [
        ['MR', 'M+', 'M-', 'MC', 'CE'],
        ['7', '8', '9', '√', '+/-'],
        ['4', '5', '6', '×', '÷'],
        ['1', '2', '3', '-', '+'],
        ['.', '0', '=', '(', ')']
    ]
        
    const buttonsInfo = [];
    
    let yPosition = (buttons.length / 2 - .5) * -1;
        
    for (let rowIndex = 0; rowIndex < buttons.length; rowIndex++) {

        let row = buttons[rowIndex];

        let xPosition = (row.length / 2 - .5) * -1.25;

        for (let buttonIndex = 0; buttonIndex < row.length; buttonIndex++) {

            const button = {};

            let position = new THREE.Vector3(xPosition, 0, yPosition);

            button['key'] = row[buttonIndex];
            button['id'] = row[buttonIndex];
            button['char'] = row[buttonIndex];
            button['position'] = position;

            buttonsInfo.push(button)

            xPosition += 1.25;
            
        }

        yPosition += 1;

    }
    
    const buttonsDisplay = [];

    buttonsInfo.map(button => {
        buttonsDisplay.push(
            <CalculatorButton 
                key={button['key']}
                id={button['id']}
                char={button['char']}
                position={button['position']}
                rotation={[0, 0 ,0]}
                scale={[1, 1, 1]}
                currentButtonPressed={currentButtonPressed}
                setCurrentButtonPressed={setCurrentButtonPressed}
                handleButtonClick={handleButtonClick}
            />
        )
    }) 

    return (
        <group>
            <CalculatorBody 
                input={input}
                message={message}
            />
            
            <Instances>
                <CalculatorButton
                    char="←"
                    position={[2.55, 0, -3.9]}
                    rotation={[0, Math.PI/2, 0]}
                    scale={[1.8, 1, 1.2]}
                    currentButtonPressed={currentButtonPressed}
                    setCurrentButtonPressed={setCurrentButtonPressed}
                    handleButtonClick={handleButtonClick}
                />
                {
                    buttonsDisplay.map(button =>
                        button
                    )
                }
            </Instances>
        </group>
    )
}