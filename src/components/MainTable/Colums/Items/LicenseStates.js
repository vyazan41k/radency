import React, { Component } from 'react';

export default class LicenseStates extends Component {
  state = {
    style: null,
    text: null,
  };

  componentDidMount() {
    const { licenseStates } = this.props;

    const str = licenseStates.map(item =>
      item.split('').slice(0, 2).join('').toUpperCase(),
    );
    this.setState({ text: str });
  }

  render() {
    return <td>{this.state.text}</td>;
  }
}
