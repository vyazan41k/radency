import React, { Component } from 'react';
import moment from 'moment';

export default class ExpirationDate extends Component {
  state = {
    style: null,
  };

  componentDidMount() {
    const { expirationDate } = this.props;

    const isValid1 =
      moment(expirationDate).format('YYYY-MM-DD') === expirationDate;
    const isValid2 =
      moment(expirationDate).format('MM/DD/YYYY') === expirationDate;

    const nowDate1 = moment().format('YYYY-MM-DD');
    const nowDate2 = moment().format('MM/DD/YYYY');

    if (!(isValid1 || isValid2)) {
      this.setState({ style: 'error' });
      console.log('in valid');
    } else if (
      moment(expirationDate).isBefore(nowDate1) ||
      moment(expirationDate).isBefore(nowDate2)
    ) {
      this.setState({ style: 'error' });
    } else if (expirationDate <= 0) {
      this.setState({ style: 'error' });
    }
  }

  render() {
    return <td className={this.state.style}>{this.props.expirationDate}</td>;
  }
}
