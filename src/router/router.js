import React from "react";
import { Route } from "react-router-dom";
import App from '../App';
import LoginPage from '../components/Login/LoginPage';
const ReactRouter =()=>{

    return (
        <React.Fragment>
            <Route exact path="/" component={App} />
            <Route  path="/login " component={LoginPage} />
        </React.Fragment>
        );

}

export default ReactRouter;
