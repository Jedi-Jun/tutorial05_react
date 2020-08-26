import React from 'react';
import ReactDOM from 'react-dom';

const GuGuDan = () => {
    const [number1, setNumber1] = React.useState(Math.ceil(Math.random()*9));
    const [number2, setNumber2] = React.useState(Math.ceil(Math.random()*9));
    const [value, setValue] = React.useState('');
    const [result, setResult] = React.useState('');
    const onRefInput = React.useRef(null);

    const handlerSubmit = (e) => {
        e.preventDefault();
        if(number1 * number2 === parseInt(value)) {
            setNumber1(Math.ceil(Math.random()*9));
            setNumber2(Math.ceil(Math.random()*9));
            setValue('');
            // setResult(`정답: ${value}`);
            setResult((prevResult) => {
                console.log('prevResult: ', prevResult);
                return `정답: ${value}`;
            });
            onRefInput.current.focus();
        } else {
            setValue('');
            setResult('오답');
            onRefInput.current.focus();
        }
    }

    const handlerChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <React.Fragment>
            <div>
                <span>
                    {number1}곱하기 {number2}는?
                </span>
                <span>
                    <form onSubmit={handlerSubmit}>
                        <input ref={onRefInput} type="number" value={value} onChange={handlerChange} />
                        <input type="submit" value="제출" />
                    </form>
                </span>
                <span>
                    {result}
                </span>
            </div>
        </React.Fragment>
    )
}

export default GuGuDan;

// ReactDOM.render(<GuGuDan />, document.getElementById('root'));