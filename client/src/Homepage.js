import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginPage from './LoginPage';
import registerServiceWorker from './registerServiceWorker';


class HomePage extends Component {
    constructor(props){
        super(props);
    }
    render() {
        console.log(this.props)
        return (
            <div>
            HOME PAGE -- PLACE HOLDER
            {this.props.details}
            <button onClick={this.props.onback}>BACK</button>
            </div>
        )
    }
}

export default HomePage