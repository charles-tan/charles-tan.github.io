var React = require('react');
var createReactClass = require('create-react-class');

var Header = createReactClass({
  propTypes: {
  	title: React.PropTypes.string,
    subtitle: React.PropTypes.string
  },
  getDefaultProps() {
  	return {
  		title: "Website",
      subtitle: "Charles Tan"
  	};
  },
  render: function() {
  	var style = {
      color: '#E5F4E3',
  	};
    var text1 = {
      color: '#E5F4E3',
      fontSize: 70,
      fontWeight: 'bold',
    };
    var text2 = {
      color: '#E5F4E3',
      fontSize: 24,
    };

    return (
    	<div style={style}>
        <div style={text1}>{this.props.title}</div>
        <div style={text2}>{this.props.subtitle}</div>
      </div>
    );

  }
});

module.exports = Header
