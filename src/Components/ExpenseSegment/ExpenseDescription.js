import React from 'react'
import './styles.css'

var Description = React.createClass ({
	render () {
		return (
			<div className="Description">
				<ul>
          <li><i className="material-icons li1">network_cell</i>  Grants</li>
          <li><i className="material-icons li2">network_cell</i>  Member Benefits</li>
          <li><i className="material-icons li3">network_cell</i>  Salaries</li>
          <li><i className="material-icons li4">network_cell</i>  Fundraising</li>
          <li><i className="material-icons li5">network_cell</i>  Other</li>
        </ul>
			</div>
		);
	}
});

export default Description;
