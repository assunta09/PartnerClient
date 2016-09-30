
// import React = require('react');

// class NodeToolTip extends React.Component<any, any>{
//     render() {
//         const node = this.props.node;
//         const style = {
//             left: node.x,
//             top: node.y,
//             position: "absolute"
//         };
        
//         return (<div style={style} className="tooltip">
//             <span className="toolTipRow"><b>{node.label}</b></span>
//             <span className="toolTipRow">Revenue: $${node.Revenue}</span>
//             <span className="toolTipRow">Cost of goods: $${node.CostOfGoods}</span>
//        </div>);            
//     }
// }

// export = NodeToolTip;

import React, { PropTypes } from 'react';

const { number, node } = PropTypes;

const Tooltip = React.createClass({
    propTypes: {
        top: number.isRequired,
        left: number.isRequired,
        html: node,
        translate: number
    },

    getDefaultProps() {
        return {
            top: 150,
            left: 100,
            html: '',
            translate: 50
        };
    },

    render() {
        const {top, left, hidden, html, translate} = this.props;

        const style = {
            display: hidden ? 'none' : 'block',
            position: 'fixed',
            top,
            left,
            transform: `translate(-${translate}%, 0)`,
            pointerEvents: 'none'
        };

        return <div className="tooltip" style={style}>{html}</div>;
    }
});

export default Tooltip;
