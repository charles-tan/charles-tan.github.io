var React = require('react');
var createReactClass = require('create-react-class');
var Header = require("./Header.jsx");
var Button = require("./Button.jsx");

var BigPane = createReactClass({
  propTypes: {
  	color: React.PropTypes.string,
    background: React.PropTypes.string,
    title: React.PropTypes.string,
    subtitle: React.PropTypes.string,
  },
  getDefaultProps() {
  	return {
  		color: "",
      title: "DEVELOPER"
  	};
  },
  render: function() {
    var style = {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',
      height: '94vh',
    };
    if(this.props.color === "") {
      style['background'] = 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3) ), url(' + this.props.background + ') no-repeat center center fixed';
      style['backgroundSize'] = 'cover';
    } else {
      style['backgroundColor'] = this.props.color;
    }
    return (
      <div>
      	<div style={style} >
      		<Header title={this.props.title} subtitle={this.props.subtitle} ></Header>
        </div>
      </div>
    );

  }
});

module.exports = BigPane
