import React, { Component } from 'react';

export default class YearlyIncome extends Component {
  state = {
    style: null,
    text: null,
  };

  componentDidMount() {
    const num = parseInt(this.props.yearlyIncome * 100) / 100;
    const length = String(num).length;
    this.setState({ text: num });
    if (length >= 7) {
      this.setState({ style: 'error' });
    } else if (this.props.yearlyIncome <= 0) {
      this.setState({ style: 'error' });
    }
  }
  render() {
    return <td className={this.state.style}>{this.state.text}</td>;
  }
}
