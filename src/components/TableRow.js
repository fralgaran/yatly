import React from 'react';
import CompleteButton from './CompleteButton';
import RemoveButton from './RemoveButton';

export default class TableRow extends React.Component {
	render(){			
		let isOpen = (!this.props.isOpen) ? true : null;
		
		if (!this.props.isVisible) return null;
			return (									
				<tr className="trow" index={this.props.index} data-complete={isOpen}>
					<td className="tcell">
						<CompleteButton handleCompleteItem = {this.props.handleCompleteItem} index={this.props.index}/>
					</td>
					<td className="tcell"> 
						<span>{this.props.item}</span>
					</td>
					<td className="tcell">
						<RemoveButton handleDeleteItem = {this.props.handleDeleteItem} index={this.props.index}/>
					</td>					
				</tr>
			);
	}
}