import React from 'react';
import './SortingVisualizer.css';
import * as lib from '../helpers/functions.js';
import * as consts from '../helpers/constants.js';
import { getMergeSortAnimations } from '../sortingAlgorithms/mergeSort.js';

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
        for (let i = 0; i < consts.NUMBER_OF_SORTING_BARS; i++) {
           numbers.push(lib.randomIntFromInterval(10,730));
        }
        this.setState({numbers});
    }

    mergeSort() {
        const animations = getMergeSortAnimations(this.state.numbers);
        for (let i = 0; i < animations.length; i++) {
            const numberBars = document.getElementsByClassName('numbers-graph');
            const isChangeColor = i % 3 !== 2;
            if (isChangeColor) {
                const [barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = numberBars[barOneIndex].style;
                const barTwoStyle = numberBars[barTwoIndex].style;
                const color = i % 3 === 0 ? consts.SECONDARY_COLOR : consts.PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * consts.ANIMATION_SPEED);
            } else {
                setTimeout(() => {
                    const [barOneIndex, newHeight] = animations[i];
                    const barOneStyle = numberBars[barOneIndex].style;
                    barOneStyle.height =  `${newHeight}px`;
                }, i * consts.ANIMATION_SPEED);
            }
        }
    }

    quickSort() {}

    heapSort() {}

    bubbleSort() {}

    render() {
        const {numbers} = this.state;

        return (
            <>
                <button onClick={() => this.resetNumbers()}>New Numbers</button>
                <button onClick={() => this.mergeSort()}>Merge Sort</button>
                <button onClick={() => this.quickSort()}>Quick Sort</button>
                <button onClick={() => this.heapSort()}>Heap Sort</button>
                <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                <div className="numbers-container">
                    {numbers.map((value, index) => (
                         <div 
                             className="numbers-graph" 
                             key={index}
                             style={{
                                backgroundColor: consts.PRIMARY_COLOR,
                                height: `${value}px`}}>
                         </div>
                    ))}
                </div>
            </>
        );
    }
}
