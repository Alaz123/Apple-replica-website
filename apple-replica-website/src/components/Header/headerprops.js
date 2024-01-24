import React, { Component } from "react";

export default class Headerprops extends Component {
	render() {
		
		return (
			<li className="nav-item" >
				<a className="nav-link js-scroll-trigger" href={this.props.href}>
					{this.props.name}
					{this.props.img && <img src={this.props.img}></img>}
					
				</a>
			</li>
		);
	}
}
