import React, { Component } from 'react';
import './HelloWorld.css';

class HelloWorld extends Component {
	// implement a constructor - a function that is called when the class is used anywhere
	// constructor is an instantiation
	// needs a props argument (props)
	// needs to call out to its parent constructor via the call to super(props)
	// then set a property on the class called "state" via this.state declaration
	constructor(props) {
		super(props);
		this.state = {
			greeting: 'Holla'
		};

		// 'this' binds the this correctly in the frenchify function
		this.frenchify = this.frenchify.bind(this);
	}

	// fernchify function
	frenchify() {
		this.setState({
			greeting: 'Bonjour'
		});
	}

	// class component in React needs the render() function
	render () {
		return (
			// props.name now is this.props.name after extending class from React Components
			// add button to change state
			<div className="HelloWorld">
				{this.state.greeting} {this.props.name}!
				<br/>
				<button onClick={this.frenchify}>Frenchify!</button>
			</div>
		);
	}
};

export default HelloWorld;