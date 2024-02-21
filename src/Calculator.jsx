import { useState } from "react";

export default function Calculator() {
    const [firstNum, setFirstNum] = useState('0');
    const [buttonPressed, setButtonPressed] = useState();
    const [secondNum, setSecondNum] = useState();
    const [currentMemory, setCurrentMemory] = useState();
    const [currentResult, setCurrentResult] = useState(0);

    function handleButtonClick(event) {
        switch (event.target.value) {

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

    function Calculate() {

    }

    return (
        <div id="calculator-container">
            <section id="display">
                <p>{currentMemory}</p>
                <input type="text" pattern="/\d*/" onChange={handleChange} value={firstNum} />
            </section>

            <section>
                <button>MR</button>
                <button>M+</button>
                <button>M-</button>
                <button>MC</button>
                <button>AC</button>
            </section>

            <section>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>&#x221A;</button>
                <button>CE</button>
            </section>

            <section>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>&times;</button>
                <button>÷</button>
            </section>

            <section>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>-</button>
                <button>+</button>
            </section>

            <section>
                <button>.</button>
                <button>0</button>
                <button id="equals">=</button>
            </section>
        </div>
    )
}