import React from "react";
import Counter from "./counter.jsx";
import Hello from "./test.jsx";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';

import reducer from "./reducers.jsx";


const store = createStore(reducer);
//store.dispatch({type: "INCREMENT"}) 
//store.dispatch({type: "DECREMENT"})



export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div >
                        <Switch>
                            <Route path="/counter" component={Counter}></Route>
                            <Route path="/hello" component={Hello}></Route>
                           
                        </Switch>
                    </div>
                </Router>

            </Provider>
        )
    }

}

//const App = () => (
//    <Provider store={store}>
//        <Counter />
//    </Provider>
//)

//export default App