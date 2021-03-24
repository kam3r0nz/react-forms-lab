import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      chars: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      chars: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.chars} onChange={this.handleChange}/>
        <p>You have {this.props.maxChars - this.state.chars.length} characters left.</p>
      </div>
    );
  }
}

export default TwitterMessage;
