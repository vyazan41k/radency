import React, { Component } from 'react';
import CSVReader from 'react-csv-reader';
import MainTable from '../MainTable';
import './CSVReact.scss';

export default class CSVReact extends Component {
  state = {
    data: null,
  };

  handleForce = data => this.setState({ data: data });

  render() {
    const papaparseOptions = {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      transformHeader: header => header.toLowerCase().replace(/\W/g, '_'),
    };

    return (
      <div>
        <CSVReader
          className="react-csv-input"
          label="Добавтье свой файл формата CSV"
          onFileLoaded={this.handleForce}
          parserOptions={papaparseOptions}
        />
        {this.state.data && <MainTable data={this.state.data} />}
      </div>
    );
  }
}
