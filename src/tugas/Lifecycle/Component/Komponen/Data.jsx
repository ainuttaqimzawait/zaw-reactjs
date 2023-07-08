import React from 'react';
import ShowCards from './ShowCard';

class Data extends React.Component {


    render() {
        console.log(this.state.articles);
        return (<h1>halo</h1>);
        
        // <h5>{this.state.articles}</h5>
    }
}

export default Data;