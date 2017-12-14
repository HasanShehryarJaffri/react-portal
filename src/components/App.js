import React, {PropTypes} from 'react';
import Login from './Authentication/Login';
import HomePage from './HomePage/HomePage';

class App extends React.Component{
    render(){
        return(
            <div className="jumbotron">
                {/*<Header/>*/} 
                {this.props.children}
            </div>

        );
    }
}

App.propTypes = {
    children:PropTypes.object.isRequired
};

export default App;