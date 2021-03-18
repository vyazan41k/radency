import React, { Component } from 'react';

export default class Children extends Component {
  state = {
    style: null,
    text: 'true',
  };

  componentDidMount() {
    const { children } = this.props;
    if (children === '') {
      this.setState({ text: 'false' });
    } else if (children !== 'true' && children !== 'false') {
      this.setState({ style: 'error', text: children });
    }
  }

  render() {
    return <td className={this.state.style}>{this.state.text}</td>;
  }
}
