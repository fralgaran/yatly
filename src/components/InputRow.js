import React from 'react';
export default class InputRow extends React.Component {
	
	render(){			
		return (	
			<tr className="trow">				
				<td className="tcell" colspan="3"	> 
					<input onKeyPress={this.props.handleNewTask}  type="text" placeholder="Add new task" />
				</td>					
			</tr>
		);
	}
}