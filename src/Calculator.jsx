import * as THREE from 'three';

import CalculatorBody from './CalculatorBody';
import { Instances, CalculatorButton } from './CalculatorButton';


export default function Calculator() {

    const buttons = [
        ['MR', 'M+', 'M-', 'MC', 'CE'],
        ['7', '8', '9', '√', '+/-'],
        ['4', '5', '6', '×', '÷'],
        ['1', '2', '3', '-', '+'],
        ['.', '0', '=', '(', ')']]
        
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
            />
        )
    })
    
    console.log(buttonsDisplay)    

    return (
        <group>
            <CalculatorBody />
            
            <Instances>
                <CalculatorButton
                    char="←"
                    position={[2.55, 0, -3.9]}
                    rotation={[0, Math.PI/2, 0]}
                    scale={[1.8, 1, 1.2]}
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