import React, { Component } from "react";
// importing the imgs
import logo from "../../resources/images/icons/logo-sm.png";
import search from "../../resources/images/icons/search-icon-sm.png";
import cart from "../../resources/images/icons/cart-sm.png";
// import the Headerpropsprops used to bulid li`s
import Headerprops from "./headerprops";

export default class Nav extends Component {
	render() {
		let data = [
			{ name: "Mac", href: "/mac/" },
			{ name: "Iphone", href: "/iphone" },
			{ name: "ipad", href: "/ipad" },
			{ name: "Watch", href: "/watch" },
			{ name: "Tv", href: "/tv" },
			{ name: "Music", href: "/music" },
			{ name: "Support", href: "/support" },
			{  href:"/search", img:search  },
			{  href:"/cart", img:cart },
	
			
		];

		return (
			<div className="nav-wrapper fixed-top">
				<div className="container">
					<nav className="navbar navbar-toggleable-sm navbar-expand-md">
						<button
							className="navbar-toggler navbar-toggler-right"
							type="button"
							data-toggle="collapse"
							data-target=".navbar-collapse"
						>
							☰
						</button>
						<a className="navbar-brand mx-auto" href="/">
							<img src={logo} />
						</a>

						<div className="navbar-collapse collapse">
							<ul className="navbar-nav nav-justified w-100 nav-fill">
							{data.map((value, index) => 
									<Headerprops key={index} {...value} />
								)}
								{/* {data.map((value, index) => (
									<Headerprops key={index} href={value.href} name={ value.name} />
								))} */}

								{/* <Headerprops href="/search" img={search} />
								<Headerprops href="/cart" img={cart} /> */}
							</ul>
						</div>
					</nav>
				</div>
			</div>
		);
	}
}
