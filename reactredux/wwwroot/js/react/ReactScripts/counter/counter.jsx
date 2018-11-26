import React, { Component } from "react";
import { connect } from "react-redux";

//import { bindActionCreators } from "redux";

import { increment, decrement } from './action.jsx';


class Counter extends Component{
   

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div>
                    <button onClick={this.props.decrement}> -</button>
                    <span>{this.props.countFromReducer.count}</span>
                    <button onClick={this.props.increment}> +</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    
    countFromReducer: state.countValue 
})

//const mapDispatchToProps = dispatch => {
//    return bindActionCreators({ increment, decrement }, dispatch)
//}

//export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default connect(mapStateToProps, { increment, decrement })(Counter);