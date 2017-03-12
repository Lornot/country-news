var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var CreateHistory = require('history/lib/createHistory');


var Header = require('./components/Header.jsx');
var News = require('./components/News.jsx');
var Photoes = require('./components/Photoes.jsx');

var Routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Header} >
            <Route path="/news" component={News} />
            <Route path="/photoes" component={Photoes} />
        </Route>
    </Router>
);

module.exports = Routes;