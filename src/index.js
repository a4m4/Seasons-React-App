import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component{

   /* constructor(props) {
        super(props);

        this.state = { lat: null , errorMessage: '' };   
    } */

    state = { lat: null , errorMessage: ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position =>  this.setState({ lat : position.coords.latitude}) , //position is call back function
            err =>  this.setState({ errorMessage : err.message })    // err is a function
        );
    }


    renderContent () {
        if (this.state.errorMessage && !this.state.lat) {
            return <div> Error :  {this.state.errorMessage} </div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return (<div> <SeasonDisplay lat= {this.state.lat} /> </div>);
        }

            return < Spinner message= "Please Accept Location Request" />;
    }

    render() {
        return(
            <div className= "border"> 
                {this.renderContent()}
            </div>
        );
    };
}
        

ReactDOM.render(<App />, document.querySelector('#root'));






