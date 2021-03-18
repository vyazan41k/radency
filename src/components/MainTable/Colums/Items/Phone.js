import React, { Component } from 'react';

export default class Phone extends Component {
  state = {
    style: null,
    text: null,
  };

  componentDidMount() {
    const { phone } = this.props;
    const arr = phone.split('');
    const one = arr[0];
    const two = arr[1];
    const total = [];

    if (arr.length >= 12 && one !== '+' && two !== '1') {
      this.setState({ style: 'error', text: arr.join('') });
    } else if (arr.length === 11 && one !== '1') {
      this.setState({ style: 'error', text: arr.join('') });
    } else if (arr.length < 10) {
      this.setState({ style: 'error', text: arr.join('') });
    } else if (arr.length === 10 && one !== '+') {
      this.setState({ text: total.concat('+1', ...arr).join('') });
    }
  }

  render() {
    return <td className={this.state.style}>{this.state.text}</td>;
  }
}
