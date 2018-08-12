import React from 'react';

export default class CompleteButton extends React.Component {
	render(){
		return (
			<button 
				className="complete"
				onClick={this.props.handleCompleteItem}
			></button>
		);
	}
}