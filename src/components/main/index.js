import React, { Component } from 'react';
import {getData} from '../../lib/sdk';

class Main extends Component {
  state = {
    data: {}
  };

  async componentDidMount() {
    const data = await getData('USA');
    if (data && data.statusCode === '200' && data.data) {
      this.setState({data: data.data});
    }
  }
  render() {
    const { data } = this.state;
    console.log(data);
    return (
      <div className="App">
        howdy!
      </div>
    );
  }
}

export default Main;
