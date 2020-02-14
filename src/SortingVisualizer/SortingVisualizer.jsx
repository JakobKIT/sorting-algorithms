import React from 'react';
import './SortingVisualizer.css';
import * as lib from '../helpers/functions.js'

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            numbers: [],
        };
    }

    componentDidMount() {
        this.resetNumbers();
    }

    resetNumbers() {
        const numbers = [];
        for (let i = 0; i < 300; i++) {
            numbers.push(lib.randomIntFromInterval(30,800));
        }
        this.setState({numbers});
    }

    render() {
        const {numbers} = this.state;

        return (
            <>
                <div className="numbers-container">
                    {numbers.map((value, index) => (
                         <div 
                             className="numbers-graph" 
                             key={index}
                             style={{height: `${value}px`}}>
                         </div>
                    ))}
                </div>
            </>
        );
    }
}
