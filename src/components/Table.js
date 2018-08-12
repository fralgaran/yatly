import React from 'react';
import TableRow from './TableRow';
import InputRow from './InputRow';
import ShowOpenItemsButton from './ShowOpenItemsButton';
import ShowAllTasksButton from './ShowAllTasksButton';

export default class Table extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			todoList: []
		}
  }
	// handler for removing item
	handleDeleteItem(index){
		this.setState({
			todoList: this.state.todoList.filter((_, i) => i !== index)
		});
	};
	
	// handler for complete state
	handleCompleteItem(index) {
		const todos = this.state.todoList;
		todos[index].isOpen = !todos[index].isOpen;
		this.setState({
			todos,
		});
	}

	// handler for adding new item by pressing Enter
	// Form might be better..
	
	handleNewTask(e) {
		if (e.key === 'Enter' &&  e.target.value !== "") {
			const todos = this.state.todoList;
			todos.push({
				value: e.target.value,
				isOpen: true,
				visible: true
			});
			this.setState({
				todos
			});
			e.target.value = "";
		}
	}

	handleShowOnlyOpenTasks() {
		const todos = this.state.todoList;
		this.state.todoList.map((item, index) => {
			if (!item.isOpen) {
				todos[index].visible = false;
				this.setState({
					todos,
				});
			}
		console.log(this.state);
		});
	}

	handleShowAllTasks() {
		const todos = this.state.todoList;
		this.state.todoList.map((item, index) => {
		
			todos[index].visible = true;
			this.setState({
				todos,
			});
		
		});
	}
 
	render() {
		return (
			<div >
				<table className="task-table">
					{this.state.todoList.map((item, index) => (			
						<TableRow  
							item={item.value} 
							isOpen={item.isOpen} 
							isVisible={item.visible}
							handleDeleteItem={this.handleDeleteItem.bind(this,index)}
							handleCompleteItem={this.handleCompleteItem.bind(this,index)}
						/>
					))}
					<InputRow 
						handleNewTask = {this.handleNewTask.bind(this)}
					/>
				</table>
				<div id="buttons">
					<span>Show </span>	
					<ShowOpenItemsButton 
						handleShowOnlyOpenTasks = {this.handleShowOnlyOpenTasks.bind(this)} />	
					<ShowAllTasksButton 
						handleShowAllTasks = {this.handleShowAllTasks.bind(this)} />			
				</div>
			</div>
		);
	}
}