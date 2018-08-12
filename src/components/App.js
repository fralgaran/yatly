import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Table from './Table';

import './App.scss';

class App extends Component {
  render() {
    return (
			<div class="wrapper">
				<div className="background-layer deg1">
					<div className="background-layer deg2">
						<div className="background-layer deg1">
							<div className="content-layer">
								<h1>Stuff i've got to do</h1>
								<Table/>
							</div>
						</div>
					</div>
				</div>					
			</div>					
		)
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}