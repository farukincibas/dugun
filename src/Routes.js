import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Card from "./FetchCard";
import Purchase from "./PurchaseOrder";
import SuccessMessage from './SuccessMessage'
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Card} />
                    <Route path="/Purchase" component={Purchase} />
                    <Route path="/SuccessPurchase" component={SuccessMessage} />
                </Switch>
            </Router>
        )
    }
}