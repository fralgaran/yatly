import React from 'react';

export default class ShowOpenItemsButton extends React.Component {
	render(){
		return (
			<button 
				className="btn"
				onClick={this.props.handleShowOnlyOpenTasks}>
				Only open tasks</button>
		);
	}
}