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
    availableStates: [],
    anchored: [],
    updating: false,
    animationEnabled: true
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

  selectNode = (id) => () => {
    const {anchored} = this.state;
    anchored.push(id);
    // this.setState({anchored});
  }

  updateVis = () => this.setState({updating: true})

  events = {
    // select: (event) => {
    //   var { nodes, edges } = event;
    // },
    dragStart: (event) => {
      var { nodes } = event;
      const temp = this.state.anchored;
      const updated = temp.filter(node => node.id !== nodes[0]);
      this.setState({anchored: updated});
    },
    dragEnd: (event) => {
      var { nodes, edges, pointer } = event;
      const temp = this.state.anchored;
      if (nodes.length === 1 && edges.length > 1) {
        return;
      }
      temp.push({id: nodes[0], x: pointer.canvas.x, y: pointer.canvas.y});
      this.updateVis();
      this.setState({anchored: temp, updating: false});
    },
    doubleClick: (event) => {
      var { nodes } = event;
      const temp = this.state.anchored;
      const updated = temp.filter(node => node.id !== nodes[0]);
      this.updateVis();
      this.setState({anchored: updated, updating: false});
    }
  };


  animationOn = {
    barnesHut: {
      gravitationalConstant: -12000,
      // centralGravity: 0.9,
      springLength: 95,
      springConstant: 0.04,
      damping: 1,
      // avoidOverlap: 0.04
    },
    minVelocity: 0.07
  }
  toggleAnimation = () => this.state.animationEnabled 
    ? this.setState({animationEnabled: false}) : this.setState({animationEnabled: true})

  toggleMode = () => this.state.stateMode 
    ? this.setState({stateMode: false, nationalMode: true}) 
    : this.setState({stateMode: true, nationalMode: false});
  render() {
    const { data, nationalMode, stateMode, selectedState, anchored, updating, animationEnabled } = this.state;
    const stateStats = data && data.covid19Stats && data.covid19Stats.length 
      ? data.covid19Stats.filter(i => i.province === selectedState) : [];
    const stateNodes = stateStats.length 
      ? stateStats.map(i => {
        return({ 
          id: `${i.city} ${i.province}`, 
          label: `${i.city || ''} ${i.confirmed}`, 
          shape: 'circle',
          shadow: true,
          scaling: {min: 0, max: 100, label: {enabled: true}},
          value: i.confirmed,
          hidden: i.city === 'Unassigned' && i.confirmed === 0,
          fixed: anchored.map(i => i.id).includes(`${i.city} ${i.province}`) ? 
            {x: true, y: true} 
            : {x: false, y: false},
          selectNode: this.selectNode(i.id),
          x: anchored.map(i => i.id).includes(`${i.city} ${i.province}`) ? 
            Math.ceil(anchored.filter(j => j.id === `${i.city} ${i.province}`)[0].x)
            : 0,
          y: anchored.map(i => i.id).includes(`${i.city} ${i.province}`) ? 
            Math.ceil(anchored.filter(j => j.id === `${i.city} ${i.province}`)[0].y)
            : 0,
          color: i.confirmed > 5000 ? '#964eba' 
            : i.confirmed > 1000 ? '#ba4e66'
              : i.confirmed > 500 ? '#f00' 
                : i.confirmed > 100 ? 'orange' 
                  : i.confirmed > 50 ? '#FFFF00' 
                    : i.confirmed === 0 ? '#fff' 
                      : '#fcfbd9' });}).concat([{id: selectedState, label: selectedState}]) : [];
    const stateEdges = stateStats.length ? stateStats.map(i => {return({ from: i.province, to: `${i.city} ${i.province}`, hidden: i.city === 'Unassigned' && i.confirmed === 0, });}) : [];

    const states = data && data.covid19Stats && data.covid19Stats.length 
      ? [...new Set(data.covid19Stats.map(i => {return(i.province);}))] : [];
    states.sort();
    const statesArray = states.map(i => {return({id: i, label: i});});
    const allNodes = data && data.covid19Stats && data.covid19Stats.length 
      ? data.covid19Stats.map(i => {return({ 
        id: `${i.keyId} ${i.province}`, 
        label: `${i.city || ''} ${i.confirmed}`, 
        shape: 'circle',
        shadow: true,
        scaling: {min: 0, max: 100, label: {enabled: true}},
        value: i.confirmed,
        hidden: i.city === 'Unassigned' && i.confirmed === 0,
        selectable: true,
        color: i.confirmed > 5000 ? '#964eba' 
          : i.confirmed > 1000 ? '#ba4e66' 
            : i.confirmed > 500 ? '#f00' 
              : i.confirmed > 100 ? 'orange' 
                : i.confirmed > 50 ? '#FFFF00' 
                  : i.confirmed === 0 ? '#fff' 
                    : '#fcfbd9' });}).concat(statesArray) : [];
    const allEdges = data && data.covid19Stats && data.covid19Stats.length 
      ? data.covid19Stats.map(i => {return({ from: i.province, to: `${i.keyId} ${i.province}` });}) : [];
    const dateUpdated = data && data.lastChecked 
      ? `${data.lastChecked.split('T')[0]}, ${data.lastChecked.split('T')[1].split('.')[0]}` : 'fetching...';
    return (
      <div className="main">
        <h1>Covid-19 Confirmed Cases By County</h1><span>Updated: {dateUpdated}</span>
        <div className='button-container'>
          <div className={stateMode ? 'active-button button' : 'inactive-button button'}
            onClick={this.toggleMode}>
          State Mode
          </div>
          {states && states.length ?
            <select className='inactive-button' onChange={this.clearViz} value={selectedState}>
              {states && states.length ? states.map(i => {
                return(
                  <option 
                    key={i} 
                    label={i}
                    value={i}>{i}</option>
                );}) : null}
            </select> : null}
          <div className={nationalMode ? 'active-button button' : 'inactive-button button'}
            onClick={this.toggleMode}>
                All States
          </div>
          {!nationalMode && stateMode ?
            <div className={animationEnabled ? 'active-button button' : 'inactive-button button'}
              onClick={this.toggleAnimation}>
              Animation {animationEnabled ? 'On' : 'Off'}
            </div> : null}
        </div>
        <div className="main-layout">
          <div className="counties-container">
            <h2>{selectedState} Counties</h2>
            <h4>Confirmed Cases</h4>
            <ul className="county-list">
              {stateStats.length ? 
                stateStats.map(i => {return(<li key={i.city}>
                  <p className="counties" style={{color: i.confirmed > 5000 ? '#964eba' 
                    : i.confirmed > 1000 ? '#ba4e66'
                      : i.confirmed > 500 ? '#f00' 
                        : i.confirmed > 100 ? '#bd7115' 
                          : i.confirmed > 50 ? '#ada61f' : '#000', fontWeight: 'bold'}}>
                    {i.city || i.province}: {i.confirmed}
                  </p>
                </li>);
                }) : null}
            </ul>
          </div>
          <div className="visualizer">
            {data && data.covid19Stats && data.covid19Stats.length
            && stateMode && !nationalMode && !updating
              ? <Network 
                data={data}
                nodes={stateNodes}
                edges={stateEdges}
                ohioMode={stateMode}
                selectNode={this.selectNode}
                events={this.events}
                physics={animationEnabled ? this.animationOn : true} /> : null}
            {data && data.covid19Stats && data.covid19Stats.length
            && nationalMode && !stateMode && !updating
              ? <Network 
                data={data}
                nodes={allNodes}
                edges={allEdges}
                ohioMode={stateMode}
                selectNode={this.selectNode}
                physics={this.animationEnabled} /> : null}
          </div>
          {/* <div className="graph-3d">
          graph 3d
        </div> */}
        </div>
        <footer>Data source: Johns Hopkins University via RapidAPI</footer>
      </div>
    );
  }
}

export default Main;
