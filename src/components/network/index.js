import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Graph from 'vis-react';
import './network.css';
import style from 'vis-network/styles/vis-network.css';
 

 
// var events = {
//   select: function(event) {
//     var { nodes, edges } = event;
//   }
// };

class Network extends Component {
  // eslint-disable-next-line no-unused-vars
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.nodes !== this.props.nodes;
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
  };

  // Graph.on('dragEnd', function (params) {
  //   for (var i = 0; i < params.nodes.length; i++) {
  //     var nodeId = params.nodes[i];
  //     nodes.update({id: nodeId, fixed: {x: true, y: true}});
  //   }
  // });
  // this.vis.on('dragStart', function(params) {
  //   for (var i = 0; i < params.nodes.length; i++) {
  //     var nodeId = params.nodes[i];
  //     nodes.update({id: nodeId, fixed: {x: false, y: false}});
  //   }
  // });
  
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
          // events={this.events}
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
  ohioMode: PropTypes.bool
};
export default Network;