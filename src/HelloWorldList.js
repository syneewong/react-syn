import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import './HelloWorldList.css';

class HelloWorldList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			greetings : ['Syn-Ee', 'Eeshenn', 'Bender']
		};
	}

	// map operation, which says “loop over the array and call a function for each element in that array,
	// storing the results in a new array”.
	renderGreetings() {
		return this.state.greetings.map(name => ( // map each item in the array to a special anonymous function
    		// key helps make it unique
    		<HelloWorld key={name} name={name}/>
  		));
	}

	render() {
		return (
	      	<div className="HelloWorldList">
	        	{this.renderGreetings()}
	      	</div>
		);
	}
}

export default HelloWorldList;