import React, { Component } from 'react';

export default class LicenseNumber extends Component {
  state = {
    style: null,
  };

  componentDidMount() {
    const { licenseNumber } = this.props;
    if (licenseNumber.length !== 6) {
      this.setState({ style: 'error' });
    } else if (!/^\w*$/.test(licenseNumber)) {
      this.setState({ style: 'error' });
    } else if (licenseNumber <= 0) {
      this.setState({ style: 'error' });
    }
  }

  render() {
    return <td className={this.state.style}>{this.props.licenseNumber}</td>;
  }
}
