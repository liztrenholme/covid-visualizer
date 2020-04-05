import React, { Component } from 'react';
import {getData} from '../../lib/sdk';
import './main.css';
import Network from '../network';

class Main extends Component {
  state = {
    data: {},
    stateMode: true,
    nationalMode: false,
    selectedState: 'Ohio',
    availableStates: []
  };

  async componentDidMount() {
    const data = await getData('USA');
    if (data && data.statusCode === 200) {
      const availableStates = [];
      data.data.covid19Stats.forEach(i => availableStates.push(i.province));
      this.setState({data: data.data, availableStates});
    }
  }
  clearViz = (e) => this.setState({stateMode: false, nationalMode: false, selectedState: e.currentTarget.value}, () => {
    this.chooseState();
  });
  chooseState = () => {
    this.setState({stateMode: true});
  }
  toggleMode = () => this.state.stateMode 
    ? this.setState({stateMode: false, nationalMode: true}) 
    : this.setState({stateMode: true, nationalMode: false});
  render() {
    const { data, nationalMode, stateMode, selectedState } = this.state;
    const stateStats = data && data.covid19Stats && data.covid19Stats.length 
      ? data.covid19Stats.filter(i => i.province === selectedState) : [];
    const stateNodes = stateStats.length 
      ? stateStats.map(i => {return({ 
        id: `${i.city} city`, 
        label: `${i.city} ${i.confirmed}`, 
        shape: 'circle',
        color: i.confirmed > 5000 ? '#964eba' 
          : i.confirmed > 1000 ? '#ba4e66'
            : i.confirmed > 500 ? '#f00' 
              : i.confirmed > 100 ? 'orange' 
                : i.confirmed > 50 ? '#FFFF00' 
                  : i.confirmed === 0 ? '#fff' 
                    : '#fcfbd9' });}).concat([{id: selectedState, label: selectedState}]) : []; //[{id: selectedState, label: selectedState}];
    const stateEdges = stateStats.length ? stateStats.map(i => {return({ from: i.province, to: `${i.city} city` });}) : [];

    const states = data && data.covid19Stats && data.covid19Stats.length 
      ? [...new Set(data.covid19Stats.map(i => {return(i.province);}))] : [];
    states.sort();
    const statesArray = states.map(i => {return({id: i, label: i});});
    const allNodes = data && data.covid19Stats && data.covid19Stats.length 
      ? data.covid19Stats.map(i => {return({ 
        id: `${i.keyId} city`, 
        label: `${i.city} ${i.confirmed}`, 
        shape: 'circle', 
        color: i.confirmed > 5000 ? '#964eba' 
          : i.confirmed > 1000 ? '#ba4e66' 
            : i.confirmed > 500 ? '#f00' 
              : i.confirmed > 100 ? 'orange' 
                : i.confirmed > 50 ? '#FFFF00' 
                  : i.confirmed === 0 ? '#fff' 
                    : '#fcfbd9' });}).concat(statesArray) : []; // [{id: 'Ohio', label: 'Ohio'}];
    const allEdges = data && data.covid19Stats && data.covid19Stats.length 
      ? data.covid19Stats.map(i => {return({ from: i.province, to: `${i.keyId} city` });}) : [];
    const dateUpdated = data && data.lastChecked 
      ? `${data.lastChecked.split('T')[0]}, ${data.lastChecked.split('T')[1].split('.')[0]}` : '';
    return (
      <div className="main">
        <h1>Covid-19 Stats By County</h1><span>Updated: {dateUpdated}</span>
        <div className='button-container'>
          <div className={stateMode ? 'active-button button' : 'inactive-button button'}
            onClick={this.toggleMode}>
          State Mode
          </div>
          <select className='inactive-button' onChange={this.clearViz} value={selectedState}>
            {states && states.length ? states.map(i => {
              return(
                <option 
                  key={i} 
                  label={i}
                  value={i}>{i}</option>
              );}) : null}
          </select>
          <div className={nationalMode ? 'active-button button' : 'inactive-button button'}
            onClick={this.toggleMode}>
                All States
          </div>
        </div>
        <div className="main-layout">
          <div className="counties-container">
            <h2>{selectedState} Counties</h2>
            <ul className="county-list">
              {stateStats.length ? 
                stateStats.map(i => {return(<li key={i.city}>
                  <p className="counties" style={i.confirmed > 50 ? {color: 'red', fontWeight: 'bold'} : {}}>
                    {i.city || i.province}: {i.confirmed}
                  </p>
                </li>);}) : null}
            </ul>
          </div>
          <div className="visualizer">
            {data && data.covid19Stats && data.covid19Stats.length
            && stateMode && !nationalMode
              ? <Network 
                data={data}
                nodes={stateNodes}
                edges={stateEdges}
                ohioMode={stateMode} /> : null}
            {data && data.covid19Stats && data.covid19Stats.length
            && nationalMode && !stateMode
              ? <Network 
                data={data}
                nodes={allNodes}
                edges={allEdges}
                ohioMode={stateMode} /> : null}
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