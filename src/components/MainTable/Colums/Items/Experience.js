import React, { Component } from 'react';

export default class Experience extends Component {
  state = {
    style: null,
  };

  componentDidMount() {
    if (
      !(
        parseInt(this.props.experience) >= 0 &&
        parseInt(this.props.experience) < parseInt(this.props.age)
      )
    ) {
      this.setState({ style: 'error' });
    }
  }

  render() {
    return (
      <td className={this.state.style}>{Number(this.props.experience)}</td>
    );
  }
}
