var React = require('react');

var PhotoItem = React.createClass({
    
    render: function () {
       return <img height="200" src={this.props.src} alt={this.props.alt} />
   }
});

module.exports = PhotoItem;