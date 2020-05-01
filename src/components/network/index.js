import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Graph from 'vis-react';
import './network.css';
import style from 'vis-network/styles/vis-network.css';
 
class Network extends Component {
  // eslint-disable-next-line no-unused-vars
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.nodes.length !== this.props.nodes.length;
  }

  options = {
    layout: {
      hierarchical: false,
      improvedLayout: this.props.ohioMode
    },
    edges: {
      color: '#000000'
    },
    interaction: { hoverEdges: true },
    height: '800px',
    nodes: {
      color: 'skyblue'
    },
    physics: this.props.physics
  };
  
  render() {
    const { nodes, edges } = this.props;
    const graph = {
      nodes: nodes, edges: edges
    };
    return (
      <div className="network">
        <Graph
          graph={graph}
          options={this.options}
          events={this.props.events}
          style={style}
          //   getNetwork={this.getNetwork}
          //   getEdges={this.getEdges}
          //   getNodes={this.getNodes}
          vis={vis => (this.vis = vis)}
        />
      </div>
    );
  }
}

Network.propTypes = {
  data: PropTypes.object,
  nodes: PropTypes.array,
  edges: PropTypes.array,
  ohioMode: PropTypes.bool,
  selectNode: PropTypes.func,
  events: PropTypes.object,
  physics: PropTypes.object
};
export default Network;