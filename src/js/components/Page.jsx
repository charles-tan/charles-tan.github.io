var React = require('react');
var createReactClass = require('create-react-class');
var Button = require("./Button.jsx");

var Page = createReactClass({
  propTypes: {
  	color: React.PropTypes.string,
    background: React.PropTypes.string,
    title: React.PropTypes.string,
    subtitle: React.PropTypes.string,
    description: React.PropTypes.string,
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
      flexDirection: 'column',
      height: '94vh',
    };
    var style2 = {
      flex: 1,
    }
    if(this.props.color === "") {
      style['background'] = 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3) ), url(' + this.props.background + ') no-repeat center center fixed';
      style['backgroundSize'] = 'cover';
    } else {
      style['backgroundColor'] = this.props.color;
    }
    var titleStyle = {
      textAlign: 'center',
      paddingTop: '20px',
      textWeight: 'bold',
      fontSize: 60,
    };
    var subtitleStyle = {
      textAlign: 'center',
      textWeight: 'bold',
      fontSize: 24,
    };
    var descriptionStyle = {
      fontSize: 18,
      padding: '10px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    };
    return (
    	<div>
        <div style={style}>
          <span style={style2}>
            <img src={this.props.image} style={this.props.imageStyle}></img>
            <span>
              <div style={titleStyle}>{this.props.title}</div>
              <div style={subtitleStyle}>{this.props.subtitle}</div>
              <div style={descriptionStyle} dangerouslySetInnerHTML={{ __html: this.props.description }}></div>
            </span>
          </span>
        </div>
      </div>
    );

  }
});

module.exports = Page
