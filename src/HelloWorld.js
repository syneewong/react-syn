import React, { Component } from 'react';
import './HelloWorld.css';

class HelloWorld extends Component {
	// class component in React needs the render() function
	render () {
		return (
			// props.name now is this.props.name after extending class from React Components
			<div className="HelloWorld">Hello {this.props.name}!</div>
		);
	}
};

export default HelloWorld;