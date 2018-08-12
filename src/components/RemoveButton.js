import React from 'react';

export default class RemoveButton extends React.Component {
	render(){
		return (
			<button onClick={this.props.handleDeleteItem} className="remove">X</button>
		);
	}
}