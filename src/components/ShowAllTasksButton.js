import React from 'react';

export default class ShowAllTasksButton extends React.Component {
	render(){
		return (
			<button 
				className="btn active"
				onClick={this.props.handleShowAllTasks}>
				All tasks!</button>
		);
	}
}