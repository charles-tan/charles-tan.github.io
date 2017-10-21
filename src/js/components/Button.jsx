var React = require('react');
var createReactClass = require('create-react-class');

var buttonStyle = {
  height: '6vh',
  width: '10vw',
  background: 'none',
  color: '#E5F4E3',
};

var Button = createReactClass({
  propTypes: {
    handleClick: React.PropTypes.func,
    label: React.PropTypes.string,
  },
  render: function () {
    return (
      <button
        style={buttonStyle}
        onClick={this.props.handleClick}>{this.props.label}</button>
    );
  }
});

module.exports = Button;
