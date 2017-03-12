var React = require('react');
var PhotoItem = require('./PhotoItem.jsx');

var photoesItems = [1,2,3,4,5,6,7,8];

var Photoes = React.createClass({
    
    render: function () {
        var photoesList = photoesItems.map(
            function (item) {
                return <div className="col-md-3"><PhotoItem src={'images/photo'+item+'.jpg'} /></div>
            }
        );

        return(
            <div className="photoesBlock row">{photoesList}</div>
        )
    }
});

module.exports = Photoes;