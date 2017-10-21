var React = require('react');
var createReactClass = require('create-react-class');
var Button = require("./Button.jsx");

var Navbar = createReactClass({
  propTypes: {
    button1: React.PropTypes.func,
    label1: React.PropTypes.string,
    button2: React.PropTypes.func,
    label2: React.PropTypes.string,
    button3: React.PropTypes.func,
    label3: React.PropTypes.string,
    button4: React.PropTypes.func,
    label4: React.PropTypes.string,
  },
  render: function() {
    var headerStyle = {
      display: 'flex',
      justifyContent:'flex-end',
      flexDirection: 'row',
      height: '6vh',
      backgroundColor: '#000000',
    }
    return (
      <div>
        <span style={headerStyle}>
          <Button handleClick={this.props.button1} label={this.props.label1}/>
          <Button handleClick={this.props.button2} label={this.props.label2}/>
          <Button handleClick={this.props.button3} label={this.props.label3}/>
          <Button handleClick={this.props.button4} label={this.props.label4}/>
        </span>
      </div>
    );

  }
});

module.exports = Navbar
