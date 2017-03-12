var React = require('react');

var ArticleItem = React.createClass({
   render: function () {
       return (
           <div className="article">
               <h1>{this.props.title}</h1>
               <h2>{this.props.subtitle}</h2>
               <p>{this.props.text_content}</p>
               <div className="images">
                   <img width='200' src={this.props.thumbnails} alt=""/>
               </div>
           </div>
       )
   }
});

module.exports = ArticleItem;