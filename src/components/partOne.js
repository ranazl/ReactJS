import React, { Component } from 'react';
import '../css/partOne.css';

class PartOne extends Component {
    state = {}
    render() {
        return (
            <div class="row">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div>
        );
    }
}

export default PartOne;