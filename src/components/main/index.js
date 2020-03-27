import React, { Component } from 'react';
import {getData} from '../../lib/sdk';
import './main.css';
import Network from '../network';

class Main extends Component {
  state = {
    data: {},
    ohioMode: true
  };

  async componentDidMount() {
    const data = await getData('USA');
    if (data && data.statusCode === 200) {
      this.setState({data: data.data});
    }
  }
  toggleMode = () => this.state.ohioMode ? this.setState({ohioMode: false}) : this.setState({ohioMode: true});
  render() {
    const { data, ohioMode } = this.state;
    const ohioStats = data && data.covid19Stats && data.covid19Stats.length ? data.covid19Stats.filter(i => i.province === 'Ohio') : [];
    const ohioNodes = ohioStats.length ? ohioStats.map(i => {return({ id: i.city, label: `${i.city} ${i.confirmed}` });}).concat([{id: 'Ohio', label: 'Ohio'}]) : [{id: 'Ohio', label: 'Ohio'}];
    const ohioEdges = ohioStats.length ? ohioStats.map(i => {return({ from: i.province, to: i.city });}) : [];

    const states = data && data.covid19Stats && data.covid19Stats.length ? [...new Set(data.covid19Stats.map(i => {return(i.province);}))] : [];
    const statesArray = states.map(i => {return({id: i, label: i});});
    const allNodes = data && data.covid19Stats && data.covid19Stats.length ? data.covid19Stats.map(i => {return({ id: i.keyId, label: `${i.city} ${i.confirmed}` });}).concat(statesArray) : [{id: 'Ohio', label: 'Ohio'}];
    const allEdges = data && data.covid19Stats && data.covid19Stats.length ? data.covid19Stats.map(i => {return({ from: i.province, to: i.keyId });}) : [];
    return (
      <div className="main">
        <h1>Covid-19 Stats in Ohio</h1><span>Updated: {data.lastChecked}</span>
        <div className={ohioMode ? 'active-button button' : 'inactive-button button'}
          onClick={this.toggleMode}>
                Ohio
        </div>
        <div className={ohioMode ? 'inactive-button button' : 'active-button button'}
          onClick={this.toggleMode}>
                All States
        </div>
        <div className="main-layout">
          <div className="counties-container">
            <h2>Counties</h2>
            <ul className="county-list">
              {ohioStats.length ? 
                ohioStats.map(i => {return(<li key={i.city}>
                  <p className="counties" style={i.confirmed > 50 ? {color: 'red', fontWeight: 'bold'} : {}}>
                    {i.city}: {i.confirmed}
                  </p>
                </li>);}) : null}
            </ul>
          </div>
          <div className="visualizer">
            {data && data.covid19Stats && data.covid19Stats.length
            && ohioMode
              ? <Network 
                data={data}
                nodes={ohioNodes}
                edges={ohioEdges}
                ohioMode={ohioMode} /> : null}
            {data && data.covid19Stats && data.covid19Stats.length
            && !ohioMode
              ? <Network 
                data={data}
                nodes={allNodes}
                edges={allEdges}
                ohioMode={ohioMode} /> : null}
          </div>
          {/* <div className="graph-3d">
          graph 3d
        </div> */}
        </div>
      </div>
    );
  }
}

export default Main;
