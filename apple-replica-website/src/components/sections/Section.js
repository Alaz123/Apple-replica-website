import React, { Component } from "react";
import Sectionprops from "./Sectionprops";
import Rate from '../Rate/Rate'

export default class Section extends Component {
	render() {
		let section = [
			{
				classn: "first-hightlight-wrapper",
				new: "New",
				product: "iPad Pro",
				ipad: "iPad Pro available starting 3.25",
				Purchase: "Order",
				tadd: "black",
				dadd: "black",
				padd: "grey",
			},

			{
				classn: "third-hightlight-wrapper",
				new: "New",
				product: "iPhone 11 Pro",
				Purchase: "Buy",
				desc: "Pro cameras. Pro display. Pro performance.",
				price: "From $24.95/mo. or $599 with trade‑in.",
			},
		];
		return (
			<>
				{section.map((data, index) => (
					<Sectionprops key={index} {...data} />
				))}
				<div>
				<section class="second-hightlight-wrapper">
		<div class="container">

			<div class="new-alert">
				New
			</div>

			<div class="title-wraper bold black">
				MacBook Air 
			</div> 

			<div class="description-wrapper black">
				Twice the speed. Twice the storage.
			</div>

			<div class="price-wrapper grey">
				From $999.
			</div>

			<div class="links-wrapper">
				<ul>
					<li><a href="">Learn more</a></li>
					<li><a href="">Buy</a></li>
				</ul> 
			</div>
		</div>
					</section>
					<Rate/>
				</div>
			</>
		);
	}
}
