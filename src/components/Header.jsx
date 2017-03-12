var React = require('react');

var Header = React.createClass({
    render: function () {
        return (
            <div>
                <header>
                    <div className="container" >
                        <div className="row">
                            <div className="col-md-9">
                                <h1>Country News</h1>
                                <h2>Top Stories in my country</h2>
                            </div>
                            <div className="col-md-3">
                                <ul className="socialIcons">
                                    <li className="navbar-left"><a href="/twitter"><i className="fa fa-twitter-square" aria-hidden="true"></i></a></li>
                                    <li className="navbar-left"><a href="/facebook"><i className="fa fa-facebook-square" aria-hidden="true"></i></a></li>
                                    <li className="navbar-left"><a href="/instagram"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                    <li className="navbar-left"><a href="/linkedin"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                                    <li className="navbar-left"><a href="/email"><i className="fa fa-envelope" aria-hidden="true"></i></a></li>
                                </ul>

                                <ul className="nav navbar-nav">
                                    <li className="active"><a href="/#/news">NEWS</a></li>
                                    <li><a href="/#/photoes">PHOTOES</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
                <div id="main">
                    <div className="submain">
                        <div className="container ">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Header;