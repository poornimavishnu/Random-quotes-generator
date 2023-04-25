
import React from 'react';
import axios from 'axios';


//import Pic from './Component/image ';
//import Header from './Component/Header';
import './App.css';

class App extends React.Component {
	
	state = { advice: '' };
  
	componentDidMount() {
		this.fetchAdvice();
	}

	fetchAdvice = () => {
		document.body.style.backgroundColor=
    'rgb(' + Math.round(Math.random() * 300) +
    ',' +  Math.round(Math.random() * 300) +
    ',' + Math.round(Math.random() * 300) + ')';

		
		axios.get('https://api.adviceslip.com/advice')
		.then((response) => {
			const { advice } = response.data.slip;
			this.setState({ advice });
		})
		.catch ((error) => {
			console.log(error);
		})
	}
	

	render() {
		//const { advice } = this.state;

		return (
			
			<div className="app" >
				<div className="card">
					<h1 className="heading">
					{this.state.advice}
					</h1>
					<button className="button" onClick=
					{this.fetchAdvice} displayColor={this.randomColor} >
						
						<span>click here to see new quotes</span>
					</button>
				</div>
			</div>
			
		);
	}
}

export default App;