import React, { Component } from 'react';

class GuGuDan extends Component {
    state = {
        num1: Math.ceil(Math.random()*9),
        num2: Math.ceil(Math.random()*9),
        value: '',
        result: null,
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.num1 * this.state.num2 === parseInt(this.state.value)){
            this.setState({
                result: `정답: ${this.state.value}`,
                num1: Math.ceil(Math.random()*9),
                num2: Math.ceil(Math.random()*9),
                value: '',
            });
        } else {
            this.setState({
                result: `오답`,
                value: '',
            });
        }
        this.input.focus();
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
        this.input.focus();
    }

    onRefInput = (ref) => {this.input = ref}

    gugudanTemplate = () => {
        return (
        <React.Fragment>
            <div>
                <p>{this.state.num1}곱하기 {this.state.num2}은?</p>
                <form onSubmit={this.handleSubmit}>
                    <input ref= {this.onRefInput} type="number" value={this.state.value} onChange={this.handleChange} />
                    <button type="submit">제출</button>
                </form>
                <p>{this.state.result}</p>
            </div>
        </React.Fragment>
        )
    }

    render(){
        return (
            <div>
                {this.gugudanTemplate()}
            </div>
        )
    }
}

export default GuGuDan;