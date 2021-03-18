import React, { Component } from 'react';

export default class Age extends Component {
  state = {
    style: null,
  };

  componentDidMount() {
    if (parseInt(this.props.age) < 21 || !(this.props.age > 0)) {
      this.setState({ style: 'error' });
    }
  }

  render() {
    return (
      <td className={this.state.style}>{Number(parseInt(this.props.age))}</td>
    );
  }
}
